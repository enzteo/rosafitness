import {
  MessageCircle,
  MapPin,
} from 'lucide-react'

function Contato() {
  return (
    <section className="section contact-page">

      <div className="container">

        <div className="page-header">

          <span className="eyebrow">
            CONTATO
          </span>

          <h1>
            Vamos conversar?
          </h1>

          <p>
            Tire suas dúvidas, consulte disponibilidade
            ou fale com a gente sobre seu próximo look.
          </p>

        </div>

        <div className="contact-grid">

          <a
            href="https://wa.me/message/VSQSVPTUM3KBG1"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <MessageCircle size={28} />

            <h3>
              WhatsApp
            </h3>

            <p>
              Fale diretamente com a nossa equipe.
            </p>

            <strong>
              Abrir WhatsApp →
            </strong>

          </a>

          <a
            href="https://www.instagram.com/ROSAFITNESS/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div className="social-placeholder">
              @
            </div>

            <h3>
              Instagram
            </h3>

            <p>
              Veja nossas novidades e acompanhe a marca.
            </p>

            <strong>
              @ROSAFITNESS →
            </strong>

          </a>

          <div className="contact-card">

            <MapPin size={28} />

            <h3>
              Atendimento
            </h3>

            <p>
              Entregas rápidas em Cuiabá e região.
            </p>

            <strong>
              Consulte disponibilidade
            </strong>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contato