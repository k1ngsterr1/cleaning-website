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
      <a href="tel:+17088554746" className={styles.burger_menu__phone}>
        +1-708-855-47-46
      </a>
    </div>
  );
};
