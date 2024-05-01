import React from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardButton } from "@shared/ui/CardButton";

interface IServiceCardProps {
  icon: IconDefinition;
  heading: string;
  paragraph: string;
}

export const ServiceCard: React.FC<IServiceCardProps> = ({
  icon,
  heading,
  paragraph,
}) => {
  return (
    <div className={styles.service_card}>
      <FontAwesomeIcon icon={icon} />
      <span className={styles.service_card__heading}>{heading}</span>
      <p className={styles.service_card__paragraph}>{paragraph}</p>
      <CardButton />
    </div>
  );
};
