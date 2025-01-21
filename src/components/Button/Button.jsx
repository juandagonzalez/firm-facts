import React from "react";
import styles from "./Button.module.scss";

const Button = ({ variant = "default", text, disabled }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        disabled ? styles.disabled : ""
      }`}
      disabled={disabled}
    >
      {variant === "icon" && <span className={styles.icon}>🔍</span>}
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
