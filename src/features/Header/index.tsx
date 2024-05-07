import { BurgerMenu } from "@features/BurgerMenu";
import { useState } from "react";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { useBurgerButtonAnimation } from "@shared/lib/hooks/useBurgerButtonAnimation";
import { Logo } from "@entities/Logo";
import { BurgerButton } from "@shared/ui/BurgerButton";

import styles from "./styles.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { menuRef } = useMenuAnimation(isOpen);
  const { firstLine, secondLine, thirdLine } = useBurgerButtonAnimation(isOpen);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header_mob}>
      <Logo />
      <BurgerMenu menuRef={menuRef} isOpen={isOpen} />
      <BurgerButton
        isOpen={isOpen}
        onClick={handleOpenMenu}
        firstLine={firstLine}
        secondLine={secondLine}
        thirdLine={thirdLine}
      />
    </header>
  );
};
