import styles from "./Navbar.module.scss";

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <a href="/socialmedia" className={styles.Text}>
          Social Media
        </a>
        <a href="/help" className={styles.Text}>
          Pomoc
        </a>
        <a href="/login" className={styles.Text}>
          Zaloguj się
        </a>
      </div>
    </div>
  );
}

export default App;
