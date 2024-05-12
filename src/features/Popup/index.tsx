import { useState } from "react";
import { options } from "@shared/lib/content/options";
import Input from "@shared/ui/Input";
import Selector from "@shared/ui/Selector";
import Button from "@shared/ui/ReactButton";

import styles from "./styles.module.scss";

interface IPopupProps {
  onClick: () => void;
}

export const Popup: React.FC<IPopupProps> = ({ onClick }) => {
  const [service, setService] = useState("");

  const handleServiceChange = (newValue: string) => {
    console.log("Selected Service: ", newValue);
    setService(newValue);
  };

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.layout} onClick={onClick}>
      <div className={styles.popup} onClick={handleContentClick}>
        <span className={styles.popup__heading}>Contact Us</span>
        <form className={styles.popup__form}>
          <Input
            placeholder="Your Name"
            type="text"
            required
            name="name"
            margin="mt-8 m-auto"
          />
          <Input
            placeholder="Your Phone"
            type="phone"
            required
            name="phone"
            margin="mt-8 m-auto"
          />
          <Input
            placeholder="Comment"
            type="comment"
            required
            name="comment"
            margin="mt-8 m-auto"
          />
          <Button text="Send" buttonType="filled" margin="mt-8" type="submit" />
        </form>
      </div>
    </div>
  );
};
