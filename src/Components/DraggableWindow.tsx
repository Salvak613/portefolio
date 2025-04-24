import React, { useEffect, useRef } from "react";
import { useDraggable } from "../Context/DraggableContext";

interface DraggableWindowProps {
  id: string;
  children: React.ReactNode;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ id, children }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const { registerDraggable, bringToFront } = useDraggable();

  useEffect(() => {
    const element = windowRef.current;
    if (!element) return;

    registerDraggable(id, element);

    element.addEventListener("mousedown", () => bringToFront(id));

    return () => {
      element.removeEventListener("mousedown", () => bringToFront(id));
    };
  }, [id, registerDraggable, bringToFront]);

  return (
    <div
      ref={windowRef}
      id={id}
      className="window"
      style={{ position: "absolute" }}
    >
      {children}
    </div>
  );
};

export default DraggableWindow;
