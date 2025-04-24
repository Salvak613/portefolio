// Supprimé : Ce fichier n'est plus nécessaire.
import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext<any>(null);

export const WindowProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<any>(null);

  return (
    <WindowContext.Provider value={{ state, setState }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);
