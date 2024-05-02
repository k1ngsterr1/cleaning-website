import React from "react";
import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  placeholder: string;
  type: string;
  textAlign?: "left" | "center" | "right";
}

const Input: React.FC<InputProps> = ({
  margin,
  placeholder,
  type,
  textAlign = "left",
  ...rest
}) => {
  const inputClass = `${styles.input} ${margin ? margin : ""}`;
  const inputStyle = { textAlign };

  return (
    <input
      className={inputClass}
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
