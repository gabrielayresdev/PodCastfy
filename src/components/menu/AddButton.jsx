import React from "react";
import styles from "./AddButton.module.scss";
import plus from "/src/assets/plus-solid.svg";

const AddButton = () => {
  return (
    <div className={styles.add}>
      <img src={plus} alt="" />
    </div>
  );
};

export default AddButton;
