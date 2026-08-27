import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  MessageCircle,
} from 'lucide-react'

import products from '../data/products'

function Produto() {
  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return (
      <section className="section">

        <div className="container not-found">

          <h1>
            Produto não encontrado.
          </h1>

          <Link to="/produtos">
            Voltar para produtos
          </Link>

        </div>

      </section>
    )
  }

  const price = product.price
    ? `R$ ${product.price.toFixed(2).replace('.', ',')}`
    : 'Consultar'

  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto ${product.name}.`
  )

  return (
    <section className="section product-page">

      <div className="container">

        <Link
          to="/produtos"
          className="back-link"
        >
          <ArrowLeft size={17} />
          Voltar
        </Link>


        <div className="product-detail">

          <div className="product-detail-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>


          <div className="product-detail-info">

            <span className="eyebrow">
              {product.category}
            </span>

            <h1>
              {product.name}
            </h1>

            <strong className="product-price">
              {price}
            </strong>

            <p className="product-description">
              {product.description}
            </p>


            <div className="sizes">

              <strong>
                Tamanhos disponíveis
              </strong>

              <div className="sizes-list">

                {product.sizes.map((size) => (
                  <span key={size}>
                    {size}
                  </span>
                ))}

              </div>

            </div>


            <a
              href={`https://wa.me/message/VSQSVPTUM3KBG1?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="button button-primary product-whatsapp"
            >
              <MessageCircle size={19} />
              Tenho interesse
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Produto