import React from "react";
import styles from "./styles.module.scss";

interface IBurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<IBurgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button className={styles.burger_button} onClick={onClick}>
      <span className={styles.burger_button__line} />
      <span className={styles.burger_button__line} />
      <span className={styles.burger_button__line} />
    </button>
  );
};
