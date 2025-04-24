import React from "react";
import styles from "./Contact.module.css";
import DraggableWindow from "./DraggableWindow";

interface ContactProps {
  isOpen: boolean;
  toggleWindow: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, toggleWindow }) => {
  if (!isOpen) return null;

  return (
    <div>
      <DraggableWindow id={styles.window}>
        <div className={styles["window-top"]}>
          Contact
          <button className={styles.titleButton} onClick={toggleWindow}>
            X
          </button>
        </div>
        <div className={styles.windowContent}>
          <h3>Contact Information</h3>
          <ul>
            <li>Prénom : Jules</li>
            <li>Nom : Clauwaert</li>
            <li>Adresse : Lille</li>
            <li>Mail : jules.clauwaert@gmail.com</li>
            <li>Age : 31ans</li>
            <li>
              <a href="https://linkedin.com/in/jules-clauwaert">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/Salvak613">Github</a>
            </li>
          </ul>
        </div>
      </DraggableWindow>
    </div>
  );
};

export default Contact;
