import styles from "./TableItem.module.scss";
import Format from "../../helper/format";
import React from "react";
import { useNavigate } from "react-router-dom";
import Play from "../../Shared/Play";

const TableItem = ({ episode }) => {
  const play = React.useRef();
  const navigate = useNavigate();
  const handleClick = ({ target }) => {
    if (target !== play.current) {
      navigate(`/episodio/${episode.id}`);
    }
  };

  return (
    <div className={styles.tableItem} onClick={handleClick}>
      <div className={styles.image_container}>
        <img src={episode.images[2].url} alt="" />
      </div>
      <p className={styles.title}>{episode.name}</p>
      <p className={styles.date}>{Format.dateFormat(episode.release_date)}</p>
      <p className={styles.duration}>
        {Format.timeFormat(episode.duration_ms)}
      </p>

      <div style={window.screen.width < 768 ? { display: "none" } : null}>
        <Play
          midia={{
            url: episode.audio_preview_url,
            img: episode.images[1].url,
            name: episode.name,
          }}
          ref={play}
        />
      </div>
    </div>
  );
};

export default TableItem;
