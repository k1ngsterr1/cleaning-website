import { Swiper } from "@features/Swiper";
import { ReviewCard } from "@entities/ReviewCard";
import { ThreeItemSwiper } from "@features/ThreeItemSwiper";

export const ReviewSwiper = () => {
  return (
    <>
      <div className="max-[1200px]:hidden pb-32 mt-12">
        <ThreeItemSwiper slidesPerView={3}>
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
            text="Zaka's cleaning service is outstanding! 😊 Impeccable work, friendly staff."
            name="Ava Martinez:"
            position="Client"
            stars={5}
          />
        </ThreeItemSwiper>
      </div>
      <div className="lg:flex min-[1200px]:hidden">
        <ThreeItemSwiper slidesPerView={1}>
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
            text="Zaka's cleaning service is outstanding! 😊 Impeccable work, friendly staff."
            name="Ava Martinez:"
            position="Client"
            stars={5}
          />
        </ThreeItemSwiper>
      </div>
    </>
  );
};
