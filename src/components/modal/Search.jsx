import React from "react";
import styles from "./Search.module.scss";
import useFetch from "../../hooks/useFetch";
import { search } from "../../api";
import { GlobalContext } from "../../contexts/GlobalContext";
import SearchItem from "./SearchItem";
import magnifying from "/src/assets/magnifying-glass-solid.svg";
import close from "/src/assets/xmark-solid.svg";

const Search = ({ setModal }) => {
  const [input, setInput] = React.useState("");
  const { data, loading, request } = useFetch();
  const global = React.useContext(GlobalContext);
  React.useEffect(() => {
    if (input.length > 0) {
      const { url, options } = search(input, global.data.access_token);
      request(url, options);
    }
  }, [input, request, global]);
  /* console.log(data ? data.shows.items : null); */

  function handleClick({ target, currentTarget }) {
    if (target === currentTarget) setModal(false);
  }

  return (
    <div className={styles.search_container} onClick={handleClick}>
      <div className={styles.search}>
        <div className={styles.input}>
          <img src={magnifying} alt="" className={styles.lupa} />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Procure por um podcast"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <img
            src={close}
            alt=""
            className={styles.icon}
            onClick={() => setModal(false)}
          />
        </div>
        <div className={styles.results}>
          {loading &&
            Array(20)
              .fill("")
              .map((value, index) => (
                <div key={index} className={styles.loading}>
                  <span className={styles.loading_animation}></span>
                  <div className={styles.text_container}>
                    <h2 className={styles.loading_animation}></h2>
                    <p className={styles.loading_animation}></p>
                  </div>
                </div>
              ))}
          {data &&
            input.length > 0 &&
            data.shows.items.map((show) => {
              return (
                <SearchItem key={show.id} data={show} setModal={setModal} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
