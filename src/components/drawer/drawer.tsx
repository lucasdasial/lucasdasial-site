import {
  BookOpen,
  Briefcase,
  Folder,
  HouseSimple,
} from "@phosphor-icons/react";
import styles from "./drawer.module.css";
const Drawer = () => {
  return (
    <aside className={styles.container}>
      <li>
        <HouseSimple />
        <p>Inicio</p>
      </li>

      <li>
        <BookOpen />
        <p>Sobre mim</p>
      </li>

      <li>
        <Folder />
        <p>Projetos</p>
      </li>

      <li>
        <Briefcase />
        <p>Trabalho</p>
      </li>
    </aside>
  );
};

export default Drawer;
