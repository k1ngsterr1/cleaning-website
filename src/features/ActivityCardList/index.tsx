import { ActivityCard } from "@entities/ActivityCard";
import { activitiesContent } from "@shared/lib/activitiesContent";

export const ActivityCardList = () => {
  return (
    <>
      {activitiesContent.map((card, index) => (
        <ActivityCard key={index} icon={card.icon} activity={card.activity} />
      ))}
    </>
  );
};
