import React from "react";
import styles from "./Player.module.scss";
import pause from "/src/assets/pause.svg";
import play from "/src/assets/play-player.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import Format from "../../helper/format";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Player = () => {
  const isMobile = window.screen.width <= 1024;
  const [isOpen, setIsOpen] = React.useState(false);
  const global = React.useContext(GlobalContext);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);

  function handleClick() {
    if (isMobile) {
      if (!isOpen) {
        setIsOpen(true);
      }
    }
  }

  React.useEffect(() => {
    setTime(0);
    if (global.midia) {
      global.midia.addEventListener("timeupdate", () => {
        setTime(Math.floor(global.midia.currentTime));
      });
      setPlaying(true);
      global.midia.addEventListener("loadedmetadata", (e) => {
        setDuration(Math.round(e.target.duration));
      });
    }
  }, [global.midia]);

  function changeCurrentTime(newTime) {
    global.midia.currentTime = newTime;
    setTime(global.midia.currentTime);
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.player} ${isOpen ? null : styles.preview}`}
    >
      <div className={styles.close} onClick={() => setIsOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="#ADADAD"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <h2>Tocando agora</h2>
      <div className={styles.podcast_info}>
        <div
          className={styles.image_container}
          style={global.playerData ? { border: "none" } : null}
        >
          {global.playerData ? (
            <img
              src={global.playerData.img}
              alt=""
              className={styles.podcast_image}
            />
          ) : (
            <p>
              Selecione um <br /> podcast para ouvir
            </p>
          )}
        </div>
        <h2 className={styles.title}>{global.playerData?.name}</h2>
      </div>

      <div className={styles.bottom}>
        <div className={styles.progress}>
          <p className={styles.duration}>
            {global.midia ? Format.durationFormat(time) : "00:00"}
          </p>
          {global.playerData && duration ? (
            <Slider
              trackStyle={{ background: "#04d361" }}
              railStyle={{ background: "#9f75ff" }}
              handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              max={duration}
              value={time}
              onChange={changeCurrentTime}
            />
          ) : (
            <span className={styles.bar}></span>
          )}
          <p className={styles.duration}>{Format.durationFormat(duration)}</p>
        </div>
        <div className={styles.controls}>
          <span
            className={styles.play}
            onClick={() => {
              if (global.midia) {
                if (playing) {
                  global.midia.pause();
                } else {
                  global.midia.play();
                }
                setPlaying((current) => !current);
              }
            }}
          >
            {playing ? <img src={pause} /> : <img src={play} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
