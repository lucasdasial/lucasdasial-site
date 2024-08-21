import { CodaLogo, SuitcaseSimple } from "@phosphor-icons/react"
import SimpleParallax from "simple-parallax-js"
import { Card } from "../../components/card/card"
import "./myServices.css"
export function MyServices() {
    return <section className="myservices-container" id="more">
        <div className="myservices-content">

            <p data-aos="fade-up">Desenvolvedor Fullstack</p>
            <p className="xp-description" data-aos="fade-up">
                Vivencia em todos os estágios na engenharia de software, desde o conceito inicial até
                a implementação final.
            </p>


            <div className="teste">
                <SimpleParallax orientation='up right' scale={1.25} delay={2} overflow>
                    <img src="/images/2.svg" alt="" />
                </SimpleParallax>

                <div className="buttons" >
                    <span data-aos="fade-up" data-aos-delay="200">
                        <Card Icon={CodaLogo} label=" Ver projetos" />
                    </span>
                    <span data-aos="fade-up" data-aos-delay="300">
                        <Card Icon={SuitcaseSimple} label="Ver trabalho" />
                    </span>
                </div>
            </div>
        </div>
    </section>
}