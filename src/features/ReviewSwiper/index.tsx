import React from "react";
import { Swiper } from "@features/Swiper";
import { ReviewCard } from "@entities/ReviewCard";

import styles from "./styles.module.scss";

export const ReviewSwiper = () => {
  return (
    <>
      <Swiper slidesPerView={1}>
        <ReviewCard
          text="Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os.."
          name="Phoebe Belle"
          position="BikersCoffee Owner"
          stars={5}
        />
        <ReviewCard
          text="Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os.."
          name="Phoebe Belle"
          position="BikersCoffee Owner"
          stars={5}
        />
        <ReviewCard
          text="Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os.."
          name="Phoebe Belle"
          position="BikersCoffee Owner"
          stars={5}
        />
        <ReviewCard
          text="Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os.."
          name="Phoebe Belle"
          position="BikersCoffee Owner"
          stars={5}
        />
        <ReviewCard
          text="Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os.."
          name="Phoebe Belle"
          position="BikersCoffee Owner"
          stars={5}
        />
        <ReviewCard
          text="Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os.."
          name="Phoebe Belle"
          position="BikersCoffee Owner"
          stars={5}
        />
      </Swiper>
    </>
  );
};
