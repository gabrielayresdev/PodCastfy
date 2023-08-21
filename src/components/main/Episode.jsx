import React from "react";
import styles from "./Episode.module.scss";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getEpisode } from "../../api";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import wall from "/src/assets/wall.png";
import returnIcon from "/src/assets/return.png";
import Format from "../../helper/format";

const Episode = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    const { url, options } = getEpisode(id, global.data.access_token);
    request(url, options);
  }, [request, id]);

  if (data) {
    const d = data.description;

    console.log(d.split("    "));
  }

  if (data)
    return (
      <div className={styles.episode}>
        <div className={styles.banner}>
          <div
            className={styles.return}
            onClick={() => {
              console.log(history.back());
            }}
          >
            <img src={returnIcon} alt="" style={{ pointerEvents: "none" }} />
          </div>
          <img src={wall} alt="" />
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

        <div className={styles.text_container}>
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.info}>
            <p>{data.show.publisher}</p>
            <p>{Format.dateFormat(data.release_date)}</p>
            <p>{Format.timeFormat(data.duration_ms)}</p>
          </div>

          <span className={styles.line}></span>
          {data.description.split("    ").map((paragraph, index) => {
            return (
              <p key={index} className={styles.description}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    );
  else return null;
};

export default Episode;
