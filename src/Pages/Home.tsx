import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/home.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
import { LiaArrowRightSolid } from "react-icons/lia";

import dining from "@assets/dining.webp";
import living from "@assets/living.webp";
import bedroom from "@assets/bedroom.webp";
import heroImage from "@assets/hero-img.webp";
import r1 from "@assets/room1.webp";
import r2 from "@assets/room2.webp";
import r3 from "@assets/room3.webp";
import image1 from "@assets/image_1.webp";
import image2 from "@assets/image_2.webp";
import image3 from "@assets/image_3.webp";
import image4 from "@assets/image_4.webp";

import gp1 from '../assets/gp1.webp'
import gp2 from '../assets/gp2.webp'
import gp3 from '../assets/gp3.webp'
import gp4 from '../assets/gp4.webp'
import gp5 from '../assets/gp5.webp'
import gp6 from '../assets/gp6.webp'
import gp7 from '../assets/gp7.webp'
import gp8 from '../assets/gp8.webp'
import gp9 from '../assets/gp9.webp'
import gp10 from '../assets/gp10.webp'
import gp11 from '../assets/gp11.webp'

import Products from "../components/Products";

const Home = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      img: dining,
      title: "Dining",
    },
    {
      id: 2,
      img: living,
      title: "Living",
    },
    {
      id: 3,
      img: bedroom,
      title: "Bedroom",
    },
  ];

  const details = [
    {
      id: 1,
      img: r1,
      title: "Inner Peace",
      desc: "01 - Bed Room",
      btn: <LiaArrowRightSolid />,
    },
    {
      id: 2,
      img: r2,
      title: "Inner Peace",
      desc: "01 - Bed Room",
      btn: <LiaArrowRightSolid />,
    },
    {
      id: 3,
      img: r3,
      title: "Inner Peace",
      desc: "01 - Bed Room",
      btn: <LiaArrowRightSolid />,
    },
    {
      id: 4,
      img: r2,
      title: "Inner Peace",
      desc: "01 - Bed Room",
      btn: <LiaArrowRightSolid />,
    },
  ];
  return (
    <>
      {/* <HeroPnel /> */}
      <div className="hero-panel">
        <div className="hero-image">
          <img src={heroImage} alt="hero" />
        </div>

        <div className="hero-content">
          <div className="new"> New Arrivals </div>
          <div className="hero-title">Discover Our New Collection </div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <button onClick={() => { navigate("/shop") }} className="more">Buy Now</button>
        </div>
      </div>

      <div className="browse main-padding">
        <div className="container">
          <h2 className="c_title">Browse The Range</h2>
          <p className="c_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="row justify-content-center">
            {data.map((item) => (
              <div className="col-3" key={item.id}>
                <div className="browse-card">
                  <div className="bc_img">
                    <img src={item.img} alt="" />
                  </div>
                  {/* <div className="bc_title">{item.title} </div> */}
                  {item.id === 2 ? (
                    <div className="bc_title" onClick={() => navigate("/productdetailpage")}>
                      {item.title}
                    </div>
                  ) : (
                    <div className="bc_title">{item.title}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Products />

      <div className="rooms-section">
        <div className="container main-padding">
          <div className="row">
            <div className="inspiration">
              <div className="col-lg-4">
                <div className="left">
                  <h2 className="c_title">50+ Beautiful rooms inspiration</h2>
                  <p className="c_desc">
                    Our designer already made a lot of beautiful prototipe of
                    rooms that inspire you
                  </p>
                  <button onClick={() => { navigate("/shop") }} className="more">Explore Now</button>
                </div>
              </div>
              <div className="col-lg-8 right" style={{ width: "100%" }}>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={true}
                  pagination={{ clickable: true }}
                  // autoplay= {true}
                  modules={[Navigation, Pagination]}
                  // grabCursor={true}
                  loop={true}
                  className="mySwiper"
                >
                  {details.map((item) => (
                    // <>
                    <SwiperSlide key={item.id}>
                      <div className="ss_card">
                        <div className="ss_card_img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="ss_card_content">
                          <div className="ss_card_desc"> {item.desc} </div>
                          <h2 className="card-title"> {item.title} </h2>
                          <button className="card_btn"> {item.btn} </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    // </>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery main-padding">
        <img src={gp1} alt="" />
        <img src={gp2} alt="" />
        <img src={gp8} alt="" />
        <img src={gp4} alt="" />
        <img src={gp5} alt="" />
        <img src={gp7} alt="" />
        <img src={gp6} alt="" />
        <img src={gp3} alt="" />
        <img src={gp9} alt="" />
        <img src={gp10} alt="" />
        <img src={gp11} alt="" />
      </div>
    </>
  );
};

export default Home;
