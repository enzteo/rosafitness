import { useState } from 'react'

import ProductCard from '../components/ProductCard'
import products from '../data/products'

function Produtos() {
  const [category, setCategory] = useState('Todos')

  const categories = [
    'Todos',
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts =
    category === 'Todos'
      ? products
      : products.filter(
          (product) => product.category === category
        )

  return (
    <section className="section products-page">
      <div className="container">

        <div className="page-header">
          <span className="eyebrow">
            COLEÇÃO
          </span>

          <h1>
            Produtos
          </h1>

          <p>
            Escolha suas peças favoritas e fale com a
            Rosa Fitness pelo WhatsApp.
          </p>
        </div>

        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? 'filter-active'
                  : ''
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Produtos