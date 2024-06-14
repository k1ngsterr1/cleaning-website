import { useState } from "react";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { SuccessPopup } from "@features/SuccessPopup";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/ReactButton";
import form_image from "@assets/images/form.webp";

import styles from "./styles.module.scss";

export const FormSecond = () => {
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
        id="form-mob"
      >
        {isPopupOpen && <SuccessPopup onClick={handleClosePopup} />}
        <h5 className={`text-center text-dark_blue`}>
          Contact <span className="text-main_blue">Us</span>
        </h5>
        <p
          className={`paragraph mt-4 text-center w-[90%] m-auto ${styles.paragraph}`}
        >
          Get in touch with Zaka for all your cleaning needs.
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
          <a href="mailto:cleaningzaka@gmail.com" className={styles.link}>
            cleaningzaka@gmail.com{" "}
          </a>
          <a href="tel:+17088554746" className={styles.link}>
            +1-708-855-47-46
          </a>
          <a
            href="https://maps.app.goo.gl/jMpRWSg2zSud1mbs9?g_st=ic"
            target="_blank"
            className={`${styles.link} transition-all !mt-8 hover:text-dark_blue`}
          >
            6437 N Hamilton Ave
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
          <p className={`paragraph mt-4 text-left !w-[60%]`}>
            Get in touch with Zaka for all your cleaning needs.
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
            <a
              href="mailto:cleaningzaka@gmail.com"
              className={`${styles.link} transition-all  hover:text-dark_blue`}
            >
              cleaningzaka@gmail.com{" "}
            </a>
            <a
              href="tel:+17088554746"
              className={`${styles.link} transition-all !mt-2 hover:text-dark_blue`}
            >
              +1-708-855-47-46
            </a>
            <a
              href="https://maps.app.goo.gl/jMpRWSg2zSud1mbs9?g_st=ic"
              target="_blank"
              className={`${styles.link} transition-all !mt-2 hover:text-dark_blue`}
            >
              6437 N Hamilton Ave
            </a>
          </form>
        </div>
        <img src={form_image.src} className={styles.image} alt="Form Images" />
      </div>
    </>
  );
};
