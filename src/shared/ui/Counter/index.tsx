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
      <div className="flex flex-col items-center justify-center">
        {/* <CountUp end={end} className={`${styles.counter} ${margin}`} />
        <p className="paragraph !text-center">Lorem Ipsum</p> */}
      </div>
    </>
  );
};
