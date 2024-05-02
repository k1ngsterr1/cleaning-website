import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarsRating } from "@shared/ui/Stars";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface IReviewCardProps {
  name: string;
  position: string;
  stars: number;
  text: string;
}

export const ReviewCard: React.FC<IReviewCardProps> = ({
  name,
  position,
  text,
}) => {
  return (
    <div className={styles.review_card}>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faUser} className={styles.review_card__icon} />
        <div className="flex flex-col items-start">
          <span className={styles.review_card__name}>{name}</span>
          <span className={styles.review_card__position}>{position}</span>
          <StarsRating rating={5} />
        </div>
      </div>
      <p className="paragraph mt-4 ml-7">{text}</p>
    </div>
  );
};
