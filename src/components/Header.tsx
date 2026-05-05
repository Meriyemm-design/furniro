import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import profile from "../assets/profile.webp";
import heart from "../assets/heart.webp";
import cart from "../assets/cart.webp";
import search from "../assets/search.webp";

const Header = () => {
  return (
    <>
      <div className="nav-section">
        <div className="custom-container">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="nav_img">
                <img src={logo} alt="" style={{ width: "170px" }} />
              </div>
            </div>
            <div className="col-4">
              <div className="nav_links">
                <ul>
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li>
                    <Link to="/shop"> Shop </Link>
                  </li>
                  <li>
                    <Link to="/about"> About </Link>
                  </li>
                  <li>
                    <Link to="/contact"> Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="info_icons">
                <a href="">
                  <img src={profile} alt="" style={{ width: "24px" }} />
                </a>
                <a href="">
                  <img src={search} alt="" style={{ width: "24px" }} />
                </a>
                <a href="">
                  <img src={heart} alt="" style={{ width: "24px" }} />
                </a>
                <a href="">
                  <img src={cart} alt="" style={{ width: "24px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
