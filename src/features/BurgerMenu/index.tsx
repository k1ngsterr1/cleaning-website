import React from "react";
import { navLinks } from "@shared/lib/links";

import styles from "./styles.module.scss";

export const BurgerMenu = () => {
  return (
    <div className={styles.burger_menu}>
      {navLinks.map((link) => (
        <a href={link.href} className={styles.burger_menu__link}>
          {link.label}
        </a>
      ))}
    </div>
  );
};
