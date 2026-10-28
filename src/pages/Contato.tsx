import { useState, type FormEvent } from 'react'
import { PageHead } from '../components'
import { ADDRESS, COMERCIAL_EMAIL, PHONE, SAC_EMAIL, telLink, waLink } from '../site'

const sectors = ['Controle de Qualidade', 'Financeiro', 'Logística', 'Suprimentos', 'Demais Assuntos']

export default function Contato() {
  const [tab, setTab] = useState('SAC')
  const comercial = tab === 'Comercial'

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const body = [`Nome: ${d.name}`, `Email: ${d.email}`, comercial && `Telefone: ${d.phone}`, comercial && `CNPJ: ${d.cnpj}`, `Setor: ${d.sector}`, '', d.message]
      .filter((l) => typeof l === 'string').join('\n')
    // shortcut: opens the visitor's mail client, no backend; swap for a form endpoint when one exists
    window.location.href = `mailto:${comercial ? COMERCIAL_EMAIL : SAC_EMAIL}?subject=${encodeURIComponent(`[${tab}] Contato pelo site`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHead eyebrow="Contato" title="Entre em contato com a SulMinas" />
      <section className="section section--tight">
        <div className="wrap contact">
          <form className="form form--static" onSubmit={submit}>
            <div className="chips" role="tablist">
              {['SAC', 'Comercial'].map((t) => (
                <button type="button" key={t} role="tab" aria-selected={t === tab} className={t === tab ? 'chip is-active' : 'chip'} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
            <label>Nome<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            {comercial && (
              <div className="form__row">
                <label>Telefone<input name="phone" type="tel" required autoComplete="tel" /></label>
                <label>CNPJ<input name="cnpj" required /></label>
              </div>
            )}
            <label>
              Setor que deseja falar
              <select name="sector" required defaultValue="">
                <option value="" disabled>Selecione</option>
                {sectors.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Mensagem<textarea name="message" rows={5} required /></label>
            <button className="btn btn--primary" type="submit">Enviar</button>
          </form>

          <aside className="contact__info">
            <div><h4>Telefone</h4><a href={telLink(PHONE)}>{PHONE}</a></div>
            <div><h4>WhatsApp</h4><a href={waLink()} target="_blank" rel="noopener">(11) 9 4229-7284</a></div>
            <div><h4>SAC</h4><a href={`mailto:${SAC_EMAIL}`}>{SAC_EMAIL}</a></div>
            <div><h4>Comercial</h4><a href={`mailto:${COMERCIAL_EMAIL}`}>{COMERCIAL_EMAIL}</a></div>
            <div><h4>Matriz</h4><p>{ADDRESS}</p></div>
          </aside>
        </div>
      </section>
    </>
  )
}
