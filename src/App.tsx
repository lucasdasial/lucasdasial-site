function App() {
  return (
    <main className="app">
      <aside className="aside aside-left">
        <div className="content">
          <img
            className="profile_img"
            src="fav.png"
            alt="Foto de perfil Lucas Dasial"
          />
          <h1 className="about-title">
            Olá, sou Lucas <br /> Dasial.
          </h1>
          <article className="about">
            <p>
              Eu sou Lucas Alves, também conhecido como Dasial, sou um
              programador com 4 anos de experiência, graduado em Análise e
              Desenvolvimento de Sistemas e especializado em Engenharia de
              Software. Tenho paixão por desenvolver soluções completas e
              eficientes, com foco em backend na construção de APIs para
              integrações de sistemas, além do desenvolvimento de aplicativos
              para Android e iOS.
              <br />
            </p>
            <p>
              Atualmente, faço parte da equipe da{" "}
              <a href="https://en.idopterlabs.com.br/" target="blank">
                @idopterlabs
              </a>
              , uma consultoria multinacional, onde atuo no desenvolvimento de
              uma fintech líder na região Nordeste do Brasil.
            </p>
          </article>
        </div>
        <div className="links">
          <p>
            <a href="https://www.linkedin.com/in/lucasdasial/" target="blank">
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/lucasdasial" target="blank">
              Github
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/dasial.dev/" target="blank">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://dev.to/lucasdasial" target="blank">
              Blog
            </a>
          </p>
        </div>
      </aside>
      {/* <aside className="aside assise-right"></aside> */}
    </main>
  );
}

export default App;
