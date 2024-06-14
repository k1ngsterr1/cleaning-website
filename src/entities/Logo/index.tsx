import React from "react";
import logo from "@assets/images/logo.svg";
import styles from "./styles.module.scss";

interface ILogoProps {
  color?: string;
  margin?: string;
}

export const Logo: React.FC<ILogoProps> = ({ color, margin }) => {
  return (
    <a
      className={`${styles.logo} ${color} ${margin} flex items-center gap-4`}
      href="/"
    >
      <img className={styles.logo__icon} src={logo.src} alt="Logotype" />
      Zaka Cleaning
    </a>
  );
};
