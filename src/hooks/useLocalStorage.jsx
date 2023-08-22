import React from "react";
import Format from "../helper/format";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);

    return (local && local.length) > 0
      ? Format.arrayFromLocalStorage(local)
      : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);
  return { state, setState };
};

export default useLocalStorage;
