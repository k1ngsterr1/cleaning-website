import React from "react";
import styles from "./styles.module.scss";

interface IBurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  firstLine: React.RefObject<HTMLSpanElement>;
  secondLine: React.RefObject<HTMLSpanElement>;
  thirdLine: React.RefObject<HTMLSpanElement>;
}

export const BurgerButton: React.FC<IBurgerButtonProps> = ({
  isOpen,
  onClick,
  firstLine,
  secondLine,
  thirdLine,
}) => {
  return (
    <button className={styles.burger_button} onClick={onClick}>
      <span className={styles.burger_button__line} ref={firstLine} />
      <span className={styles.burger_button__line} ref={secondLine} />
      <span className={styles.burger_button__line} ref={thirdLine} />
    </button>
  );
};
