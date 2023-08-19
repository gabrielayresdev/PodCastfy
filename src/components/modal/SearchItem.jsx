import React from "react";
import styles from "./SearchItem.module.scss";
const SearchItem = ({ data }) => {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (data) {
      const img = new Image();
      img.src = data.images[1].url;
      img.onload = function () {
        setUrl(img.src);
      };
    }
  }, [data]);
  return (
    <div className={styles.item}>
      <img src={url ? url : null} alt="" className={styles.loading_animation} />
      <div className={styles.text_container}>
        <h2>{data.name}</h2>
        <p>{`${data.total_episodes} episódio${
          data.total_episodes > 1 ? "s" : ""
        }`}</p>
      </div>
    </div>
  );
};

export default SearchItem;
