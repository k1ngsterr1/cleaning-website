import { BurgerMenu } from "@features/BurgerMenu";
import styles from "./styles.module.scss";

import { Logo } from "@entities/Logo";
import { BurgerButton } from "@shared/ui/BurgerButton";

export const Header = () => {
  return (
    <header className={styles.header_mob}>
      <Logo />
      <BurgerButton isOpen />
    </header>
  );
};
