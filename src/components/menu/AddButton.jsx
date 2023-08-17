import React from "react";
import styles from "./AddButton.module.scss";

const AddButton = () => {
  return (
    <div className={styles.add}>
      <img src="/src/assets/plus-solid.svg" alt="" />
    </div>
  );
};

export default AddButton;
