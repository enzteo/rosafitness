import {
  Heart,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'

import hero from '../assets/hero.png'

function Sobre() {
  return (
    <section className="section about-page">

      <div className="container">

        <div className="page-header">

          <span className="eyebrow">
            SOBRE A MARCA
          </span>

          <h1>
            Rosa Fitness
          </h1>

          <p>
            Estilo, qualidade e conforto para acompanhar
            cada movimento.
          </p>

        </div>


        <div className="about-main">

          <div className="about-main-image">

            <img
              src={hero}
              alt="Rosa Fitness"
            />

          </div>


          <div className="about-main-content">

            <h2>
              Feita para acompanhar você.
            </h2>

            <p>
              A Rosa Fitness busca unir moda, conforto e
              qualidade para criar uma experiência melhor
              para quem ama se movimentar.
            </p>

            <p>
              Nossas peças são escolhidas pensando em
              diferentes momentos da rotina, desde o treino
              até aquele momento em que você simplesmente
              quer se sentir bem.
            </p>

          </div>

        </div>


        <div className="values-grid">

          <div className="value-card">

            <Heart size={25} />

            <h3>
              Conforto
            </h3>

            <p>
              Peças pensadas para acompanhar seus movimentos.
            </p>

          </div>


          <div className="value-card">

            <Sparkles size={25} />

            <h3>
              Estilo
            </h3>

            <p>
              Looks que combinam funcionalidade e personalidade.
            </p>

          </div>


          <div className="value-card">

            <ShieldCheck size={25} />

            <h3>
              Qualidade
            </h3>

            <p>
              Produtos selecionados com atenção aos detalhes.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Sobre