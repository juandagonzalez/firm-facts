import React from "react";
import Button from "../Button/Button";
import styles from "./FirmFactCard.module.scss";

const FirmFactCard = ({ variant, buttonVariant, buttonText, buttonDisabled }) => {
  return (
    <div className={`${styles.firmFactCard} ${styles[variant]}`}>
      <Button
        variant={buttonVariant}
        text={buttonText}
        disabled={buttonDisabled}
      />
    </div>
  );
};

export default FirmFactCard;
