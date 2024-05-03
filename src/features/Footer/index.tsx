import React from "react";
import { Logo } from "@entities/Logo";
import { navLinks } from "@shared/lib/links";

import styles from "./styles.module.scss";
import Button from "@shared/ui/ReactButton";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo color="!text-dark_blue" margin="mt-8" />
      <nav className={styles.footer__nav}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.footer__nav__link}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className={styles.footer__link} href="tel:7207099413">
        (720) 709-9413
      </a>
      <Button text="Go Up" buttonType="filled" margin="mt-8 mb-8" />
    </footer>
  );
};