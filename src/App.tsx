

import { CodaLogo, SuitcaseSimple, Wrench } from "@phosphor-icons/react";
import './App.css';
import { TopBar, } from './components/TopBar';

function App() {

  return (

    <div className='page'>

      <TopBar />
      <main className='main'>
        <h1>I make  mobile <br />  & web apps.</h1>
        <p className='myDescription' data-aos="fade-up" data-aos-delay="800" >
          Olá, também sou conhecido como <strong>Dasial</strong>. Sou desenvolvedor Fullstack com ampla experiência no desenvolvimento e criação de aplicativos móveis,
          além de atuar na elaboração de APIs para integração entre sistemas e aplicações web.
        </p>


        <section className='cards'>


          <div className='card'>
            <div className="card-content">
              <Wrench weight="duotone" color="white" size={42} />
            </div>
            <div className="label-box card-one">
              <p>Serviços</p>
            </div>
          </div>

          <div className='card'>
            <div className="card-content">
              <SuitcaseSimple weight="duotone" color="white" size={42} />
            </div>
            <div className="label-box card-two">
              <p>Trabalho</p>
            </div>
          </div>
          <div className='card'>
            <div className="card-content">
              <CodaLogo weight="duotone" color="white" size={42} />
            </div>
            <div className="label-box card-three">
              <p>Projetos</p>
            </div>
          </div>
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



    </div >

  )
}

export default App
