import { useRef, useState } from 'react'
import { PageHead, type Product } from '../components'
import { waLink } from '../site'
import catalog from '../data/catalog.json'

const brands = ['Todos', ...new Set(catalog.products.map((p) => p.brand))]

export default function Produtos() {
  const [brand, setBrand] = useState('Todos')
  const [current, setCurrent] = useState<Product | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const list = brand === 'Todos' ? catalog.products : catalog.products.filter((p) => p.brand === brand)

  function open(p: Product) {
    setCurrent(p)
    dialog.current?.showModal()
  }

  return (
    <>
      <PageHead eyebrow="Produtos" title="Nossa linha completa">
        Descubra a linha completa de produtos SulMinas e Roseli. Nossa dedicação à qualidade sem gordura hidrogenada e ingredientes puros garante produtos excepcionais.
      </PageHead>

      <section className="section section--tight">
        <div className="wrap">
          <div className="chips" role="tablist">
            {brands.map((b) => (
              <button key={b} role="tab" aria-selected={b === brand} className={b === brand ? 'chip is-active' : 'chip'} onClick={() => setBrand(b)}>{b}</button>
            ))}
          </div>
          <div className="products">
            {list.map((p) => (
              <button className="product product--btn" key={p.name} onClick={() => open(p)}>
                <div className="product__img">{p.img ? <img src={p.img} alt="" loading="lazy" /> : <img src="/img/logo.png" alt="" className="product__ph" />}</div>
                <span className="product__brand">{p.brand}</span>
                <h3>{p.name}</h3>
                <span className="product__more">Detalhes →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <dialog className="modal" ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current.close()}>
        {current && (
          <div className="modal__body">
            <button className="modal__close" aria-label="Fechar" onClick={() => dialog.current?.close()}>×</button>
            <div className="modal__img"><img src={current.img || '/img/logo.png'} alt={current.name} /></div>
            <div>
              <span className="product__brand">{current.brand}</span>
              <h2>{current.name}</h2>
              <p>{current.desc}</p>
              <a className="btn btn--primary" href={waLink(`Olá! Quero uma cotação de: ${current.name}`)} target="_blank" rel="noopener">Pedir cotação deste produto</a>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
