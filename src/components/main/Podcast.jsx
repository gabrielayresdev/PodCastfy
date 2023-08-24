import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getPodcast } from "../../api";
import styles from "./Podcast.module.scss";
import getAverageColor from "get-average-color";
import TableItem from "./TableItem";
import Loading from "../../helper/Loading";

const Podcast = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const global = React.useContext(GlobalContext);
  const [url, setUrl] = React.useState("");
  const [coverStyle, setCoverStyle] = React.useState({});
  const navigator = useNavigate();
  const [visible, setVisible] = React.useState(10);
  const [episodes, setEpisodes] = React.useState([]);
  const [link, setLink] = React.useState();

  React.useEffect(() => {
    if (id) {
      const token = global.data.access_token;

      const { url, options } = getPodcast(id, token);
      request(url, options);
    }
  }, [request, global.data, id]);

  React.useEffect(() => {
    setEpisodes([]);
  }, [id]);

  React.useEffect(() => {
    if (data) {
      const img = new Image();
      img.src = data.images[1].url ? data.images[1].url : data.images[0].url;
      img.onload = function () {
        setUrl(img.src);

        getAverageColor(img.src).then(({ r, g, b }) => {
          let style = {
            background: `linear-gradient(180deg, rgb(${r},${g},${b}) 0%, rgb(${r},${g},${b}, .4) 75%, #f9f9f9 100%)`,
          };
          setCoverStyle(style);
        });
      };
    }
  }, [data]);

  function handleDelete() {
    global.deletePodcast(id);
    navigator("/");
  }

  /* Paginação */
  React.useEffect(() => {
    if (data && data.href !== link) {
      setEpisodes((actual) => [...actual, ...data.episodes.items]);
    }
    if (data && data.href !== link) setLink(data.href);
  }, [data, link]);

  async function loadMore({ target }) {
    async function getMoreEpisodes(url, options) {
      const response = await fetch(url, options);
      const json = await response.json();
      return json;
    }
    if (data && data.href !== link) setLink(data.href);
    setVisible((actual) => actual + 10);
    target.disabled = true;
    setTimeout(() => {
      target.disabled = false;
    }, 1000);
    if (visible > episodes.length * 0.8) {
      const token = global.data.access_token;
      const { options } = getPodcast(id, token);
      const novos = await getMoreEpisodes(data.episodes.next, options);
      setEpisodes((actual) => [...actual, ...novos.items]);
    }
  }

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  if (episodes && data)
    return (
      <div className={styles.podcast}>
        <div className={styles.cover} style={coverStyle}>
          <div className={styles.remove} onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </div>
          <div className={styles.data}>
            <div className={styles.image_container}>
              <img src={url ? url : null} alt="" />
            </div>
            <div className={styles.text_container}>
              <p>podcast</p>
              <h2>{data.name}</h2>
              <p className={styles.publisher}>{data.publisher}</p>
            </div>
          </div>
        </div>

        <div className={styles.episodes}>
          <div className={styles.tableHeader}>
            <p>Podcast</p>
            <p>Data</p>
            <p>Duração</p>
          </div>
          {episodes.slice(0, visible).map((episode) => {
            return <TableItem key={episode.id} episode={episode} />;
          })}
          <button onClick={loadMore} className={styles.button}>
            Carregar mais
          </button>
        </div>
      </div>
    );
  else return <div></div>;
};

export default Podcast;
