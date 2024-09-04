import styles from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_box}>
        <div className={styles.me} data-aos="fade-up">
          <img src="images/me3.png" alt="Lucas" />
          <p>
            Lucas Alves
            <br />
            Full stack sw engineer
          </p>
        </div>
        <h1 data-aos="fade-left">
          Desenvolvo{" "}
          <span className={styles.gradient}>soluções de software</span>,
          sistemas web e aplicativos.
        </h1>

        <div className={styles.description} data-aos="fade-left">
          <p>Consultor, desenvolvedor e freelancer.</p>
          <p>Graduado em ADS universidade da na Amazonia.</p>
          <p>Pós em engenharia de software na USP.</p>
        </div>

        <button className={styles.cta} data-aos="fade-down">
          Ver mais
        </button>
      </div>
      <aside className={styles.illustration_box} data-aos="fade-right">
        <img className={styles.svg} src="images/1.png" alt="ilustração" />
      </aside>
    </div>
  );
};
export default Welcome;
