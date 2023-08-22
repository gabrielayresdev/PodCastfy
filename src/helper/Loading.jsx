import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div class={styles.middle}>
        <div class={`${styles.bar} ${styles.bar1}`}></div>
        <div class={`${styles.bar} ${styles.bar2}`}></div>
        <div class={`${styles.bar} ${styles.bar3}`}></div>
        <div class={`${styles.bar} ${styles.bar4}`}></div>
        <div class={`${styles.bar} ${styles.bar5}`}></div>
        <div class={`${styles.bar} ${styles.bar6}`}></div>
        <div class={`${styles.bar} ${styles.bar7}`}></div>
        <div class={`${styles.bar} ${styles.bar8}`}></div>
      </div>
      <p>
        Carregando<span className={styles.loading_text}></span>
      </p>
    </div>
  );
};

export default Loading;
