import { useState } from "react";
import emailjs from "@emailjs/browser";

interface IFormData {
  name: string;
  phone: string;
  comment: string;
}

export function useSendEmail(setPopupOpen: (isOpen: boolean) => void) {
  const onSubmit = async (event?: React.BaseSyntheticEvent) => {
    console.log("on submit is working");
    if (event) {
      event.preventDefault();

      emailjs
        .sendForm(
          "service_xu4cmja",
          "template_j1mfdsg",
          event.target,
          "q5MhO8Ih-Q2obDhcX"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            setPopupOpen(true);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setPopupOpen(false);
          }
        );
    }
  };

  return { onSubmit };
}
