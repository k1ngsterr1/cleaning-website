import { useState } from "react";
import { options } from "@shared/lib/content/options";
import Input from "@shared/ui/Input";
import Selector from "@shared/ui/Selector";
import Button from "@shared/ui/ReactButton";

import styles from "./styles.module.scss";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";

interface IPopupProps {
  onClick: () => void;
}

export const Popup: React.FC<IPopupProps> = ({ onClick }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comment, setCommnet] = useState<string>("");
  const { onSubmit } = useSendEmail(false as any);

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.layout} onClick={onClick}>
      <div className={styles.popup} onClick={handleContentClick}>
        <span className={styles.popup__heading}>Contact Us</span>
        <form
          className={styles.popup__form}
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(event);
          }}
        >
          <Input
            placeholder="Your Name"
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="mt-8 m-auto"
          />
          <Input
            placeholder="Your Phone"
            type="phone"
            required
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            margin="mt-8 m-auto"
          />
          <Input
            placeholder="Comment"
            type="comment"
            required
            name="comment"
            onChange={(e) => setCommnet(e.target.value)}
            margin="mt-8 m-auto"
          />
          <Button text="Send" buttonType="filled" margin="mt-8" type="submit" />
        </form>
      </div>
    </div>
  );
};
