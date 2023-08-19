import React from "react";
import styles from "./SearchItem.module.scss";
import { GlobalContext } from "../../contexts/GlobalContext";
const SearchItem = ({ data, setModal }) => {
  const [url, setUrl] = React.useState("");
  const { name, total_episodes, id } = data;
  const { state, savePodcast } = React.useContext(GlobalContext);
  const contains = state.includes(id);

  const img = new Image();
  img.src = data.images[1].url;
  img.onload = function () {
    setUrl(img.src);
  };

  return (
    <div
      className={styles.item}
      onClick={() => {
        savePodcast(id);
        setModal(false);
      }}
    >
      <div
        className={`${styles.image_container} ${
          contains ? styles.contains : ""
        }`}
      >
        <img
          src={url ? url : null}
          alt=""
          className={styles.loading_animation}
        />
      </div>
      <div className={styles.text_container}>
        <h2>{name}</h2>
        <p>{`${total_episodes} episódio${total_episodes > 1 ? "s" : ""}`}</p>
      </div>
    </div>
  );
};

export default SearchItem;
