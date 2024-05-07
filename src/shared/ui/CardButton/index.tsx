import React from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

interface ICardButtonProps {
  onClick: () => void;
}

export const CardButton: React.FC<ICardButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} className={styles.button__icon} />
    </button>
  );
};
