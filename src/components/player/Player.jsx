import React from "react";
import styles from "./Player.module.scss";
import pause from "/src/assets/pause.svg";
import playArrow from "/src/assets/play_arrow.png";
import shuffle from "/src/assets/Group.png";
import repeat from "/src/assets/Repeat,Rotate.png";
import play from "/src/assets/play-player.svg";

const Player = () => {
  return (
    <div className={styles.player}>
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
