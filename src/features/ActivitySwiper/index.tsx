import { Swiper } from "@features/Swiper";
import { ActivityCard } from "@entities/ActivityCard";
import { activitiesContent } from "@shared/lib/content/activitiesContent";

export const ActivitySwiper = () => {
  return (
    <>
      <Swiper slidesPerView={1}>
        {activitiesContent.map((card, index) => (
          <ActivityCard key={index} icon={card.icon} activity={card.activity} />
        ))}
      </Swiper>
    </>
  );
};
