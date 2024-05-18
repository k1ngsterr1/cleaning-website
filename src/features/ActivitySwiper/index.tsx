import { ActivityCard } from "@entities/ActivityCard";
import { ThreeItemSwiper } from "@features/ThreeItemSwiper";
import { activitiesContent } from "@shared/lib/content/activitiesContent";

export const ActivitySwiper = () => {
  return (
    <ThreeItemSwiper>
      {activitiesContent.map((card, index) => (
        <ActivityCard key={index} icon={card.icon} activity={card.activity} />
      ))}
    </ThreeItemSwiper>
  );
};
