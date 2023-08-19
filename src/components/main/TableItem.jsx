import styles from "./TableItem.module.scss";
import Format from "../../helper/format";

const TableItem = ({ episode }) => {
  return (
    <div className={styles.tableItem}>
      <div className={styles.image_container}>
        <img src={episode.images[2].url} alt="" />
      </div>
      <p className={styles.title}>{episode.name}</p>
      <p>{Format.dateFormat(episode.release_date)}</p>
      <p>{Format.timeFormat(episode.duration_ms)}</p>
    </div>
  );
};

export default TableItem;
