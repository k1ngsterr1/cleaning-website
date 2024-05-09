import { ActivityCard } from "@entities/ActivityCard";
import { activitiesContent } from "@shared/lib/content/activitiesContent";

import styles from "./styles.module.scss";

export const ActivityCardList = () => {
  return (
    <>
      <div className={styles.activitiesCardListMob}>
        {activitiesContent.map((card, index) => (
          <ActivityCard key={index} icon={card.icon} activity={card.activity} />
        ))}
      </div>
      <div className={styles.activitiesCardList}>
        {activitiesContent.map((card, index) => (
          <ActivityCard key={index} icon={card.icon} activity={card.activity} />
        ))}
      </div>
    </>
  );
};
