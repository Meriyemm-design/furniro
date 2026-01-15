import React, { useState } from "react";

import img from "@assets/image_1.webp";
import img1 from "@assets/image_2.webp";
import img2 from "@assets/image_3.webp";
import img3 from "@assets/image_4.webp";

import share from "@assets/share.webp";
import likeWhite from "@assets/heart-white.webp";
import compare from "@assets/compare.webp";

const Products = () => {
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
  ];

  return (
    <>
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
                      className={`product-card__discount-badge ${
                        items.discount ? "product-card__discount-badge" : "new"
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
    </>
  );
};

export default Products;
