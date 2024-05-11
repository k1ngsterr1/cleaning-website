import { useState } from "react";

interface UseSwiperArgs {
  totalSlides: number;
  slidesPerView: number;
}

export const useSwiper = ({ totalSlides, slidesPerView }: UseSwiperArgs) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  // Next Button Logic
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + 1;
      if (nextIndex >= totalSlides) nextIndex = totalSlides - 1;
      return nextIndex;
    });
  };

  // Previous Button Logic
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      let prevIndexAdjusted = prevIndex - 1;
      if (prevIndexAdjusted < 0) prevIndexAdjusted = 0;
      return prevIndexAdjusted;
    });
  };

  // Touch Login
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  // Move Logic
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      goToNext();
    } else if (diff < -5) {
      goToPrevious();
    }

    setTouchPosition(null);
  };

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    handleTouchMove,
    handleTouchStart,
  };
};
