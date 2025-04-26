import React from "react";
import styles from "./WindowsContainer.module.css";
import DraggableWindow from "./DraggableWindow";

const WindowsContainer: React.FC<{
  isOpen: boolean;
  toggleWindow: () => void;
}> = ({ isOpen, toggleWindow }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <DraggableWindow id={styles.window}>
        <div className={styles["window-top"]}>
          Portfolio
          <button className={styles.titleButton} onClick={toggleWindow}>
            X
          </button>
        </div>
        <div className={styles.windowContent}>
          <h3>Projet 1 - PokeClicker</h3>
          <p>
            <a
              href="https://salvak613.github.io/lille-js-pokeclicker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://salvak613.github.io/lille-js-pokeclicker/
            </a>
            <br />
            Context : 1er mois de formation, 2 semaines pour créer un site en JS
            vanilla parmis 6 thèmes proposés. Thème choisit : Clicker.
          </p>
          <img
            src="/stock img/pokeclicker.png"
            alt="PokeClicker"
            className={styles.exemple}
          />

          <h3>Projet 2 - FBI Control Panel</h3>
          <p>
            <a
              href="https://fbicontrolpannel.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fbicontrolpannel.netlify.app/
            </a>
            <br />
            Context : 2ème mois de formation, 7 heures pour créer un site.
            Apprendre les fetchs et React. Attention, le fetch ne fonctionne pas
            sous l'opérateur orange.
          </p>
          <img
            src="/stock img/fbi.png"
            alt="PokeClicker"
            className={styles.exemple}
          />
          <br />
          <p></p>
        </div>
      </DraggableWindow>
    </div>
  );
};

export default WindowsContainer;
