import { ActivityCard } from "@entities/ActivityCard";
import { ThreeItemSwiper } from "@features/ThreeItemSwiper";
import { activitiesContent } from "@shared/lib/content/activitiesContent";

export const ActivitySwiper = () => {
  return (
    <ThreeItemSwiper slidesPerView={4}>
      {activitiesContent.map((card, index) => (
        <ActivityCard key={index} icon={card.icon} activity={card.activity} />
      ))}
    </ThreeItemSwiper>
  );
};
