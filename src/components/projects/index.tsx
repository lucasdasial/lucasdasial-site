import ItemProject from "./components/itemProject";
import styles from "./styles.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projetos">
      <h1>Projetos</h1>
      <ItemProject
        mockupPath="projects/mckp-stock.png"
        iconPath="projects/icon-stock.png"
        appName="Stock pulse"
        appOwner="IdopterLabs"
        title="Aplicativo para acompanhar a bolsa de valores e ativos internacionais"
        description=" O grande desafio superado nesse projete foi o gerenciamento
         de dados em tempo real da NASDAQ e as otimizações de
          performance na apresentação dos dados em gráfico."
        tags=" Mobile developer"
      />

      <ItemProject
        mockupPath="projects/mckp-beneficios.png"
        iconPath="projects/icon-beneficios.png"
        appName="Wow benefícios"
        appOwner="Wowlet"
        title="Aplicativo para os clientes da franquia wowlet utilizarem de seus benefícios"
        description="Principais funcionalidades que eu desenvolvi no app foram o mapa das lojas parceiras, sistema de pagamentos, redistribuição de saldo entre cartões, histórico de transações entre outras funcionalidade além de fazer integração com recursos nativos como GPS e câmera."
        tags="Mobile & backend developer"
      />

      <ItemProject
        mockupPath="projects/mckp-credenciado.png"
        iconPath="projects/icon-credenciados.png"
        appName="Wow benefícios"
        appOwner="Wowlet"
        title="Aplicativo para os estabelecimentos credenciados da wowlet poderem fazer a gestão de seus negócios."
        description=" O grande desafio superado nesse projete foi o gerenciamento do grande
          volumes de dados em tempo real da NASDAQ e as otimizações de
          performance na apresentação dos dados em gráfico."
        tags="Mobile & backend developer"
      />
    </section>
  );
};

export default Projects;
