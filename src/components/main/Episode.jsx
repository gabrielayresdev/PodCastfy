import React from "react";
import styles from "./Episode.module.scss";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getEpisode } from "../../api";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import wall from "/src/assets/wall.png";
import returnIcon from "/src/assets/return.png";
import Format from "../../helper/format";
import Loading from "../../helper/Loading";
import Play from "../../Shared/Play";

const Episode = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    const { url, options } = getEpisode(id, global.data.access_token);
    request(url, options);
  }, [request, id]);

  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.episode}>
        <div className={styles.banner}>
          <div
            className={styles.return}
            onClick={() => {
              history.back();
            }}
          >
            <img src={returnIcon} alt="" style={{ pointerEvents: "none" }} />
          </div>
          <img src={wall} alt="" />
          <div className={styles.play}>
            <Play
              midia={{
                url: data.audio_preview_url,
                img: data.images[1].url,
                name: data.name,
              }}
              containerStyle={
                "bg-[#04D361] min-w-[48px] rounded-[.75rem] hover:bg-[#00e768] outline-none"
              }
              svgStyle="fill-[#fff]"
            />
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
