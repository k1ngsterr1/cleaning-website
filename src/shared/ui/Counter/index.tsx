// Add to the snippets & observer
import React from "react";
import CountUp from "react-countup";

import styles from "./styles.module.scss";

interface ICountUpProps {
  end: number;
  margin?: string;
}

export const Counter: React.FC<ICountUpProps> = ({ end, margin }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CountUp end={end} className={`${styles.counter} ${margin}`} />
        <p className="paragraph">Lorem Ipsum</p>
      </div>
    </>
  );
};
