import { navLinks } from "@shared/lib/content/links";

import styles from "./styles.module.scss";

interface IBurgerMenuProps {
  isOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isOpen, menuRef }) => {
  return (
    <div className={styles.burger_menu} ref={menuRef}>
      {navLinks.map((link) => (
        <a href={link.href} className={styles.burger_menu__link}>
          {link.label}
        </a>
      ))}
      <a href="telto:7207099413" className={styles.burger_menu__phone}>
        (720) 709-9413
      </a>
    </div>
  );
};
