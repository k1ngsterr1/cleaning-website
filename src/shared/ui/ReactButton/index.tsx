import React from "react";
import styles from "../Button/styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  text: string;
  buttonType: "filled" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  margin,
  text,
  buttonType,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[buttonType]} ${
    margin ? margin : ""
  }`;

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
};

export default Button;
