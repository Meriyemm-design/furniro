import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/productdetailpage.scss'

const AsgaardSofa = () => {
  return (
    <main className="asgaard-sofa-page">
      <div className="asgaard-sofa-breadcrumb">
        <div className="breadcrumb-path">
          <Link to="/" className="bc-name">
            Home
          </Link>
          <span className="separator">&gt;</span>
          <Link to="/shop" className="bc-name">
            Shop
          </Link>
          <span className="separator">&gt;</span>
          <span className="breadcrumb-current">Asgaard sofa</span>
        </div>
      </div>

      <section className="asgaard-sofa-content">
        <div className="content-inner">
          <h1>Asgaard sofa</h1>
          <p>
            A refined lounge statement in warm materials, designed to pair
            effortlessly with the rest of the Furniro collection.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AsgaardSofa