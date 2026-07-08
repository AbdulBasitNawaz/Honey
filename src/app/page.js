'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const whatsappNumber1 = '03492012676';
  const whatsappNumber2 = '03119059023';
  const whatsappLink1 = `https://wa.me/923492012676?text=Hi%20Naeemihoney%2C%20I%20want%20to%20order%20pure%20organic%20honey.`;
  const whatsappLink2 = `https://wa.me/923119059023?text=Hi%20Naeemihoney%2C%20I%20want%20to%20order%20pure%20organic%20honey.`;

  const scrollToSection = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Decorative Assets */}
      <img src="/bee1.png" alt="Floating Bee" className="floating-bee bee-1" />
      <img src="/bee2.png" alt="Floating Bee" className="floating-bee bee-2" />
      <img src="/bee3.png" alt="Floating Bee" className="floating-bee bee-3" />
      <img src="/leaf1.png" alt="Floating Leaf" className="floating-leaf leaf-1" />
      <img src="/leaf2.png" alt="Floating Leaf" className="floating-leaf leaf-2" />

      {/* Header Navigation */}
      <header>
        {showAnnouncement && (
          <div className="announcement-bar">
            <span>Free Delivery Across Pakistan — Order Directly via WhatsApp</span>
            <button className="close-announcement" onClick={() => setShowAnnouncement(false)} aria-label="Close Announcement">
              &times;
            </button>
          </div>
        )}
        <div className="container navbar">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src="/NaeemiHoneyLogo.png" alt="Naeemihoney Logo" />
            Naeemihoney
          </a>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} style={menuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-card)', padding: '2rem', borderBottom: '1px solid var(--border-color)' } : {}}>
            <li>
              <a 
                href="#home" 
                className={activeTab === 'home' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#story" 
                className={activeTab === 'story' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); scrollToSection('story'); }}
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="#products" 
                className={activeTab === 'products' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="#benefits" 
                className={activeTab === 'benefits' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
              >
                Benefits
              </a>
            </li>
            <li>
              <a 
                href="#reviews" 
                className={activeTab === 'reviews' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}
              >
                Reviews
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeTab === 'contact' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
            <span style={menuOpen ? { opacity: 0 } : {}}></span>
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(6px, -6px)' } : {}}></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">100% Organic Raw Honey</h1>
            <p className="hero-desc">
              Experience the unmatched wellness, rich flavor, and raw purity of premium Organic Honey. Ethically harvested from pesticide-free wild blossoms and backed by our unconditional refund warranty.
            </p>
            <div className="hero-buttons">
              <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Order via WhatsApp
              </a>
              <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }} className="btn btn-secondary">
                View Collection
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img src="/comb.png" alt="Pure Organic Honey Comb" className="hero-main-img" />
          </div>
        </div>
      </section>

      {/* Our Story / Warranty Section */}
      <section id="story" className="story">
        <div className="container">
          <div class="section-header">
            <span class="section-tag text-gold">100% Return Warranty</span>
            <h2 class="section-title">The Naeemihoney Promise</h2>
          </div>
          <div className="story-grid">
            <div className="honeycomb-gallery">
              <div className="comb-item">
                <img src="/comb.png" alt="Honeycomb close-up" />
              </div>
              <div className="comb-item">
                <img src="/comb2.png" alt="Gathering Honey" />
              </div>
              <div className="comb-item">
                <img src="/comb3.png" alt="Organic Apiary" />
              </div>
              <div className="comb-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(244, 179, 36, 0.05)' }}>
                <img src="/leaf3.png" alt="Oak leaf detail" style={{ width: '70%', height: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="story-content">
              <h3>Pure, Raw & Unadulterated Honey From Wild Blossoms</h3>
              <p>
                At Naeemihoney, we harvest our organic honey during peak harvest season from natural forest apiaries. Every drop is completely free from chemical additives, artificial syrup, or heating processes. It remains raw, keeping its valuable natural enzymes and premium taste intact.
              </p>
              <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1rem', fontStyle: 'italic', margin: '1.5rem 0', color: 'var(--text-white)' }}>
                "If you ever feel any discrepancy in the taste, color, or quality of our honey, we offer an absolute replacement or full refund warranty. Your trust is our main asset."
              </blockquote>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">100%</span>
                  <span class="stat-label">Chemical Free</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">Rs. 0</span>
                  <span class="stat-label">Free Shipping</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">Full</span>
                  <span class="stat-label">Refund Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag text-gold">Organic Honey Collection</span>
            <h2 className="section-title">Fresh Harvest Prices</h2>
          </div>
          <div className="products-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/comb.png" alt="Organic Honey Comb" className="product-img" />
              </div>
              <span className="product-tag">Freshly Cut Comb</span>
              <h3 className="product-title">Raw Organic Honey Comb</h3>
              <p className="product-desc">Pure edible comb directly from the hive. Packed with organic nutrients and honey wax benefits.</p>
              <div className="product-footer">
                <span className="product-price">PKR 4,000</span>
                <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Order Now</a>
              </div>
            </div>
            {/* Product 2 */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/comb2.png" alt="Forest Honey Jar" className="product-img" />
              </div>
              <span className="product-tag">Earthy & Rich</span>
              <h3 className="product-title">Premium Forest Honey (Amber)</h3>
              <p className="product-desc">A deep golden honey with mild woody notes and incredible nutritional value.</p>
              <div className="product-footer">
                <span className="product-price">PKR 4,000</span>
                <a href={whatsappLink2} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Order Now</a>
              </div>
            </div>
            {/* Product 3 */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/comb3.png" alt="Wild Organic Liquid Gold" className="product-img" />
              </div>
              <span className="product-tag">Sweet & Floral</span>
              <h3 class="product-title">Wild Blossom Organic Honey</h3>
              <p className="product-desc">Extremely aromatic honey harvested from high-elevation wild blossoms. Delicate sweetness.</p>
              <div className="product-footer">
                <span className="product-price">PKR 4,000</span>
                <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-tag text-gold">5 Key Qualities</span>
            <h2 className="section-title">Why Choose Naeemihoney?</h2>
          </div>
          <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h4>100% Pure & Natural</h4>
              <p>Directly harvested by bees, completely free from any synthetic sugar, artificial coloring, or preservatives.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h4>Immunity Booster</h4>
              <p>Loaded with antioxidants and antibacterial properties, helping defend your body and strengthen overall health.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
              </div>
              <h4>Quick Natural Energy</h4>
              <p>Provides raw carbohydrates that absorb quickly, boosting vitality and easing daily physical or mental fatigue.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h4>Unique Blossom Aroma</h4>
              <p>Sourced from high-quality wild blossoms, carrying a distinct, premium floral scent and sweet profile.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h4>Quality Refund Warranty</h4>
              <p>We stand fully behind our harvest. If the color, aroma, or quality feels off, we offer a full return or swap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-tag text-gold">Reviews</span>
            <h2 className="section-title">Words from the Hive</h2>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"I ordered the Organic Honey Comb last week to Karachi. It arrived in perfect condition and tastes incredible. Highly recommend Naeemihoney!"</p>
              <div className="review-author">
                <strong>Kamran Shah</strong>
                <span>Verified Buyer (Lahore)</span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"The refund policy gave me confidence, but the quality of this organic honey is outstanding anyway. Very rich flavor, not overly sweet. Will buy again!"</p>
              <div className="review-author">
                <strong>Sadia Bilal</strong>
                <span>Verified Buyer (Islamabad)</span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Real raw organic honey is hard to find in Pakistan. Very happy to report that this is authentic, thick, and has that signature natural aroma."</p>
              <div className="review-author">
                <strong>Zubair Ahmed</strong>
                <span>Verified Buyer (Karachi)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <h3>Order Pure Organic Honey Straight to Your Door</h3>
              <p>We deliver all over Pakistan with free shipping. Have any questions about our batches or want to book an order instantly? Click below or message us on WhatsApp!</p>
              <ul className="contact-details">
                <li>
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: '#25D366' }}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 00-6.98-2.879C5.834 1.96 1.41 6.331 1.407 11.76c-.001 1.714.467 3.388 1.353 4.9l-.995 3.635 3.731-.977c1.516.822 3.011 1.258 4.551 1.258h.002zm11.233-7.56c-.3-.15-1.771-.875-2.04-.972-.27-.099-.467-.15-.663.15-.195.3-.757.973-.928 1.171-.17.199-.344.224-.643.075-.3-.15-1.267-.467-2.414-1.493-.893-.797-1.495-1.78-1.67-2.08-.175-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.497.098-.198.05-.373-.025-.523-.075-.15-.663-1.6-.909-2.193-.24-.58-.48-.5-.663-.51-.17-.008-.368-.01-.567-.01-.2 0-.523.075-.797.373-.273.3-1.043 1.02-1.043 2.487 0 1.467 1.067 2.885 1.215 3.085.149.2 2.1 3.21 5.09 4.512.71.31 1.265.496 1.697.633.714.227 1.365.195 1.88.118.574-.087 1.772-.724 2.02-.1.247-.624.247-1.168.173-1.268-.074-.1-.27-.15-.57-.3z" /></svg>
                  WhatsApp Support 1: {whatsappNumber1}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: '#25D366' }}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 00-6.98-2.879C5.834 1.96 1.41 6.331 1.407 11.76c-.001 1.714.467 3.388 1.353 4.9l-.995 3.635 3.731-.977c1.516.822 3.011 1.258 4.551 1.258h.002zm11.233-7.56c-.3-.15-1.771-.875-2.04-.972-.27-.099-.467-.15-.663.15-.195.3-.757.973-.928 1.171-.17.199-.344.224-.643.075-.3-.15-1.267-.467-2.414-1.493-.893-.797-1.495-1.78-1.67-2.08-.175-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.497.098-.198.05-.373-.025-.523-.075-.15-.663-1.6-.909-2.193-.24-.58-.48-.5-.663-.51-.17-.008-.368-.01-.567-.01-.2 0-.523.075-.797.373-.273.3-1.043 1.02-1.043 2.487 0 1.467 1.067 2.885 1.215 3.085.149.2 2.1 3.21 5.09 4.512.71.31 1.265.496 1.697.633.714.227 1.365.195 1.88.118.574-.087 1.772-.724 2.02-.1.247-.624.247-1.168.173-1.268-.074-.1-.27-.15-.57-.3z" /></svg>
                  WhatsApp Support 2: {whatsappNumber2}
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gold)' }}>Direct WhatsApp Order</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Send a pre-filled order request to one of our numbers for immediate confirmation.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textAlign: 'center' }}>
                  Chat with Support 1 ({whatsappNumber1})
                </a>
                <a href={whatsappLink2} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                  Chat with Support 2 ({whatsappNumber2})
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Naeemihoney. Sourced sustainably, verified pure, 100% money-back warranty.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginTop: '0.5rem', opacity: 0.8 }}>
            Designed & Developed by <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Zahra</span>
          </p>
          <ul className="footer-socials" style={{ marginTop: '1rem' }}>
            <li><a href={whatsappLink1} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
