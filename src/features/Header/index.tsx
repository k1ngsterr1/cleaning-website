import { BurgerMenu } from "@features/BurgerMenu";
import { useState } from "react";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { useBurgerButtonAnimation } from "@shared/lib/hooks/useBurgerButtonAnimation";
import { Logo } from "@entities/Logo";
import { BurgerButton } from "@shared/ui/BurgerButton";

import styles from "./styles.module.scss";
import { navLinks } from "@shared/lib/content/links";
import ReactButton from "@shared/ui/ReactButton";
import { ReactLink } from "@shared/ui/ReactLink";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { menuRef } = useMenuAnimation(isOpen);
  const { firstLine, secondLine, thirdLine } = useBurgerButtonAnimation(isOpen);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
      <header className={styles.header_pc}>
        <Logo />
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a href={link.href} className={styles.header_pc__link}>
              {link.label}
            </a>
          ))}
          <a href="telto:7207099413" className={styles.header_pc__number}>
            (720) 709-9413
          </a>
        </nav>
      </header>
    </>
  );
};
