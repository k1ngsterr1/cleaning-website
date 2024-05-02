import React from "react";

import styles from "./styles.module.scss";
import Input from "@shared/ui/Input";

export const Form = () => {
  return (
    <div className={styles.form_container}>
      <h5 className="text-center">
        Contact <span className="text-main_blue">Us</span>
      </h5>
      <p className="paragraph mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna{" "}
      </p>
      <Input placeholder="Your Name" type="text" name="name" />
      <Input placeholder="Your Phone" type="phone" name="phone" />
    </div>
  );
};
