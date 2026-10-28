import { useState } from 'react'
import { PageHead } from '../components'
import { regions } from '../data/representantes'
import { ADDRESS, COMERCIAL_EMAIL, PHONE, telLink, waLink } from '../site'

export default function Representantes() {
  const [current, setCurrent] = useState(regions[0])

  return (
    <>
      <PageHead eyebrow="Nossos Representantes" title="Encontre um representante">
        Escolha sua região e fale direto com quem atende a sua cidade.
      </PageHead>
      <section className="section section--tight">
        <div className="wrap">
          <div className="chips" role="tablist">
            {regions.map((r) => (
              <button key={r.region} role="tab" aria-selected={r === current} className={r === current ? 'chip is-active' : 'chip'} onClick={() => setCurrent(r)}>{r.region}</button>
            ))}
          </div>
          <div className="reps">
            {current.states.map((s) => (
              <article className="rep" key={s.state}>
                <h3>{s.state}</h3>
                {s.reps.map((r) => (
                  <div className="rep__item" key={r.area}>
                    <span className="rep__area">{r.area}</span>
                    <strong>{r.name}</strong>
                    {r.phones.map((p) => <a key={p} href={telLink(p)}>{p}</a>)}
                    {r.emails.map((e) => <a key={e} href={`mailto:${e}`}>{e}</a>)}
                  </div>
                ))}
              </article>
            ))}
          </div>

          <div className="matriz">
            <div>
              <span className="eyebrow">Matriz São Paulo</span>
              <p>{ADDRESS}</p>
              <p>
                <a href={telLink(PHONE)}>{PHONE}</a> (Ramal 5337) · <a href={`mailto:${COMERCIAL_EMAIL}`}>{COMERCIAL_EMAIL}</a>
              </p>
            </div>
            <a className="btn btn--primary" href={waLink('Olá! Não encontrei um representante na minha região.')} target="_blank" rel="noopener">Falar com a matriz</a>
          </div>
        </div>
      </section>
    </>
  )
}
