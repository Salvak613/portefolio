import Time from "./Time.tsx";
import Styles from "./NavBar.module.css";
import StartMenu from "./StartMenu";
import ChangeWP from "./ChangeWP";
import WindowsContainer from "./WindowsContainer.tsx";

function NavBar() {
  return (
    <>
      <nav className={Styles.navBar}>
        <StartMenu />
        <ChangeWP />
        <Time />
      </nav>
    </>
  );
}

export default NavBar;
