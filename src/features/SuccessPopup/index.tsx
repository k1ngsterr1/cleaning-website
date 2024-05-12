import Button from "@shared/ui/ReactButton";

import styles from "../Popup/styles.module.scss";

interface IPopupProps {
  onClick: () => void;
}

export const SuccessPopup: React.FC<IPopupProps> = ({ onClick }) => {
  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.layout} onClick={onClick}>
      <div className={styles.popup} onClick={handleContentClick}>
        <span className={styles.popup__heading}>Thank you!</span>
        <span className={styles.popup__text}>
          Your message has been successfully sent. We appreciate you contacting
          us and will get back to you as soon as possible. If you have any more
          questions, feel free to continue browsing our site or reach out
          directly through our contact information provided below.
        </span>
        <Button
          text="Close"
          buttonType="filled"
          margin="mt-8"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
