import { useState } from "react";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { SuccessPopup } from "@features/SuccessPopup";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/ReactButton";
import form_image from "@assets/images/form.webp";

import styles from "./styles.module.scss";

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comment, setCommnet] = useState<string>("");
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const { onSubmit } = useSendEmail(setPopupOpen);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.form_container} !flex !flex-col items-center`}
        id="form"
      >
        {isPopupOpen && <SuccessPopup onClick={handleClosePopup} />}
        <h5 className={`text-center text-dark_blue`}>
          Contact <span className="text-main_blue">Us</span>
        </h5>
        <p
          className={`paragraph mt-4 text-center w-[70%] m-auto ${styles.paragraph}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
        <form
          className="flex flex-col items-center"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(event);
          }}
        >
          <Input
            placeholder="Your Name"
            type="text"
            value={name}
            required
            name="name"
            margin="mt-8"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Your Phone"
            type="phone"
            value={phone}
            required
            name="phone"
            margin="mt-8"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="Write a comment"
            value={comment}
            margin="mt-8"
            required
            type="text"
            name="comment"
            onChange={(e) => setCommnet(e.target.value)}
          />
          <Button text="Send" buttonType="filled" margin="mt-8" type="submit" />
        </form>
        <span className="flex flex-col items-center justify-center">
          <a href="mailto:ruslanmakhmatov@gmail.com" className={styles.link}>
            ruslanmakhmatov@gmail.com
          </a>
          <a href="tel:7207099413" className={styles.link}>
            (720) 709-9413
          </a>
        </span>
        <img src={form_image.src} className={styles.image} alt="Form Images" />
      </div>
      <div
        className={`${styles.form_container_pc} content !flex !items-start !justify-center m-auto`}
        id="form-pc"
      >
        {isPopupOpen && <SuccessPopup onClick={handleClosePopup} />}
        <div className="flex flex-col items-start relative">
          <h5 className={`text-center text-dark_blue`}>
            Contact <span className="text-main_blue">Us</span>
          </h5>
          <p className={`paragraph mt-4 text-left !w-[40%]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
          <form
            className="flex flex-col items-start"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit(event);
            }}
          >
            <Input
              placeholder="Your Name"
              type="text"
              value={name}
              required
              name="name"
              margin="mt-8"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Your Phone"
              type="phone"
              value={phone}
              required
              name="phone"
              margin="mt-8"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Write a comment"
              value={comment}
              margin="mt-8"
              required
              type="text"
              name="comment"
              onChange={(e) => setCommnet(e.target.value)}
            />
            <Button
              text="Send"
              buttonType="filled"
              margin="mt-8"
              type="submit"
            />
          </form>
        </div>
        <img src={form_image.src} className={styles.image} alt="Form Images" />
      </div>
    </>
  );
};
