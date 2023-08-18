import React from "react";
import styles from "./PodcastIcon.module.scss";
import { Link } from "react-router-dom";

const PodcastIcon = ({ id }) => {
  const [url, setUrl] = React.useState();

  React.useEffect(() => {
    async function fetchImg() {
      const response = await fetch(
        "https://api.spotify.com/v1/shows/22Wgt4ASeaw8mmoqAWNUn1?market=BR",
        {
          headers: {
            Authorization:
              "Bearer BQDhm-09PGMWBHtbm1SXZlWw8XuKioJdM9-9qDVYSKeIX4ebbiPKQeoJJWgoDIwMa70M_1s0BB3XwQnarklszuwJOyw2JGoAVQvKi1dfXynHRxideCM",
          },
        }
      );
      const json = await response.json();

      // Faz com que a url só seja definia após a imagem carregar
      const img = new Image();
      img.src = json.images[1].url;
      img.onload = function () {
        setUrl(img.src);
      };
    }
    fetchImg();
  }, []);

  if (id)
    return (
      <Link to={`/podcast/${id}`} className={styles.podcast}>
        {url ? <img src={url}></img> : null}
      </Link>
    );
  else return null;
};

export default PodcastIcon;
