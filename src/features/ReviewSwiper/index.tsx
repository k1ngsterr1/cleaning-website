import React from "react";
import { Swiper } from "@features/Swiper";

export const ReviewSwiper = () => {
  return (
    <Swiper slidesPerView={3}>
      <div style={{ backgroundColor: "red", height: "300px" }}>Slide 1</div>
      <div style={{ backgroundColor: "blue", height: "300px" }}>Slide 2</div>
      <div style={{ backgroundColor: "green", height: "300px" }}>Slide 3</div>
      <div style={{ backgroundColor: "yellow", height: "300px" }}>Slide 4</div>
      <div style={{ backgroundColor: "purple", height: "300px" }}>Slide 5</div>
      <div style={{ backgroundColor: "cyan", height: "300px" }}>Slide 6</div>
      <div style={{ backgroundColor: "cyan", height: "300px" }}>Slide 7</div>
    </Swiper>
  );
};
