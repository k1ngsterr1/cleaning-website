import React, { useState } from "react";
import { SwiperButton } from "@shared/ui/SwiperButton"; // Assuming this is your custom button component
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss"; // Use your module SCSS for styling

const ThreeItemSwiper = ({ children }) => {
  const totalSlides = React.Children.count(children);
  const slidesPerView = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < totalSlides - slidesPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.swiperContainer}>
      <div
        className={styles.swiperWrapper}
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div className={styles.swiperSlide} key={index}>
            {child}
          </div>
        ))}
      </div>
      {totalSlides > slidesPerView && (
        <>
          <SwiperButton
            onClick={goToPrevious}
            icon={faChevronLeft}
            isNext={false}
          />
          <SwiperButton
            onClick={goToNext}
            icon={faChevronRight}
            isNext={true}
          />
        </>
      )}
    </div>
  );
};

export default ThreeItemSwiper;
