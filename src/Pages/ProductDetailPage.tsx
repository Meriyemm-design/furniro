import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
// import 'swiper/css'
import '@styles/productdetailpage.scss'

import thumb1 from '@assets/ProductDetail/thumb1.webp'
import thumb2 from '@assets/ProductDetail/thumb1.webp'
import thumb3 from '@assets/ProductDetail/thumb1.webp'
import thumb4 from '@assets/ProductDetail/thumb1.webp'

const galleryImages = [thumb1, thumb2, thumb3, thumb4]
const sizes = ['L', 'XL', 'XS'] as const
const colors = [
  { id: 'purple', value: '#816DFA' },
  { id: 'black', value: '#000000' },
  { id: 'gold', value: '#B88E2F' },
] as const

const AsgaardSofa = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('description')
  const [selectedSize, setSelectedSize] = useState<(typeof sizes)[number]>('L')
  const [selectedColor, setSelectedColor] = useState(colors[0].id)
  const [quantity, setQuantity] = useState(1)

  const decrementQty = () => setQuantity((q) => Math.max(1, q - 1))
  const incrementQty = () => setQuantity((q) => q + 1)

  return (
    <>
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

      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail">
            <div className="product-detail__gallery">
              <div className="product-detail__thumbnails">
                {galleryImages.map((src, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`product-detail__thumb ${activeImage === index ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveImage(index)
                      swiperRef.current?.slideTo(index)
                    }}
                    aria-label={`View image ${index + 1}`}
                    aria-current={activeImage === index ? 'true' : undefined}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
              <div className="product-detail__main-image">
                <Swiper
                  className="product-detail__swiper"
                  slidesPerView={1}
                  speed={500}
                  allowTouchMove
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper
                  }}
                  onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
                >
                  {galleryImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img src={src} alt={`Asgaard sofa view ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="product-detail__info">
              <h1 className="product-detail__title">Asgaard sofa</h1>
              <p className="product-detail__price">Rs. 250,000.00</p>

              <div className="product-detail__rating">
                <div className="product-detail__stars" aria-label="4.5 out of 5 stars">
                  {[1, 2, 3, 4].map((i) => (
                    <FaStar key={i} />
                  ))}
                  <FaStarHalfAlt />
                </div>
                <span className="product-detail__rating-divider" />
                <span className="product-detail__reviews">5 Customer Review</span>
              </div>

              <p className="product-detail__description">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                compact, stout-hearted hero with a well-balanced audio which boasts a clear
                midrange and extended highs for a sound.
              </p>

              <div className="product-detail__option">
                <span className="product-detail__option-label">Size</span>
                <div className="product-detail__size-options">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`product-detail__size-btn ${selectedSize === size ? 'is-selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-detail__option">
                <span className="product-detail__option-label">Color</span>
                <div className="product-detail__color-options">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      className={`product-detail__color-swatch ${selectedColor === color.id ? 'is-selected' : ''}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.id)}
                      aria-label={`Color ${color.id}`}
                    />
                  ))}
                </div>
              </div>

              <div className="product-detail__actions">
                <div className="product-detail__quantity">
                  <button type="button" onClick={decrementQty} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={incrementQty} aria-label="Increase quantity">
                    +
                  </button>
                </div>
                <button type="button" className="product-detail__btn product-detail__btn--cart">
                  Add To Cart
                </button>
                <button type="button" className="product-detail__btn product-detail__btn--compare">
                  + Compare
                </button>
              </div>

              <div className="product-detail__meta">
                <div className="product-detail__meta-row">
                  <span className="product-detail__meta-label">SKU</span>
                  <span className="product-detail__meta-value">:</span>
                  <span>SS001</span>
                </div>
                <div className="product-detail__meta-row">
                  <span className="product-detail__meta-label">Category</span>
                  <span className="product-detail__meta-value">:</span>
                  <span>Sofas</span>
                </div>
                <div className="product-detail__meta-row">
                  <span className="product-detail__meta-label">Tags</span>
                  <span className="product-detail__meta-value">:</span>
                  <span>Sofa, Chair, Home, Shop</span>
                </div>
                <div className="product-detail__meta-row product-detail__meta-row--share">
                  <span className="product-detail__meta-label">Share</span>
                  <span className="product-detail__meta-value">:</span>
                  <div className="product-detail__social">
                    <a href="#" aria-label="Share on Facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#" aria-label="Share on LinkedIn">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" aria-label="Share on Twitter">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-tabs">
        <div className="container">
          <div className="tabs-nav">
            <button className={`tab ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
            <button className={`tab ${activeTab === 'additional' ? 'active' : ''}`} onClick={() => setActiveTab('additional')}>Additional Information</button>
            <button className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews [5]</button>
          </div>

          <div className="tab-panels">
            {activeTab === 'description' && (
              <div className="tab-panel description">
                <p>
                  Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                  sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>

                <p>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
                  midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the
                  controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>

                <div className="desc-images">
                  <div className="desc-img-box">
                    <img src={thumb3} alt="sofa detail 1" />
                  </div>
                  <div className="desc-img-box">
                    <img src={thumb4} alt="sofa detail 2" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="tab-panel additional">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <th>Material</th>
                      <td>Solid wood, Upholstery fabric</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>W 240cm × D 95cm × H 85cm</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>approx. 45 kg</td>
                    </tr>
                    <tr>
                      <th>Color</th>
                      <td>Beige, Navy, Black</td>
                    </tr>
                    <tr>
                      <th>Warranty</th>
                      <td>2 years manufacturer's warranty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-panel reviews">
                <div className="review-list">
                  <article className="review">
                    <div className="rev-head">
                      <strong>John D.</strong>
                      <span className="stars">★★★★★</span>
                    </div>
                    <p>Beautifully made, very comfortable and a pleasure to own.</p>
                  </article>

                  <article className="review">
                    <div className="rev-head">
                      <strong>Emma R.</strong>
                      <span className="stars">★★★★☆</span>
                    </div>
                    <p>Great sofa, color matched perfectly to our living room.</p>
                  </article>

                  <p className="review-summary">Showing 2 of 5 reviews.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default AsgaardSofa