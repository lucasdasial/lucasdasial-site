import styles from "./welcome.module.css";
const Welcome = () => {
  return (
    <section className={styles.container + " max-viewer"} id="home">
      <div className={styles.intro}>
        <h1>
          Desenvolvo{" "}
          <span className={styles.gradient}>soluções de software</span>,
          sistemas web e aplicativos.
        </h1>
        <div className={styles.points}>
          <p>Consultor e desenvolvedor na @IdopterLabs.</p>
          <p>Graduado em ADS universidade da na Amazonia.</p>
          <p>Pós em engenharia de software na USP.</p>
        </div>
        <a href="#next">Ver mais</a>
      </div>

      <div className={styles.illustration}>
        <div className={styles.img_bg}>
          <img src="images/1.svg" alt="ilustração" />
        </div>
      </div>
    </section>
  );
};
export default Welcome;
