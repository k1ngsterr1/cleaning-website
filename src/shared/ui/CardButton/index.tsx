import React from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

export const CardButton = () => {
  return (
    <button className={styles.button}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};
