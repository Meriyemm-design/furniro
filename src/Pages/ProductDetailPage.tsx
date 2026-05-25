// ProductDetailPage.tsx
import { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaFacebookF, FaLinkedinIn, FaTwitter, FaTimes, FaShoppingBag, FaTrash } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
// import 'swiper/css'
import '@styles/productdetailpage.scss'
import '@styles/products.scss';

import thumb1 from '@assets/ProductDetail/thumb1.webp'
import thumb2 from '@assets/ProductDetail/thumb1.webp'
import thumb3 from '@assets/ProductDetail/thumb1.webp'
import thumb4 from '@assets/ProductDetail/thumb1.webp'

import img from "@assets/image_1.webp";
import img1 from "@assets/image_2.webp";
import img2 from "@assets/image_3.webp";
import img3 from "@assets/image_4.webp";

import closeIcon from '@assets/ProductDetail/cart_cancel.webp';
import removeIcon from '@assets/ProductDetail/remove.webp';

const galleryImages = [thumb1, thumb2, thumb3, thumb4]
const sizes = ['L', 'XL', 'XS'] as const
const colors = [
  { id: 'purple', value: '#816DFA' },
  { id: 'black', value: '#000000' },
  { id: 'gold', value: '#B88E2F' },
] as const

// Cart Item Type
interface CartItem {
  id: string
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

const AsgaardSofa = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('description')
  const [selectedSize, setSelectedSize] = useState<(typeof sizes)[number]>('L')
  const [selectedColor, setSelectedColor] = useState(colors[0].id)
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const decrementQty = () => setQuantity((q) => Math.max(1, q - 1))
  const incrementQty = () => setQuantity((q) => q + 1)

  const navigate = useNavigate();

  // Add to cart function
  const addToCart = () => {
    const newItem: CartItem = {
      id: `asgaard-sofa-${Date.now()}`,
      name: 'Asgaard sofa',
      price: 250000,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: galleryImages[activeImage],
    }

    setCartItems(prevItems => {
      // Check if item with same size and color exists
      const existingItemIndex = prevItems.findIndex(
        item => item.name === newItem.name &&
          item.size === newItem.size &&
          item.color === newItem.color
      )

      if (existingItemIndex > -1) {
        // Update existing item quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, newItem]
      }
    })

    // Open the cart sidebar
    setIsCartOpen(true)
  }

  // Remove item from cart
  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  // Update item quantity
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  // Get cart item count
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

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
  ];

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Add to Cart Sliding Screen */}
      <div className={`cart-slider ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-slider__header">
          <h3>Shopping Cart
            {/* ({getCartItemCount()}) */}
          </h3>
          <button
            className="cart-slider__close"
            onClick={() => setIsCartOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="cart-slider__content">
          {cartItems.length === 0 ? (
            <div className="cart-slider__empty">
              <FaShoppingBag />
              <p>Your cart is empty</p>
              <button
                className="cart-slider__continue-btn"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* // Update the cart-slider__item section in your component */}
              <div className="cart-slider__items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-slider__item">
                    <div className="cart-item__image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item__details">
                      <div className="cart-item__info">
                        <h4 className="cart-item__name">{item.name}</h4>
                        <div className="cart-item__price-row">
                          <span className="cart-item__quantity-info">{item.quantity} x</span>
                          <span className="cart-item__price">
                            Rs. {item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="cart-item__actions">
                        <div className="cart-item__quantity">
                          <label>Qty:</label>
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            +
                          </button>
                        </div>
                        <button
                          className="cart-item__remove"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-slider__footer">
                <div className="cart-slider__total">
                  <span>Subtotal</span>
                  <span>Rs. {getCartTotal().toLocaleString()}</span>
                </div>
                <div className="cart-slider__actions">
                  <button
                    className="cart-slider__view-cart"
                    onClick={() => {
                      setIsCartOpen(false)
                      navigate('/cart')
                    }}
                  >
                    Cart
                  </button>
                  <button
                    className="cart-slider__checkout"
                    onClick={() => {
                      setIsCartOpen(false)
                      navigate('/checkout')
                    }}
                  >
                    Checkout
                  </button>
                  <button
                    className="cart-slider__comparison"
                    onClick={() => {
                      setIsCartOpen(false)
                      navigate('/comparison')
                    }}
                  >
                    Comparison
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

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
                <button
                  type="button"
                  className="product-detail__btn product-detail__btn--cart"
                  onClick={addToCart}
                >
                  Add To Cart
                </button>
                <button type="button" className="product-detail__btn product-detail__btn--compare">
                  + &nbsp;Compare
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
                    <div className="rev-name">
                      <strong>John D.</strong>
                    </div>
                    <p className="rating">Beautifully made, very comfortable and a pleasure to own.</p>
                    <span className="stars">★★★★★</span>
                  </article>

                  <article className="review">
                    <div className="rev-name">
                      <strong>Emma R.</strong>
                    </div>
                    <p className="rating">Great sofa, color matched perfectly to our living room.</p>
                    <span className="stars">★★★★☆</span>
                  </article>

                  <p className="review-summary">Showing 2 of 5 reviews.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="products related-products main-padding">
        <div className="container">
          <div className="c_title"> Related Products </div>

          <div className="row">
            {info.map((items) => (
              <div key={items.id} className="col-3 product-wrapper">
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
                        {items.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}

            <button onClick={() => { navigate("/shop") }} className="d_btn more"> Show More </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AsgaardSofa