import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="custom-container">
                    <div className="row">
                        <div className="footer">
                            {/* Left Content */}
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-content">
                                    <h2 className="f_title">Furniro.</h2>
                                    <p className='f-desc'>
                                        400 University Drive Suite 200 Coral Gables, <br />
                                        FL 33134 USA
                                    </p>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="footer-links">
                                    <h6 className='ft'>Links</h6>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Help */}
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="footer-links">
                                    <h6 className='ft'>Help</h6>
                                    <ul>
                                        <li><a href="#">Payment Options</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Privacy Policies</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-links footer-newsletter">
                                    <h6 className='ft'>Newsletter</h6>
                                    <div className="newsletter-input">
                                        <input type="email" placeholder="Enter Your Email Address" />
                                        <button className='ft' style={{ margin: 0, color: "#000", fontWeight: "600" }}>SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom line */}
                        <div className="footer-bottom">
                            <p className='copyright'>2023 Furniro. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer