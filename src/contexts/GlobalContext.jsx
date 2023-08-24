import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import { getToken } from "../api";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { state, setState } = useLocalStorage("podcasts", []);
  const { data, error, request } = useFetch();
  const [midia, setMidia] = React.useState();
  const [playerData, setPlayerData] = React.useState();

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

  function deletePodcast(id) {
    const index = state.indexOf(id);
    const left = state.slice(0, index);
    const right = state.slice(index, state.length - 1);
    const auxArr = [...left, ...right];
    setState(auxArr);
  }

  /*  React.useEffect(() => {
    midiaRef.current = midia;
    console.log(midiaRef);
    if (midia) {
      midia.play();
    }
  }, [midia]); */

  // Fazer página de erro
  if (error) return null;
  else if (data)
    return (
      <GlobalContext.Provider
        value={{
          state,
          savePodcast,
          deletePodcast,
          data,
          midia,
          setMidia,
          playerData,
          setPlayerData,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
};
