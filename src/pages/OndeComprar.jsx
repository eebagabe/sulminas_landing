import { Link } from 'react-router-dom'
import { PageHead, StoreLogos } from '../components'

export default function OndeComprar() {
  return (
    <>
      <PageHead eyebrow="Onde Comprar" title="Encontre SulMinas perto de você">
        Nossos produtos estão nas principais redes atacadistas e distribuidores do Brasil.
      </PageHead>
      <section className="section section--tight">
        <div className="wrap">
          <StoreLogos />
          <p className="center">
            Quer revender ou comprar direto da fábrica? <Link to="/representantes">Encontre um representante</Link> ou <Link to="/#proposta">peça uma proposta</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
