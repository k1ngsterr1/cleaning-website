import React from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

interface IActivityCardProps {
  icon: IconDefinition;
  activity: string;
}

export const ActivityCard: React.FC<IActivityCardProps> = ({
  icon,
  activity,
}) => {
  return (
    <div className={styles.activity_card}>
      <FontAwesomeIcon icon={icon} className={styles.activity_card__icon} />
      <p className={styles.activity_card__paragraph}>{activity}</p>
    </div>
  );
};
