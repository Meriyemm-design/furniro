import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/productdetailpage.scss'

const AsgaardSofa = () => {
  return (
    <section className="asgaard-sofa-page">
      <div className="container">
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
      </div>
    </section>
  )
}

export default AsgaardSofa