import React from "react";
import img from "/src/assets/undraw_podcast_re_wr88.svg";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.image_container}>
        <img src={img} alt="" />
      </div>

      <p>Nenhum podcast selecionado</p>
      <h2>
        Selecione um <span>podcast</span> e comece a <span>ouvir agora</span>{" "}
        mesmo
      </h2>
    </div>
  );
};

export default Home;
