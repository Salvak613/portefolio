import React, { useState } from 'react';
import styles from './ChangeWP.module.css';




function ChangeWP() {

     const [isOpen, setIsOpen] = useState(false);
     const [isDefault, setIsDefault] = useState(true);

    
    
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        
        const changeBackground = (imageUrl : string) => {
            document.body.style.backgroundImage = `url(${imageUrl})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            setIsDefault(imageUrl === '')
        }


        


        return (
            <div className={styles.changeWP}>
               
               <div className="appBackground">
               {isDefault && <h1 className={styles.bgText}>Mon CV</h1>}
                </div>
               
                <img
                    className={styles.changeWPIcon}
                    onClick={toggleMenu}
                    src="/stock img/imgwindows.png"
                    alt="WallPaper Menu"
                />
                
                
                <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
                    <ul>
                    <li onClick={() => changeBackground('')}>Default</li>
                    <li onClick={() => changeBackground('https://i.postimg.cc/VLKDB9jB/wallpaper1.png')}>Wallpaper 1</li>
                    <li onClick={() => changeBackground('https://i.postimg.cc/7L29kpjm/wallpaper2.png')}>Wallpaper 2</li>
                    <li onClick={() => changeBackground('https://i.postimg.cc/XJ687sb3/wallpaper3.jpg')}>Wallpaper 3</li>
                    </ul>
                </div>
            </div>
        );
    }


    export default ChangeWP;