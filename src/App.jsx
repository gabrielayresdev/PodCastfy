import Menu from "./components/menu/Menu";
import { GlobalStorage } from "./contexts/GlobalContext";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Podcast from "./components/main/Podcast";
import Player from "./components/player/Player";
import Episode from "./components/main/Episode";
import Home from "./components/main/Home";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <div className={styles.app}>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast/:id" element={<Podcast />} />
            <Route path="/episodio/:id" element={<Episode />} />
          </Routes>
          <Player />
        </div>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
