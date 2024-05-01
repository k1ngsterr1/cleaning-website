import React from "react";
import styles from "./styles.module.scss";

interface IBurgerButtonProps {
  isOpen: boolean;
}

export const BurgerButton: React.FC<IBurgerButtonProps> = ({ isOpen }) => {
  return (
    <button className={styles.burger_button}>
      <span className={styles.burger_button__line} />
      <span className={styles.burger_button__line} />
      <span className={styles.burger_button__line} />
    </button>
  );
};
