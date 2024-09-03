import styles from "./topBar.module.css";
const TopBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.bar + " max-viewer"}>{/* <h1>.dasial</h1> */}</div>
    </header>
  );
};

export default TopBar;
