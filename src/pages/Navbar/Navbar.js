import styles from "./Navbar.module.scss";

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <a href="/#" className={styles.Text}>
          Social Media
        </a>
        <a href="/#" className={styles.Text}>
          Pomoc
        </a>
        <a href="/#" className={styles.Text}>
          Zaloguj się
        </a>
      </div>
    </div>
  );
}

export default App;
