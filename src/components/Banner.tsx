import React from 'react'
// import "@styles/.scss";
import '@styles/banner.scss'
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <>
      <div className="banner-section main-padding">
        <div className="row justify-content-center ">
          <div className="text-center align-items-center">
            <h1>Shop</h1>
            <div className="breadcrumb-banner">
              <Link to="/" className='bc-name'> Home</Link>
              <span className="separator">&gt;</span>
              <span> Shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner