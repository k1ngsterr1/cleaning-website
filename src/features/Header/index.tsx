import { BurgerMenu } from "@features/BurgerMenu";
import { useState } from "react";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { Logo } from "@entities/Logo";
import { BurgerButton } from "@shared/ui/BurgerButton";

import styles from "./styles.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { menuRef } = useMenuAnimation(isOpen);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header_mob}>
      <Logo />
      <BurgerMenu menuRef={menuRef} isOpen={isOpen} />
      <BurgerButton isOpen={isOpen} onClick={handleOpenMenu} />
    </header>
  );
};
