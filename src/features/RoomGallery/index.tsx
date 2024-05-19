import React from "react";
import { Image } from "astro:assets";
import { ThreeItemSwiper } from "@features/ThreeItemSwiper";
import { roomsContent } from "@shared/lib/content/roomsContent";

import styles from "./styles.module.scss";

export const RoomGallery = () => {
  return (
    <>
      <div className={styles.room_gallery}>
        <h6>Our Works</h6>
        <p className="paragraph mt-4 mb-8 !text-center m-auto !w-[50%]">
          At Zaka Cleaning Company, we pride ourselves on delivering exceptional
          cleaning services tailored to meet the unique needs of our clients.
          From bustling corporate offices and cozy residential homes to large
          commercial spaces and intricate event venues, our portfolio showcases
          a wide range of environments, each transformed by our expert touch.{" "}
        </p>
        <ThreeItemSwiper slidesPerView={3}>
          {roomsContent.map((room, index) => (
            <img
              key={index}
              className={styles.room_gallery__image}
              src={room.image.src}
              alt="Room Photo"
            />
          ))}
        </ThreeItemSwiper>
      </div>{" "}
      <div className={styles.room_gallery_mob}>
        <h6>Our Works</h6>
        <p className="paragraph mt-4 mb-8 !text-center m-auto !w-[70%]">
          At Zaka Cleaning Company, we pride ourselves on delivering exceptional
          cleaning services tailored to meet the unique needs of our clients.
          From bustling corporate offices and cozy residential homes to large
          commercial spaces and intricate event venues, our portfolio showcases
          a wide range of environments, each transformed by our expert touch.{" "}
        </p>
        <ThreeItemSwiper slidesPerView={1}>
          {roomsContent.map((room, index) => (
            <img
              key={index}
              className={styles.room_gallery__image}
              src={room.image.src}
              alt="Room Photo"
            />
          ))}
        </ThreeItemSwiper>
      </div>
    </>
  );
};
