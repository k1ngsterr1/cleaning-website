import React from "react";
import { Link } from "react-scroll";
import type { ButtonProps } from "../ReactButton";

import styles from "../Button/styles.module.scss";

export const ReactLink: React.FC<ButtonProps> = ({
  margin,
  text,
  to,
  buttonType,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[buttonType]} ${
    margin ? margin : ""
  }`;

  return (
    <Link className={buttonClass} {...rest} to={to} smooth>
      {text}
    </Link>
  );
};
