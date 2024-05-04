import { cardsContent } from "@shared/lib/servicesCardsContent";
import { ServiceCard } from "@entities/ServiceCard";

export const ServiceCardList = () => {
  return (
    <>
      {cardsContent.map((card, index) => (
        <ServiceCard
          key={index}
          icon={card.icon}
          heading={card.title}
          paragraph={card.description}
        />
      ))}
    </>
  );
};
