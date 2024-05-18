import React, { useState, useEffect } from "react";
import { useSwiper } from "@shared/lib/hooks/useSwiper";
import { SwiperButton } from "@shared/ui/SwiperButton";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

interface ISwiperProps {
  children: React.ReactNode[] | React.ReactNode;
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

  const slideWidth = 100 / slidesPerView; // Width of each slide as a percentage of the viewport
  const step = slideWidth; // Each step is now equal to the width of one slide view
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    setTranslateX(-currentIndex * step);
  }, [currentIndex, step]);

  return (
    <div className={styles.swiper_container}>
      <div
        className={styles.swiper_wrapper}
        style={{
          transform: `translateX(${translateX}%)`,
          width: `${slideWidth * totalSlides}%`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={styles.swiper_slide}
            key={index}
            style={{ width: `${slideWidth}%` }}
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
