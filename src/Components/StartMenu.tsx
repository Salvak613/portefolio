import { useState } from "react";
import styles from "./StartMenu.module.css";
import WindowsContainer from "./WindowsContainer";
import CurriculumVitae from "./CurriculumVitae";
import Contact from "./Contact";
import Pictures from "./Pictures";
import Passions from "./Passions";

function StartMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isCurriculumVitaeOpen, setIsCurriculumVitaeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPicturesOpen, setIsPicturesOpen] = useState(false);
  const [isPassionsOpen, setIsPassionsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePortfolioWindow = () => {
    setIsPortfolioOpen((prevState) => !prevState);
  };

  const toggleCurriculumVitaeWindow = () => {
    setIsCurriculumVitaeOpen((prevState) => !prevState);
  };

  const toggleContactWindow = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  const togglePicturesWindow = () => {
    setIsPicturesOpen((prevState) => !prevState);
  };

  const togglePassionsWindow = () => {
    setIsPassionsOpen((prevState) => !prevState);
  };

  const openAllWindows = () => {
    setIsPortfolioOpen(true);
    setIsCurriculumVitaeOpen(true);
    setIsContactOpen(true);
    setIsPicturesOpen(true);
    setIsPassionsOpen(true);
  };

  return (
    <>
      <img
        src="/stock img/exe.png"
        className={styles.img1}
        onClick={openAllWindows}
      />
      <p className={styles.text}>
        Jules
        <br />
        Clauwaert.exe
      </p>
      <div className={styles.startMenu}>
        <div onClick={toggleMenu} className={styles.startButton}>
          <img
            className={styles.startMenuIcon}
            src="/stock img/icons8-windows-95-96.png"
            alt="Start Menu"
          />
          <p>Start</p>
        </div>

        <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li onClick={togglePortfolioWindow}>
              <img src="/stock img/Projects.png" />
              Portefolio
            </li>
            <li onClick={toggleCurriculumVitaeWindow}>
              <img src="/stock img/Last jobs.png" />
              Curriculum
            </li>
            <li onClick={toggleContactWindow}>
              <img src="/stock img/Contact.png" />
              Contact
            </li>
            <li onClick={togglePicturesWindow}>
              <img src="/stock img/imgwindows.png" />
              Picture
            </li>
            <li onClick={togglePassionsWindow}>
              <img src="/stock img/passion.png" />
              Passions
            </li>
          </ul>
        </div>
        {isPortfolioOpen && (
          <WindowsContainer
            isOpen={isPortfolioOpen}
            toggleWindow={togglePortfolioWindow}
          />
        )}
        {isCurriculumVitaeOpen && (
          <CurriculumVitae
            isOpen={isCurriculumVitaeOpen}
            toggleWindow={toggleCurriculumVitaeWindow}
          />
        )}
        {isContactOpen && (
          <Contact isOpen={isContactOpen} toggleWindow={toggleContactWindow} />
        )}
        {isPicturesOpen && (
          <Pictures
            isOpen={isPicturesOpen}
            toggleWindow={togglePicturesWindow}
          />
        )}
        {isPassionsOpen && (
          <Passions
            isOpen={isPassionsOpen}
            toggleWindow={togglePassionsWindow}
          />
        )}
      </div>
    </>
  );
}

export default StartMenu;
