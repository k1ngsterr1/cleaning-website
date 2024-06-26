import React from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@features/Swiper/styles.module.scss";

interface ISwiperButton {
  icon: IconDefinition;
  onClick: () => void;
  isNext: boolean;
}

export const SwiperButton: React.FC<ISwiperButton> = ({
  icon,
  onClick,
  isNext,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${isNext ? styles.swiper_button_next : styles.swiper_button_prev} !p-4 !w-8 !h-8 flex items-center justify-center`}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
