import React from 'react'
import '@styles/ftbanner.scss'
// import { FaShippingFast, FaTrophy, FaHeadset } from 'react-icons/fa'
// import { BsShieldCheck } from 'react-icons/bs'

import trophy from '@assets/trophy.webp';
import guarantee from '@assets/guarantee.webp';
import shipping from '@assets/shipping.webp';
import customer_support from '@assets/customer_support.webp';

const features = [
    {
        id: 1,
        //   icon: <FaTrophy />,
        img: trophy,
        title: "High Quality",
        subtitle: "crafted from top materials",
    },
    {
        id: 2,
        // icon: <BsShieldCheck />,
        img: guarantee,
        title: "Warranty Protection",
        subtitle: "Over 2 years",
    },
    {
        id: 3,
        // icon: <FaShippingFast />,
        img: shipping,
        title: "Free Shipping",
        subtitle: "Order over 150 $",
    },
    {
        id: 4,
        // icon: <FaHeadset />,
        img: customer_support,
        title: "24 / 7 Support",
        subtitle: "Dedicated support",
    },
];

const FtBanner = () => {
    return (
        <>
            <div className="shop-feature-strip main-padding">
                <div className="container">
                    <div className="feature-grid">
                        {features.map((feature) => (
                            <div className="feature-card" key={feature.id}>
                                <div className="feature-icon">
                                    <img src={feature.img} alt={feature.title} />
                                </div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FtBanner