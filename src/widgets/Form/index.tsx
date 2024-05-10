import { useState } from "react";
import { options } from "@shared/lib/content/options";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/ReactButton";
import Selector from "@shared/ui/Selector";
import form_image from "@assets/images/form.webp";

import styles from "./styles.module.scss";

export const Form = () => {
  const [service, setService] = useState("");

  const handleServiceChange = (newValue: string) => {
    setService(newValue);
  };

  return (
    <>
      <div className={styles.form_container} id="form">
        <h5 className={`text-center text-dark_blue`}>
          Contact <span className="text-main_blue">Us</span>
        </h5>
        <p
          className={`paragraph mt-4 text-center w-[70%] m-auto ${styles.paragraph}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
        <form className="flex flex-col items-center">
          <Input
            placeholder="Your Name"
            type="text"
            required
            name="name"
            margin="mt-8"
          />
          <Input
            placeholder="Your Phone"
            type="phone"
            required
            name="phone"
            margin="mt-8"
          />
          <Selector
            placeholder="Choose Your Service"
            value={service}
            margin="mt-8"
            onChange={handleServiceChange}
            options={options}
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
        className={`${styles.form_container_pc} content !flex !items-start m-auto`}
      >
        <div className="flex flex-col items-start relative">
          <h5 className={`text-center text-dark_blue`}>
            Contact <span className="text-main_blue">Us</span>
          </h5>
          <p className={`paragraph mt-4 text-left !w-[40%]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
          <form className="flex flex-col items-start">
            <Input
              placeholder="Your Name"
              type="text"
              required
              name="name"
              margin="mt-8"
            />
            <Input
              placeholder="Your Phone"
              type="phone"
              required
              name="phone"
              margin="mt-8"
            />
            <Selector
              placeholder="Choose Your Service"
              value={service}
              margin="mt-8"
              onChange={handleServiceChange}
              options={options}
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
