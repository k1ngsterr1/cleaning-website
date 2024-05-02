import React from "react";

import styles from "./styles.module.scss";

interface ILogoProps {
  color?: string;
  margin: string;
}

export const Logo: React.FC<ILogoProps> = ({ color, margin }) => {
  return (
    <a className={`${styles.logo} ${color} ${margin}`} href="/">
      Zaka Cleaning
    </a>
  );
};
