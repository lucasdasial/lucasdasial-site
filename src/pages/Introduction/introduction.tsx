
import { CaretCircleDown } from '@phosphor-icons/react';
import SimpleParallax from 'simple-parallax-js';
import { Avatar } from '../../components/avatar/avatar';
import './introduction.css';


export function Introduction() {


    return <section className='hero-container'>

        <div className="hero-content-box">

            <div className="intro-container">
                <Avatar />
                <h1 className='intro-title' data-aos="fade-left" data-aos-delay="">
                    I make mobile & web apps.
                </h1>

                <p className='short-description' data-aos="fade-up" data-aos-delay="" >
                    Olá, também sou conhecido como <strong>Dasial</strong>. Sou desenvolvedor Fullstack com ampla experiência no desenvolvimento e criação de aplicativos móveis,
                    além de atuar na elaboração de APIs para integração entre sistemas e aplicações web.
                </p>

                <a href="#more">
                    <div className='continue-button' data-aos="fade-up" data-aos-delay="400" >
                        <p >Continuar vendo</p>
                        <CaretCircleDown />
                    </div>
                </a>
            </div>


            <div className='image-container' data-aos="fade-right" data-aos-delay="">
                <SimpleParallax orientation='down' scale={1.35} delay={2} overflow>
                    <img className='hero-img' src="/images/1.svg" alt="ilustração" />
                </SimpleParallax>
            </div>




        </div>
    </section>


}