import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getPodcast } from "../../api";
import styles from "./Podcast.module.scss";
import getAverageColor from "get-average-color";
import TableItem from "./TableItem";

const Podcast = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const global = React.useContext(GlobalContext);
  const [url, setUrl] = React.useState("");
  const [coverStyle, setCoverStyle] = React.useState({});

  React.useEffect(() => {
    const token = global.data.access_token;

    const { url, options } = getPodcast(id, token);

    request(url, options);
  }, [request, global, id]);

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

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (data)
    return (
      <div className={styles.podcast}>
        <div className={styles.cover} style={coverStyle}>
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
          {data.episodes.items.map((episode) => {
            return <TableItem key={episode.id} episode={episode} />;
          })}
        </div>
      </div>
    );
};

export default Podcast;
