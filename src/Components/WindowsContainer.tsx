import React, { useEffect, useRef, useState } from 'react';
import styles from './WindowsContainer.module.css';

interface DraggableWindowProps {
  id: string;
  children: React.ReactNode;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ id, children }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [highestZIndex, setHighestZIndex] = useState(1);

  useEffect(() => {
    const element = windowRef.current;
    if (!element) return;

    let currentPosX = 0,
      currentPosY = 0,
      previousPosX = 0,
      previousPosY = 0;

    const dragMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      previousPosX = e.clientX;
      previousPosY = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e: MouseEvent) => {
      e.preventDefault();
      currentPosX = previousPosX - e.clientX;
      currentPosY = previousPosY - e.clientY;
      previousPosX = e.clientX;
      previousPosY = e.clientY;
      if (element) {
        element.style.top = `${element.offsetTop - currentPosY}px`;
        element.style.left = `${element.offsetLeft - currentPosX}px`;
      }
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    const bringToFront = () => {
      setHighestZIndex((prev) => prev + 1);
      if (element) {
        element.style.zIndex = `${highestZIndex}`;
      }
    };

    const topBar = element.querySelector('.window-top') as HTMLElement;
    if (topBar) {
      topBar.onmousedown = dragMouseDown;
    } else {
      element.onmousedown = dragMouseDown;
    }

    element.addEventListener('mousedown', bringToFront);

    return () => {
      if (topBar) {
        topBar.onmousedown = null;
      } else {
        element.onmousedown = null;
      }
      element.removeEventListener('mousedown', bringToFront);
    };
  }, [highestZIndex]);

  return (
    <div ref={windowRef} id={id} className="window" style={{ position: 'absolute' }}>
      {children}
    </div>
  );
};

interface WindowsContainerProps {
  toggleWindow: () => void;
}

const WindowsContainer: React.FC<WindowsContainerProps> = ({ toggleWindow }) => {


  return (
    <div>
      <DraggableWindow id={styles.window}>
        <div className={styles['window-top']}>Window 1
        <button className={styles.titleButton} onClick={toggleWindow}>
         X
        </button></div>
        <div className="window-content">lksdnlsnfldsnflsdnfnsdf</div>
        
      
      </DraggableWindow>
     
    </div>
  );
};

export default WindowsContainer;
