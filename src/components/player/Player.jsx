import React from "react";
import styles from "./Player.module.scss";
import pause from "/src/assets/pause.svg";
import playArrow from "/src/assets/play_arrow.png";
import shuffle from "/src/assets/Group.png";
import repeat from "/src/assets/Repeat,Rotate.png";
import play from "/src/assets/play-player.svg";

const Player = () => {
  const isMobile = window.screen.width <= 1024;
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    if (isMobile) {
      if (!isOpen) {
        setIsOpen(true);
      }
    }
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
      <div className={styles.image_container}>
        <p>
          Selecione um <br /> podcast para ouvir
        </p>
        <img src={""} alt="" className={styles.podcast_image} />
      </div>

      <div className={styles.bottom}>
        <div className={styles.progress}>
          <p className={styles.duration}>00:00</p>
          <span className={styles.bar}></span>
          <p className={styles.duration}>00:00</p>
        </div>
        <div className={styles.controls}>
          <span className={styles.controls_icon}>
            <img src={shuffle} alt="" />
          </span>
          <span className={styles.controls_icon} data-previous>
            <img src={playArrow} alt="" />
          </span>
          <span className={styles.play}>
            <img src={play} alt="" />
          </span>
          <span className={styles.controls_icon} id="next">
            <img src={playArrow} alt="" />
          </span>
          <span className={styles.controls_icon}>
            <img src={repeat} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
