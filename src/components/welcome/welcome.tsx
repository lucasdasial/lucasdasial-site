import styles from "./welcome.module.css";
const Welcome = () => {
  return (
    <section className="">
      <div className={styles.intro}>
        <div className={styles.welcome}>
          <h1>
            Desenvolvo{" "}
            <span className={styles.gradient}>soluções de software</span>,
            <br /> sistemas web e aplicativos.
          </h1>
          <p>Consultor e desenvolvedor na @IdopterLabs.</p>
          <p>Graduado em ADS universidade da na Amazonia.</p>
          <p>Pós em engenharia de software na USP.</p>
          <a href="">Ver mais</a>
        </div>

        <div className={styles.illustration}>
          <img src="images/1.svg" alt="ilustração" />
        </div>
      </div>
    </section>
  );
};
export default Welcome;
