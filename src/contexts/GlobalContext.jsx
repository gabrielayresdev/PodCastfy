import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { state, setState } = useLocalStorage("podcasts", []);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
