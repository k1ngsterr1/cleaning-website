import React, { type ReactNode } from "react";
import { useSwiper } from "@shared/lib/useSwiper";
import styles from "./styles.module.scss";
import { SwiperButton } from "@shared/ui/SwiperButton";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ISwiperProps {
  children: ReactNode[];
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

  const slideWidth = 100 / slidesPerView;

  return (
    <div className={styles.swiper_container}>
      <div
        className={styles.swiper_wrapper}
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          width: `${(100 * totalSlides) / slidesPerView}%`,
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
