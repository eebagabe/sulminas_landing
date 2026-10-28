import { useState } from 'react'
import { waLink } from './site'
import catalog from './data/catalog.json'

const segments = ['Restaurante / Pizzaria / Lanchonete', 'Padaria', 'Indústria alimentícia', 'Atacado / Distribuidor', 'Varejo / Supermercado', 'Outro']

export function LeadForm({ title = 'Receba uma proposta', product }) {
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    // shortcut: lead goes straight to WhatsApp, no CRM/backend; plug an endpoint here when one exists
    const msg = [
      'Olá! Quero receber uma proposta da SulMinas.',
      '',
      product && `Produto: ${product}`,
      `Nome: ${d.name}`,
      `Empresa: ${d.company}`,
      `Segmento: ${d.segment}`,
      `Cidade: ${d.city}`,
      `WhatsApp: ${d.phone}`,
    ].filter((l) => l !== undefined && l !== false).join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form form--done">
        <h3>Obrigado!</h3>
        <p>Sua mensagem foi aberta no WhatsApp. Nossa equipe comercial responde em breve.</p>
        <button className="btn btn--outline" onClick={() => setSent(false)}>Enviar outra</button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <h3>{title}</h3>
      <p className="form__sub">Preços e condições para o seu negócio.</p>
      <label>Nome<input name="name" required autoComplete="name" /></label>
      <label>Empresa<input name="company" required autoComplete="organization" /></label>
      <label>
        Segmento
        <select name="segment" required defaultValue="">
          <option value="" disabled>Selecione</option>
          {segments.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <div className="form__row">
        <label>Cidade / UF<input name="city" required autoComplete="address-level2" /></label>
        <label>WhatsApp<input name="phone" type="tel" required minLength={10} autoComplete="tel" placeholder="(11) 90000-0000" /></label>
      </div>
      <button className="btn btn--primary" type="submit">Quero uma proposta</button>
      <small>Sem compromisso. Respondemos em horário comercial.</small>
    </form>
  )
}

export function PageHead({ eyebrow, title, children }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  )
}

export function StoreLogos() {
  return (
    <div className="stores">
      {catalog.stores.map((src) => <img key={src} src={src} alt="Rede parceira" loading="lazy" />)}
    </div>
  )
}

export function RecipeCard({ r }) {
  return (
    <a className="recipe" href={r.url} target="_blank" rel="noopener">
      <div className="recipe__img"><img src={r.img} alt="" loading="lazy" /></div>
      <h3>{r.title}</h3>
      <span>Ver receita ↗</span>
    </a>
  )
}
