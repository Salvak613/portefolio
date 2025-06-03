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
          <h3>Projet 3 - EfDouze</h3>
          <a
            href="https://efdouze.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://efdouze.netlify.app/
          </a>
          <p>
            Context : 2 jours pour faire un petit jeu en react en rapport plus
            ou moins avec le dev.
            <br />
            Nous avons donc un jeu d'énigme dont le but est tout simplement de
            trouver le mot de passe, très peu d'indice le but étant de bucher
            ensemble sur chacune d'entre elles, le début est facile parfois
            tordu. Plus vous avancez plus il faudra penser outside the box et
            fouiller un peu.
          </p>
          <img
            src="/stock img/efdouze.PNG"
            alt="PokeClicker"
            className={styles.exemple}
          />

          <h3>Projet 4 - Le Chineur</h3>
          <p>
            Context : 1 mois pour créer un site fonctionnel basé sur le front
            avec une ou plusieurs uttilisation d'un fetch. <br />
            Pour ce projet nous étions 4 et nous sommes partis sur un site qui
            se sert de l'API spotify, le principe est simple : Détourner
            l'algorythme de recherche de Spotify qui se base sur des critères
            cachés de popularitée pour axer la recherche sur les petits
            artistes.
            <br />
            Il est possible de se connecter à son compte spotify, de faire une
            recherche basée sur des tags que l'on placera dans la bulle d'idée
            centrale et d'un filtre de popularité. Une deuxième page nous
            affiche un player SDK spotify, avec toutes les infos et la
            navigation necessaire pour écouter une playlist automatique, ajouter
            des morceaux à ses favoris etc. (cf vidéo ci-dessous)
          </p>
          <video controls width="250">
            <source src="/stock img/chineur.mp4" type="video/webm" />
          </video>

          <p></p>
        </div>
      </DraggableWindow>
    </div>
  );
};

export default WindowsContainer;
