import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import styles from "./styles.module.scss";

interface IAccordionTabProps {
  heading: string;
  paragraph: string;
}

export const AccordionTab: React.FC<IAccordionTabProps> = ({
  heading,
  paragraph,
}) => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className={styles.accordion}>
            {heading}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{paragraph}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
