import React, { useEffect } from "react";
import { cardsContent } from "@shared/lib/servicesCardsContent";
import { ServiceCard } from "@features/ServiceCard";

export const ServiceCardList = () => {
  return (
    <>
      {cardsContent.map((card, index) => {
        <ServiceCard
          key={index} // Add a unique key for each ServiceCard component
          icon={card.icon}
          heading={card.title}
          paragraph={card.description}
        />;
      })}
    </>
  );
};
