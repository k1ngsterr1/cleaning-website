import { ActivityCard } from "@entities/ActivityCard";
import { activitiesContent } from "@shared/lib/content/activitiesContent";

export const ActivityCardList = () => {
  return (
    <>
      {activitiesContent.map((card, index) => (
        <ActivityCard key={index} icon={card.icon} activity={card.activity} />
      ))}
    </>
  );
};
