import React, { createContext, useContext, useRef } from "react";

interface DraggableContextProps {
  registerDraggable: (id: string, element: HTMLDivElement) => void;
  bringToFront: (id: string) => void;
}

const DraggableContext = createContext<DraggableContextProps | undefined>(
  undefined
);

export const DraggableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const elementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const zIndexRef = useRef(1);

  const registerDraggable = (id: string, element: HTMLDivElement) => {
    elementsRef.current.set(id, element);

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
      element.style.top = `${element.offsetTop - currentPosY}px`;
      element.style.left = `${element.offsetLeft - currentPosX}px`;
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    const topBar = element.querySelector(".window-top") as HTMLElement;
    if (topBar) {
      topBar.onmousedown = dragMouseDown;
    } else {
      element.onmousedown = dragMouseDown;
    }
  };

  const bringToFront = (id: string) => {
    const element = elementsRef.current.get(id);
    if (element) {
      zIndexRef.current += 1;
      element.style.zIndex = `${zIndexRef.current}`;
    }
  };

  return (
    <DraggableContext.Provider value={{ registerDraggable, bringToFront }}>
      {children}
    </DraggableContext.Provider>
  );
};

export const useDraggable = () => {
  const context = useContext(DraggableContext);
  if (!context) {
    throw new Error("useDraggable must be used within a DraggableProvider");
  }
  return context;
};
