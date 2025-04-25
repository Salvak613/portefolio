import { useEffect, useState } from "react";
import Time from "./Time.tsx";
import Styles from "./NavBar.module.css";
import StartMenu from "./StartMenu";
import ChangeWP from "./ChangeWP";

function NavBar() {
  const [isMobileWarningVisible, setIsMobileWarningVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWarningVisible(window.innerWidth < 950);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileWarning = () => {
    setIsMobileWarningVisible(false);
  };

  return (
    <>
      {isMobileWarningVisible && (
        <div className={Styles.mobileWarning}>
          <div className={Styles["window-top"]}>WARNING</div>
          <p>
            Pour une experience plus immersive, il est préférable de visiter ce
            site sur un desktop.
          </p>
          <button onClick={closeMobileWarning} className={Styles.okButton}>
            OK
          </button>
        </div>
      )}
      <nav className={Styles.navBar}>
        <StartMenu />
        <ChangeWP />
        <Time />
      </nav>
    </>
  );
}

export default NavBar;
