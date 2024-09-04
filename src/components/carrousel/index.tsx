import styles from "./styles.module.css";

const CarrouselStacks = () => {
  return (
    <>
      <div className={styles.carrousel}>
        <div className={styles.item}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg" />

          <p>Elixir</p>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
          <p>Flutter</p>
        </div>

        <div className={styles.item}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <p>React Js</p>
        </div>

        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
          <p>C sharp</p>
        </div>

        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
          <p>Go lang</p>
        </div>

        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          <p>Typescript</p>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

          <p>Aws cloud</p>
        </div>
      </div>
    </>
  );
};

export default CarrouselStacks;
