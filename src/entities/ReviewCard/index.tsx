import React from "react";
import styles from "./styles.module.scss";

interface IReviewCardProps {
  name: string;
  stars: number;
  text: string;
}

export const ReviewCard: React.FC<IReviewCardProps> = ({
  name,
  stars,
  text,
}) => {
  return <div className={styles.review_card}>index</div>;
};
