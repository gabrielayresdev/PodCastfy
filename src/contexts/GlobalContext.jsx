import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import { getToken } from "../api";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { state, setState } = useLocalStorage("podcasts", [
    "22Wgt4ASeaw8mmoqAWNUn1",
    "2p0Vx75OmfsXktyLBuLuSf",
  ]);
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = getToken();

    request(url, options);
    setInterval(() => {
      request(url, options);
    }, 3600000);
  }, [request]);

  function savePodcast(id) {
    setState([...state, id]);
  }

  // Fazer página de erro
  if (error) return null;
  else if (data)
    return (
      <GlobalContext.Provider value={{ state, savePodcast, data }}>
        {children}
      </GlobalContext.Provider>
    );
};
