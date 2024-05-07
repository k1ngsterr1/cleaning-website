import React, { useState, useEffect, type ReactNode } from "react";
import { useSwiper } from "@shared/lib/hooks/useSwiper";
import { SwiperButton } from "@shared/ui/SwiperButton";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface ISwiperProps {
  children: ReactNode[] | ReactNode;
  slidesPerView: number;
}

export const Swiper: React.FC<ISwiperProps> = ({ children, slidesPerView }) => {
  const totalSlides = React.Children.count(children);
  const {
    currentIndex,
    goToNext,
    goToPrevious,
    handleTouchStart,
    handleTouchMove,
  } = useSwiper({ totalSlides, slidesPerView });

  const slideWidth = 100 / slidesPerView; // Width of each slide as a percentage of the container
  const step = 100 / totalSlides; // Calculate the translation step based on the number of slides
  const [translateX, setTranslateX] = useState(0); // Initialize translateX state

  useEffect(() => {
    // Update translateX based on currentIndex and slideWidth
    setTranslateX(-currentIndex * step);
  }, [currentIndex, step]);

  return (
    <div className={styles.swiper_container}>
      <div
        className={styles.swiper_wrapper}
        style={{
          transform: `translateX(${translateX}%)`,
          width: `${100 * totalSlides}%`, // Ensure the wrapper is wide enough to contain all slides side by side
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={styles.swiper_slide}
            key={index}
            style={{ width: `${100 / totalSlides}%` }} // Each slide should occupy an equal portion of the total width
          >
            {child}
          </div>
        ))}
      </div>
      <SwiperButton
        onClick={goToPrevious}
        isNext={false}
        icon={faChevronLeft}
      />
      <SwiperButton onClick={goToNext} isNext={true} icon={faChevronRight} />
    </div>
  );
};
