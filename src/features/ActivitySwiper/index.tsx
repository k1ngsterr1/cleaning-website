import { ActivityCard } from "@entities/ActivityCard";
import { activitiesContent } from "@shared/lib/content/activitiesContent";
import ThreeItemsSwiper from "@features/ThreeItemSwiper";

export const ActivitySwiper = () => {
  return (
    <ThreeItemsSwiper>
      {activitiesContent.map((card, index) => (
        <ActivityCard key={index} icon={card.icon} activity={card.activity} />
      ))}
    </ThreeItemsSwiper>
  );
};
