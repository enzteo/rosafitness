import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <Link to="/" className="logo footer-logo">
            <span>ROSA</span>
            <small>FITNESS</small>
          </Link>

          <p>
            Estilo, qualidade e conforto para acompanhar
            sua rotina.
          </p>

        </div>

        <div className="footer-column">

          <h4>Navegação</h4>

          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>

        </div>

        <div className="footer-column">

          <h4>Redes sociais</h4>

          <a
            href="https://www.instagram.com/ROSAFITNESS/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/message/VSQSVPTUM3KBG1"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

        </div>

      </div>

      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Rosa Fitness.
          Todos os direitos reservados.
        </p>

      </div>

    </footer>
  )
}

export default Footer