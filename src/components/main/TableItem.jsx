import styles from "./TableItem.module.scss";
import Format from "../../helper/format";
import play from "/src/assets/play.svg";

const TableItem = ({ episode }) => {
  return (
    <div className={styles.tableItem}>
      <div className={styles.image_container}>
        <img src={episode.images[2].url} alt="" />
      </div>
      <p className={styles.title}>{episode.name}</p>
      <p className={styles.date}>{Format.dateFormat(episode.release_date)}</p>
      <p className={styles.duration}>
        {Format.timeFormat(episode.duration_ms)}
      </p>

      <div className={styles.play}>
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
