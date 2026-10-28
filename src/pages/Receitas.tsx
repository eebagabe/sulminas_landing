import { PageHead, RecipeCard } from '../components'
import catalog from '../data/catalog.json'

export default function Receitas() {
  return (
    <>
      <PageHead eyebrow="Livro de Receitas" title="Receitas com SulMinas e Roseli">
        Explore receitas incríveis utilizando nossos produtos. Desde pratos tradicionais a inovações culinárias, inspire-se com as dicas de chefs renomados.
      </PageHead>
      <section className="section section--tight">
        <div className="wrap recipes">
          {catalog.recipes.map((r) => <RecipeCard key={r.url} r={r} />)}
        </div>
      </section>
    </>
  )
}
