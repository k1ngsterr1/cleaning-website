import React from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

interface ISwiperButton {
  icon: IconDefinition;
  onClick: () => void;
}

export const SwiperButton: React.FC<ISwiperButton> = ({ icon, onClick }) => {
  return (
    <button className={styles.swiper_button}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
