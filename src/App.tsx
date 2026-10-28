import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { INSTAGRAM_URL, LINKEDIN_URL, PHONE, PORTAL_URL, SAC_EMAIL, telLink, waLink } from './site'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Receitas from './pages/Receitas'
import OndeComprar from './pages/OndeComprar'
import Representantes from './pages/Representantes'
import Contato from './pages/Contato'

const nav = [
  ['/produtos', 'Produtos'],
  ['/receitas', 'Receitas'],
  ['/onde-comprar', 'Onde Comprar'],
  ['/representantes', 'Representantes'],
  ['/contato', 'Contato'],
]

export default function App() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <header className="nav">
        <div className="wrap nav__inner">
          <Link to="/" aria-label="SulMinas, início"><img src="/img/logo.png" alt="SulMinas" height="44" /></Link>
          <nav className={open ? 'is-open' : ''} onClick={() => setOpen(false)}>
            <NavLink to="/" end>Início</NavLink>
            {nav.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            <a className="nav__portal" href={PORTAL_URL} target="_blank" rel="noopener">Portal de Vendas ↗</a>
          </nav>
          <div className="nav__actions">
            <Link className="btn btn--primary btn--sm" to="/#proposta">Fale Conosco</Link>
            <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/onde-comprar" element={<OndeComprar />} />
          <Route path="/representantes" element={<Representantes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="wrap footer__grid">
          <div>
            <img src="/img/logo.png" alt="SulMinas" height="48" />
            <p>Somos líderes na produção de cobertura cremosa culinária, reconhecidos pela pureza e excelência dos nossos produtos.</p>
          </div>
          <div>
            <h4>Navegação</h4>
            <Link to="/#sobre">Quem Somos</Link>
            {nav.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
            <a href={PORTAL_URL} target="_blank" rel="noopener">Portal de Vendas</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a href={telLink(PHONE)}>{PHONE}</a>
            <a href={`mailto:${SAC_EMAIL}`}>{SAC_EMAIL}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <p className="wrap footer__copy">SulMinas © Todos os direitos reservados</p>
      </footer>

      <a className="wa-float" href={waLink('Olá! Vim pelo site da SulMinas.')} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z" /></svg>
        <span className="wa-float__label">Fale no WhatsApp</span>
      </a>
    </>
  )
}
