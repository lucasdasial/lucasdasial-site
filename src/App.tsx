

import './App.css';

function App() {

  return (

    <div className='page'>
      <main className='main'>
        <section className="content main_content">
          <aside className='aside' data-aos="fade-left" >
            <h1>I make <br /> mobile <br /> & web <br />apps.</h1>
          </aside>

          <section className='intro'>
            <div className='intro_header' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
              <img className='avatar' src="https://avatars.githubusercontent.com/u/72477227?v=4" alt="foto de perfil" />
              <p className='title highlight'>Fullstack <br /> <span >developer</span>.</p>
            </div>
            <p className='intro description' data-aos="fade-up" data-aos-delay="800" >Olá, meu nome é Lucas Dasial. Sou um desenvolvedor Fullstack com ampla experiência no desenvolvimento e criação de aplicativos móveis, além de atuar na elaboração de APIs para integração entre sistemas e aplicações web.</p>
            <nav data-aos="fade-up" data-aos-delay="1000">

              {/* <button>
                trabalho
              </button>
              <button>
                social
              </button> */}
              <button>
                ver mais
              </button>

            </nav>


          </section>
        </section>
      </main>








      {/* <p className='small-description'>Diariamente utilizo tecnologia para solucionar problemas, transformando em aplicações e produtos, sempre visando o valor agregado e em uma boa experiencia para os clientes nos projetos que atuo.</p> */}

      {/* 

      <div className='titles'>

        <p> Diariamente utilizo tecnologia e programação para solucionar problemas, transformando em aplicações e produtos, sempre visando no valor agregado, na experiencia do usuário, em como impacta as outras pessoas
          nos projetos que atuo.</p>
      </div> */}


      {/* <div className="strong-points-box">

        <p className='small-description'>
          Desenvolvedor Fullstack experiente, em entregar soluções completas, desde o conceito inicial até a implementação final.
        </p>
        <p className='strong_label'>Tenho um forte experiência e interesse em:</p>
        <div className="words">
          <span className='cloud'>Cloud computing</span>
          <span className='api'> Criação de APIs</span>
          <span className='saas'>Testes automatizados</span>
          <span className='apps'>Aplicativos mobile</span>
        </div>

      </div> */}



    </div>

  )
}

export default App
