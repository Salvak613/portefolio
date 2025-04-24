import React from "react";
import styles from "./Passions.module.css";
import DraggableWindow from "./DraggableWindow";

interface PassionsProps {
  isOpen: boolean;
  toggleWindow: () => void;
}

const Passions: React.FC<PassionsProps> = ({ isOpen, toggleWindow }) => {
  if (!isOpen) return null;

  return (
    <div>
      <DraggableWindow id={styles.window}>
        <div className={styles["window-top"]}>
          Passions
          <button className={styles.titleButton} onClick={toggleWindow}>
            X
          </button>
        </div>
        <div className={styles.windowContent}>
          <h3>Passions</h3>
          <ul>
            <li>
              <a href="">Ma musique</a>
            </li>
            <li>Les voyages : Japon, USA, Brésil...</li>
            <li>Le gaming</li>
          </ul>
        </div>
      </DraggableWindow>
    </div>
  );
};

export default Passions;
