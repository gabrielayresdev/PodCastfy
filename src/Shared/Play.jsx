import React from "react";
import styles from "./Play.module.scss";
import { GlobalContext } from "../contexts/GlobalContext";

const Play = React.forwardRef(({ midia }, ref) => {
  const global = React.useContext(GlobalContext);

  function play() {
    global.midia?.pause();
    const preview = new Audio(midia.url);
    global.setMidia(preview);
    preview.play();
    global.setPlayerData(midia);
  }

  return (
    <div className={styles.play} onClick={play} ref={ref}>
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
  );
});

Play.displayName = "Play";

export default Play;
