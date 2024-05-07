import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useMenuAnimation = (
  isOpen: boolean
): {
  menuRef: React.RefObject<HTMLDivElement>;
} => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (menuRef.current) {
        const tl = gsap.timeline();

        if (isOpen) {
          console.log("Opening menu is working here", menuRef.current);

          tl.to(menuRef.current, {
            y: "2000%",
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          });
        } else {
          console.log("isOpen is false");

          tl.to(menuRef.current, {
            y: "-2000%",
            autoAlpha: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power3.in",
            clearProps: "all",
          });
        }
      }
    } catch (error: any | unknown) {
      console.log("There was an error with animation:", error);
    }
  }, [isOpen]);

  return { menuRef };
};
