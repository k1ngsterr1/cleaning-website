import { ServiceCard } from "@entities/ServiceCard";
import { featuresContent } from "@shared/lib/content/featureContent";

import styles from "./styles.module.scss";

export const FeatureCardList = () => {
  return (
    <>
      <div className={styles.featureCardListMob}>
        {featuresContent.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            paragraph={card.description}
          />
        ))}
      </div>
      <div className={styles.featureCardList}>
        {featuresContent.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            paragraph={card.description}
          />
        ))}
      </div>
    </>
  );
};
