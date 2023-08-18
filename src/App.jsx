import Menu from "./components/menu/Menu";
import { GlobalStorage } from "./contexts/GlobalContext";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Podcast from "./components/main/Podcast";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <div className={styles.app}>
          <Menu />
          <Routes>
            <Route path="/" element={<Podcast />} />
            <Route path="/podcast/:id" element={<Podcast />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
