import Menu from "./components/menu/Menu";
import { GlobalStorage } from "./contexts/GlobalContext";
import styles from "./App.module.scss";

function App() {
  return (
    <GlobalStorage>
      <div className={styles.app}>
        <Menu />
      </div>
    </GlobalStorage>
  );
}

export default App;
