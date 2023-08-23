import styles from "./TableItem.module.scss";
import Format from "../../helper/format";
import React from "react";
import { useNavigate } from "react-router-dom";

const TableItem = ({ episode }) => {
  const play = React.useRef();
  const navigate = useNavigate();
  const handleClick = ({ target }) => {
    if (target === play.current) {
      console.log("play");
    } else {
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

      <div className={styles.play} onClick={handleClick} ref={play}>
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ pointerEvents: "none" }}
        >
          <path
            d="M0.666748 0.166687V11.8334L9.83342 6.00002L0.666748 0.166687Z"
            fill="#04D361"
          />
        </svg>
      </div>
    </div>
  );
};

export default TableItem;
