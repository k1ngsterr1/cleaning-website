import React from "react";
import styles from "../Button/styles.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  text: string;
  buttonType: "filled" | "outline" | "outline-yellow";
  to?: string;
  onClick?: () => void;
}

const ReactButton: React.FC<ButtonProps> = ({
  margin,
  text,
  buttonType,
  onClick,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[buttonType]} ${
    margin ? margin : ""
  }`;

  return (
    <button className={buttonClass} {...rest} onClick={onClick}>
      {text}
    </button>
  );
};

export default ReactButton;
