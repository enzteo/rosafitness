import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function ProductCard({ product }) {
  const price = product.price
    ? `R$ ${product.price.toFixed(2).replace('.', ',')}`
    : 'Consultar'

  return (
    <article className="product-card">

      <Link
        to={`/produto/${product.id}`}
        className="product-image"
      >
        <img
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <div className="product-bottom">

          <strong>
            {price}
          </strong>

          <Link
            to={`/produto/${product.id}`}
            className="product-link"
          >
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </article>
  )
}

export default ProductCard