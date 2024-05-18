import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

interface IThreeItemSwiper {
  children: React.ReactNode;
}

export const ThreeItemSwiper: React.FC<IThreeItemSwiper> = ({ children }) => {
  return (
    <div className={styles.swiper_container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className={styles.swiper_wrapper}>
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index} className={styles.swiper_slide}>
              <div className={styles.swiperSlide}>{child}</div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className={styles.swiperButtonContainer}>
        <button className="swiper-button-prev !text-yellow"></button>
        <button className="swiper-button-next !text-yellow"></button>
      </div>
    </div>
  );
};
