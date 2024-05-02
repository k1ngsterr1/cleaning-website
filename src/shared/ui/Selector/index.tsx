import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

interface SelectorProps {
  placeholder: string;
  value: string;
  margin: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const Selector: React.FC<SelectorProps> = ({
  placeholder,
  value,
  margin,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className={`w-full flex flex-col items-center margin`}>
      <div className={styles.selector} onClick={toggleDropdown}>
        <span className={styles.selectorPlaceholder}>
          {value || placeholder}
        </span>
        <FontAwesomeIcon
          className={styles.selectorChevron}
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={styles.listItem}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Selector;
