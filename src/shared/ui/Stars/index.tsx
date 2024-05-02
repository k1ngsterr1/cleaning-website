import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface IStarsRatingProps {
  rating: number;
}

export const StarsRating: React.FC<IStarsRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className={styles.star} />
  ));

  return <div className="flex items-center gap-1">{stars}</div>;
};
