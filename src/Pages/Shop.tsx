import React from 'react'
import { useState } from 'react'
import Banner from '../components/Banner'
// import Products from '../components/Products'
import '@styles/shop.scss'

import img from "@assets/image_1.webp";
import img1 from "@assets/image_2.webp";
import img2 from "@assets/image_3.webp";
import img3 from "@assets/image_4.webp";

import share from "@assets/share.webp";
import likeWhite from "@assets/heart-white.webp";
import compare from "@assets/compare.webp";

import FtBanner from '../components/FtBanner'
import 'remixicon/fonts/remixicon.css'

import filter from "@assets/Shop/filter_icon.webp";
import grid from "@assets/Shop/grid_icon.webp";
import list from "@assets/Shop/view_list.webp";

const Shop = () => {
  const [isLikedById, setIsLikedById] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [isCompared, setIsCompared] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const info = [
    {
      id: 1,
      img: img,
      title: "Slytherine",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 2,
      img: img1,
      title: "Laviosa",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 3,
      img: img2,
      title: "Lolito",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 4,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 5,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 6,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 7,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 8,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 9,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 10,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 11,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 12,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 13,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 14,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 15,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 16,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 17,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 18,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 19,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 20,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 21,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 22,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      discount: "-30%",
    },
    {
      id: 23,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
    {
      id: 24,
      img: img3,
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rs. 2.500.000",
      oldPrice: "Rs. 3.500.000",
      new: "New",
    },
  ];

  return (
    <>
      <Banner />

      {/* <div className="filter-section">
        <div className="container">
          <div className="col-6">
            <div className="filter-left">
              <button className="filter-icon">
                <i className="ri-sound-module-line"></i>
                Filter
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <section className="shop-toolbar">
        <div className="container">
          <div className="shop-toolbar__left">
            <button className="filter-button" type="button">
              <span className="filter-button__icon">&#9881;</span>
              Filter
            </button>
          </div>

          <div className="shop-toolbar__right">
            <p className="results-text">Showing 1–16 of 32 results</p>
            <div className="toolbar-controls">
              <label className="control-group">
                <span className="control-group__label">Show</span>
                <select className="control-select">
                  <option>16</option>
                  <option>24</option>
                  <option>32</option>
                </select>
              </label>

              <label className="control-group">
                <span className="control-group__label">Short by</span>
                <select className="control-select">
                  <option>Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </section> */}

      <section className="filter-bar">
        <div className="left-side">
          <div className="filter-item">
            <img src={filter} alt="filter" />
            <span>Filter</span>
          </div>

          <div className="grid-icon">
            <img src={grid} alt="grid" style={{width:"26px"}}/>
          </div>

          <div className="list-icon">
            <img src={list} alt="list" />
          </div>

          <div className="divider"></div>

          <p>Showing 1–16 of 32 results</p>
        </div>

        <div className="right-side">
          <div className="show-box">
            <span>Show</span>
            <input type="text" placeholder="16" />
          </div>

          <div className="sort-box">
            <span>Short by</span>
            <input type="text" placeholder="Default" />
          </div>
        </div>
      </section>


      {/* Products */}
      <div className="products main-padding">
        <div className="container">
          <h2 className="c_title"> Our Products </h2>

          <div className="row">
            {info.map((items) => (
              <div className="col-3 product-wrapper">
                <div className="product-card">
                  <div className="product-card__image-wrapper">
                    <img
                      src={items.img}
                      alt="Syltherine Stylish cafe chair"
                      className="product-card__image"
                    />
                    <div
                      className={`product-card__discount-badge ${items.discount ? "product-card__discount-badge" : "new"
                        }`}
                    >
                      {items.discount ? items.discount : items.new}
                    </div>
                  </div>
                  <div className="product-card__details">
                    <div className="product-card__title">{items.title}</div>
                    <div className="product-card__description">
                      {items.desc}
                    </div>
                    <div className="product-card__prices">
                      <span className="product-card__price">{items.price}</span>
                      <span className="product-card__old-price">
                        {items.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="product-overlay">
                  <button className="d_btn"> Add to cart </button>
                  <div className="compare-btns">
                    <div className="share-icon">
                      <div className="share-img">
                        <img src={share} alt="" style={{ width: "16px" }} />
                      </div>
                      Share
                    </div>
                    <div
                      className="share-icon"
                      onClick={() => {
                        setIsLikedById((prev) => ({
                          ...prev,
                          [items.id]: !prev[items.id],
                        }));
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="share-img">
                        {isLikedById?.[items.id] ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="red"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        ) : (
                          <img
                            src={likeWhite}
                            alt=""
                            style={{ width: "16px" }}
                          />
                        )}
                      </div>
                      Like
                    </div>
                    <div className="share-icon">
                      <div className="share-img">
                        <img src={compare} alt="" />
                      </div>
                      Compare
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="d_btn more"> Show More </button>
          </div>
        </div>
      </div>

      <FtBanner />
    </>
  )
}

export default Shop