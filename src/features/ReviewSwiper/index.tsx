import { Swiper } from "@features/Swiper";
import { ReviewCard } from "@entities/ReviewCard";

export const ReviewSwiper = () => {
  return (
    <>
      <Swiper slidesPerView={1}>
        <ReviewCard
          text="Professionalism at its best. Zaka exceeded my expectations."
          name="David Smith"
          position="Client"
          stars={5}
        />
        <ReviewCard
          text="Zaka made my house feel brand new again. Fantastic job!"
          name="Emma Wilson"
          position="Client"
          stars={5}
        />
        <ReviewCard
          text="Zaka's cleaning expertise is unparalleled. Will definitely hire again!"
          name="Jacob Rodriguez"
          position="Client"
          stars={5}
        />
        <ReviewCard
          text="Zaka's cleaning service is outstanding! 😊 Impeccable work, friendly staff, and my home shines like never before! Highly recommended! 👍"
          name="Ava Martinez:"
          position="Client"
          stars={5}
        />
      </Swiper>
    </>
  );
};
