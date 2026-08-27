import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Truck,
  Sparkles,
  Heart,
} from 'lucide-react'

import ProductCard from '../components/ProductCard'
import products from '../data/products'
import hero from '../assets/hero.png'

function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      <section className="hero">

        <div className="container hero-content">

          <div className="hero-text">

            <span className="eyebrow">
              ROSA FITNESS
            </span>

            <h1>
              Estilo que acompanha
              <span>seu movimento.</span>
            </h1>

            <p>
              Moda fitness que une estilo, qualidade e
              conforto para você se sentir bem durante
              o treino e no dia a dia.
            </p>

            <div className="hero-actions">

              <Link
                to="/produtos"
                className="button button-primary"
              >
                Ver produtos
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/message/VSQSVPTUM3KBG1"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Falar conosco
              </a>

            </div>

          </div>

          <div className="hero-image">

            <img
              src={hero}
              alt="Rosa Fitness"
            />

          </div>

        </div>

      </section>


      <section className="benefits">

        <div className="container benefits-grid">

          <div className="benefit">

            <Truck size={23} />

            <div>
              <strong>
                Entrega rápida
              </strong>

              <span>
                Cuiabá e região
              </span>
            </div>

          </div>


          <div className="benefit">

            <Sparkles size={23} />

            <div>
              <strong>
                Qualidade
              </strong>

              <span>
                Peças selecionadas
              </span>
            </div>

          </div>


          <div className="benefit">

            <Heart size={23} />

            <div>
              <strong>
                Conforto
              </strong>

              <span>
                Para acompanhar você
              </span>
            </div>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                COLEÇÃO
              </span>

              <h2>
                Peças em destaque
              </h2>

            </div>

            <Link
              to="/produtos"
              className="text-link"
            >
              Ver todos
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="products-grid">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>


      <section className="about-preview">

        <div className="container about-preview-grid">

          <div className="about-preview-image">

            <img
              src={hero}
              alt="Coleção Rosa Fitness"
            />

          </div>

          <div className="about-preview-content">

            <span className="eyebrow">
              ROSA FITNESS
            </span>

            <h2>
              Moda fitness para
              acompanhar sua rotina.
            </h2>

            <p>
              Peças escolhidas para quem busca conforto,
              qualidade e estilo em todos os momentos.
            </p>

            <Link
              to="/sobre"
              className="button button-primary"
            >
              Conheça a marca
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      <section className="cta-section">

        <div className="container">

          <span className="eyebrow">
            ROSA FITNESS
          </span>

          <h2>
            Seu próximo look começa aqui.
          </h2>

          <p>
            Fale com a gente e encontre a peça ideal para você.
          </p>

          <a
            href="https://wa.me/message/VSQSVPTUM3KBG1"
            target="_blank"
            rel="noreferrer"
            className="button button-light"
          >
            Falar pelo WhatsApp
            <ArrowRight size={18} />
          </a>

        </div>

      </section>
    </>
  )
}

export default Home