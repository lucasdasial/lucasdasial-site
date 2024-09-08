import styles from "../styles.module.css";

interface Props {
  mockupPath: string;
  iconPath: string;
  appName: string;
  appOwner: string;
  title: string;
  description: string;
  tags: string;
}

const ItemProject = (props: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.mockup_box}>
        <img src={props.mockupPath} alt="Ilustração do aplicativo" />
      </div>
      <div className={styles.desc_box}>
        <div className={styles.app_header}>
          <img
            className={styles.app_icon}
            width={60}
            src={props.iconPath}
            alt="Ícone do aplicativo"
          />
          <div className={styles.app_name}>
            <h1>{props.appName}</h1>
            <p>{props.appOwner}</p>
          </div>
        </div>

        <p className={styles.title_description}>{props.title}</p>

        <p className={styles.challengers}>{props.description}</p>
        <p className={styles.tags}>{props.tags}</p>
      </div>
    </div>
  );
};

export default ItemProject;
