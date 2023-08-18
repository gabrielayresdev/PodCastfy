import React from "react";
import styles from "./PodcastIcon.module.scss";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import useFetch from "../../hooks/useFetch";
import { getPodcast } from "../../api";

const PodcastIcon = ({ id }) => {
  const [url, setUrl] = React.useState();
  const global = React.useContext(GlobalContext);

  const { data, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = getPodcast(id, global.data.access_token);
    request(url, options);
  }, [request, id, global]);

  if (data) {
    // Faz com que a url só seja definia após a imagem carregar
    const img = new Image();
    img.src = data.images[1].url;
    img.onload = function () {
      setUrl(img.src);
    };
  }

  if (id)
    return (
      <Link to={`/podcast/${id}`} className={styles.podcast}>
        {url ? <img src={url}></img> : null}
      </Link>
    );
  else return null;
};

export default PodcastIcon;
