import {
  BookOpen,
  Briefcase,
  Folder,
  HouseSimple,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";
const NavigationBar = () => {
  function goHome() {
    const element = document.getElementById("home");
    element?.scrollIntoView({ block: "center" });
  }
  return (
    <nav className={styles.container}>
      <li>
        <button className={styles.nav_item} onClick={goHome}>
          <div className={styles.icon_box}>
            <HouseSimple className={styles.icon} />
          </div>
          <p>Inicio</p>
        </button>
      </li>

      <li>
        <button className={styles.nav_item}>
          <div className={styles.icon_box}>
            <BookOpen className={styles.icon} />
          </div>
          <p>Sobre mim</p>
        </button>
      </li>

      <li>
        <button className={styles.nav_item}>
          <div className={styles.icon_box}>
            <Folder className={styles.icon} />
          </div>
          <p>Projetos</p>
        </button>
      </li>

      <li>
        <button className={styles.nav_item}>
          <div className={styles.icon_box}>
            <Briefcase className={styles.icon} />
          </div>
          <p>Trabalho</p>
        </button>
      </li>
    </nav>
  );
};

export default NavigationBar;
