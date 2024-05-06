import { cardsContent } from "@shared/lib/servicesCardsContent";
import { ServiceCard } from "@entities/ServiceCard";
import { useState } from "react";
import { Popup } from "@features/Popup";

export const ServiceCardList = () => {
  const [isPopup, setPopup] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setPopup(true);
    console.log("isPopup:", isPopup);
  };

  const handleClosePopup = () => {
    setPopup(false);
    console.log("isPopup:", isPopup);
  };

  return (
    <>
      {isPopup && <Popup onClick={handleClosePopup} />}
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
    </>
  );
};
