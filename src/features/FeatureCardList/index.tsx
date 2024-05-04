import { ServiceCard } from "@entities/ServiceCard";
import { featuresContent } from "@shared/lib/featureContent";

export const FeatureCardList = () => {
  return (
    <>
      {featuresContent.map((card, index) => (
        <ServiceCard
          key={index}
          icon={card.icon}
          heading={card.heading}
          paragraph={card.description}
        />
      ))}
    </>
  );
};
