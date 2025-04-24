import React from "react";
import styles from "./Pictures.module.css";
import DraggableWindow from "./DraggableWindow";

interface PicturesProps {
  isOpen: boolean;
  toggleWindow: () => void;
}

const Pictures: React.FC<PicturesProps> = ({ isOpen, toggleWindow }) => {
  if (!isOpen) return null;

  return (
    <div>
      <DraggableWindow id={styles.window}>
        <div className={styles["window-top"]}>
          Pictures
          <button className={styles.titleButton} onClick={toggleWindow}>
            X
          </button>
        </div>
        <div className={styles.windowContent}>
          <h3>Gallery</h3>
          <img
            src="/stock img/picture2.jpg"
            alt="Image 1"
            className={styles.image}
          />
          <img
            src="/stock img/picture1.PNG"
            alt="Image 2"
            className={styles.image}
          />
        </div>
      </DraggableWindow>
    </div>
  );
};

export default Pictures;
