import React from "react";
import { Logo } from "@entities/Logo";
import { navLinks } from "@shared/lib/content/links";
import { ReactLink } from "@shared/ui/ReactLink";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
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
        <ReactLink
          text="Go Up"
          buttonType="filled"
          margin="mt-8 mb-8"
          to="main"
        />
      </footer>
      <footer className={styles.footer_pc}>
        {" "}
        <Logo color="!text-dark_blue" margin="mt-0" />
        <nav className={styles.footer_pc__nav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.footer_pc__nav__link}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-4">
          <ReactLink
            text="Go Up"
            buttonType="filled"
            margin="mt-8 mb-8"
            to="main-pc"
          />
        </div>
      </footer>
    </>
  );
};
