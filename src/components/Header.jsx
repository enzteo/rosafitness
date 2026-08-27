import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-content">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span>ROSA</span>
          <small>FITNESS</small>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>

          <NavLink to="/" onClick={closeMenu}>
            Início
          </NavLink>

          <NavLink to="/produtos" onClick={closeMenu}>
            Produtos
          </NavLink>

          <NavLink to="/sobre" onClick={closeMenu}>
            Sobre
          </NavLink>

          <NavLink to="/contato" onClick={closeMenu}>
            Contato
          </NavLink>

          <a
            href="https://wa.me/message/VSQSVPTUM3KBG1"
            target="_blank"
            rel="noreferrer"
            className="header-whatsapp"
            onClick={closeMenu}
          >
            WhatsApp
          </a>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  )
}

export default Header