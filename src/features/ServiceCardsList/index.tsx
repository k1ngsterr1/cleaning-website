import { cardsContent } from "@shared/lib/content/servicesCardsContent";
import { ServiceCard } from "@entities/ServiceCard";
import { useState } from "react";
import { Popup } from "@features/Popup";

import styles from "./styles.module.scss";

export const ServiceCardList = () => {
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
      <div className={styles.serviceCardMob}>
        {cardsContent.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            heading={card.title}
            price={card.price}
            paragraph={card.description}
            onClick={handleOpenPopup}
          />
        ))}
      </div>
      <div className={styles.serviceCardList}>
        {cardsContent.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            heading={card.title}
            price={card.price}
            paragraph={card.description}
            onClick={handleOpenPopup}
          />
        ))}
      </div>
    </>
  );
};
