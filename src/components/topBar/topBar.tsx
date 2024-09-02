import styles from "./topBar.module.css";
const TopBar = () => {
  return (
    <header className={styles.container}>
      <img className={styles.avatar} src="images/me2.png" alt="Lucas Dasial" />
      <h1>.dasial</h1>
    </header>
  );
};

export default TopBar;
