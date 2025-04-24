import React, { useState } from 'react';
import styles from './StartMenu.module.css';
import WindowsContainer from './WindowsContainer';

function StartMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleWindow = () => {
        setIsOpen2(!isOpen2);

    };

     return (
            <div className={styles.startMenu}>
                <div onClick={toggleMenu}
                className={styles.startButton}>
            
                <img
                    className={styles.startMenuIcon}
                    src="/stock img/icons8-windows-95-96.png"
                    alt="Start Menu"
                /><p>Start</p>
                </div>
                
                <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
                    <ul>
                        <li>Home</li>
                        <li onClick={toggleWindow}><img src="/stock img/Projects.png" />Projects</li>
                        <li><img src="/stock img/Last jobs.png" />Last jobs</li>
                        <li><img src="/stock img/Contact.png" />Contact</li>
                        <li><img src="/stock img/imgwindows.png" />Pictures</li>
                        <li><img src="/stock img/passion.png" />Passions</li>
                    </ul>
                </div>
                <div className={`${styles.window1} ${isOpen2 ? styles.active : ''}`}>
                <WindowsContainer />
                </div>
            </div>
    );
}

export default StartMenu;