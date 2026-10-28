import { Link } from 'react-router-dom'
import { LeadForm, RecipeCard, StoreLogos } from '../components'
import { waLink } from '../site'
import catalog from '../data/catalog.json'

const highlights = [
  { name: 'Creme sabor Cream Cheese', desc: 'Perfeito para diversas receitas.', img: '/img/produtos/sul-minas-9.png' },
  { name: 'Requeijão Cremoso Roseli', desc: 'Tradição e sabor inigualáveis.', img: '/img/produtos/WhatsApp-Image-2024-11-11-at-9.52.14-AM.jpeg' },
  { name: 'Cobertura Cremosa Sabor Cheddar R.Minas', desc: 'Sabor marcante e cremosidade.', img: '/img/produtos/cobertura-01.jpg' },
  { name: 'Cobertura Cremosa Sabor Requeijão Milk', desc: 'Inovação e praticidade para food service.', img: '/img/produtos/milk-pizza.png' },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="proposta">
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Desde 1960</span>
            <h1>Entregando qualidade e sabor para sua mesa.</h1>
            <p>
              Líderes na produção de cobertura cremosa culinária. Linha SulMinas e Roseli,
              sem gordura hidrogenada e com ingredientes puros.
            </p>
            <ul className="checks">
              <li>Sem gordura hidrogenada</li>
              <li>Entrega pontual em todo o Brasil</li>
              <li>Indústria, atacado e food service</li>
            </ul>
            <img className="hero__img" src="/img/Banner-so-produtos-Projeto-Sul-Minas.png" alt="Linha de produtos SulMinas, Roseli e R.Minas" />
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <span className="eyebrow">Nossos Produtos</span>
              <h2>A linha completa SulMinas e Roseli</h2>
              <p>Descubra a linha completa de produtos SulMinas e Roseli. Nossa dedicação à qualidade sem gordura hidrogenada e ingredientes puros garante produtos excepcionais.</p>
            </div>
            <Link className="btn btn--outline" to="/produtos">Ver todos os {catalog.products.length} produtos</Link>
          </div>
          <div className="products">
            {highlights.map((p) => (
              <article className="product" key={p.name}>
                <div className="product__img"><img src={p.img} alt={p.name} loading="lazy" /></div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a href={waLink(`Olá! Quero uma cotação de: ${p.name}`)} target="_blank" rel="noopener">Pedir cotação →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="sobre">
        <div className="wrap about">
          <div className="about__year">1960</div>
          <div>
            <span className="eyebrow">Sobre a SulMinas</span>
            <h2>De uma banca de queijos à liderança no Sul de Minas</h2>
            <p>
              Nossa história começa em 1960 com Artur e Isola Anghinoni. Desde a compra de uma banca de
              queijos no Mercado Municipal da Lapa até a produção em larga escala no Sul de Minas, crescemos
              com o compromisso de entregar produtos lácteos de alta qualidade. Hoje, somos líderes na produção
              de cobertura cremosa culinária, reconhecidos pela pureza e excelência dos nossos produtos.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <span className="eyebrow">Nossos Clientes</span>
              <h2>Presente nas maiores redes do Brasil</h2>
              <p>
                Estamos presentes em grandes indústrias alimentícias, atacados, e pequenos e médios restaurantes
                em todo o Brasil. Nossos clientes confiam na qualidade e na entrega pontual da SulMinas.
              </p>
            </div>
            <Link className="btn btn--outline" to="/onde-comprar">Onde comprar</Link>
          </div>
          <StoreLogos />
          <blockquote className="quote">
            “Os produtos SulMinas elevam a qualidade dos nossos pratos. A entrega é sempre eficiente e confiável.”
            <cite>Cliente SulMinas</cite>
          </blockquote>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <span className="eyebrow">Livro de Receitas</span>
              <h2>Inspire-se na cozinha</h2>
              <p>Explore receitas incríveis utilizando nossos produtos. Desde pratos tradicionais a inovações culinárias, inspire-se com as dicas de chefs renomados.</p>
            </div>
            <Link className="btn btn--outline" to="/receitas">Ver receitas</Link>
          </div>
          <div className="recipes">
            {catalog.recipes.slice(0, 3).map((r) => <RecipeCard key={r.url} r={r} />)}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta__inner">
          <div>
            <h2>Leve SulMinas para o seu negócio</h2>
            <p>Fale com um representante e receba condições especiais.</p>
          </div>
          <div className="cta__actions">
            <Link className="btn btn--light" to="/representantes">Encontre um representante</Link>
            <a className="btn btn--ghost" href={waLink()} target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
