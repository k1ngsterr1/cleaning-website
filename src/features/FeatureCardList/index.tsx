import { ServiceCard } from "@entities/ServiceCard";
import { featuresContent } from "@shared/lib/content/featureContent";
import { useState } from "react";

import styles from "./styles.module.scss";
import { Popup } from "@features/Popup";

export const FeatureCardList = () => {
  const [isPopup, setPopup] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

  return (
    <>
      {isPopup && <Popup onClick={handleClosePopup} />}
      <div className={styles.featureCardListMob}>
        {featuresContent.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            onClick={handleOpenPopup}
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
            onClick={handleOpenPopup}
            heading={card.heading}
            paragraph={card.description}
          />
        ))}
      </div>
    </>
  );
};
