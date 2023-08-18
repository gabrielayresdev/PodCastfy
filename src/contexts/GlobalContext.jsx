import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { state, setState } = useLocalStorage("podcasts", [
    "22Wgt4ASeaw8mmoqAWNUn1",
  ]);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
