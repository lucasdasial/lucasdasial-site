import styles from "./styles.module.css";

const TopBar = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <h1>.dasial</h1>

        <nav className={styles.nav}>
          <a href="#projetos">Projetos</a>

          <a href="">Trabalho</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
