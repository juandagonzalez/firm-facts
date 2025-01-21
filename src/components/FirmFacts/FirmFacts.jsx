import React from "react";
import FirmFactCard from "../FirmFactCard/FirmFactCard";
import styles from "./FirmFacts.module.scss";

const FirmFacts = () => {
  return (
      <div className={styles.firmFactsContainer}>
        <FirmFactCard
          variant="default"
          buttonVariant="icon"
          buttonText="This is a two-line button\nthat terminates with..."
        />

        <FirmFactCard
          variant="default"
          buttonVariant="icon"
          buttonText="This is a two-line button\nthat terminates with..."
        />

        <FirmFactCard
          variant="default"
          buttonVariant="default"
          buttonText="This is a one-line button"
        />

        <FirmFactCard
          variant="default"
          buttonVariant="icon"
          buttonText="This is a two-line button\nthat terminates with..."
        />

        <FirmFactCard
          variant="default"
          buttonVariant="icon"
          buttonDisabled={true}
          buttonText="This is a two-line button\nthat terminates with..."
        />

        <FirmFactCard
          variant="default"
          buttonVariant="icon"
          buttonText="This is a two-line button\nthat terminates with..."
        />

        <FirmFactCard
          variant="border"
          buttonVariant="icon"
          buttonDisabled={true}
          buttonText="This is a two-line button\nthat terminates with..."
        />
      </div>
  );
};

export default FirmFacts;
