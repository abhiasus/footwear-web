import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg lace-navbar fixed-top">
        <div className="container">

          <Link className="navbar-brand lace-brand" to="/">
            Lace<span>Craft</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#laceNav"
            aria-controls="laceNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="laceNav"
          >
            <ul className="navbar-nav ms-auto lace-nav-links">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Collection
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* PAGES */}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>


      {/* FOOTER */}

      <footer className="lace-footer">

        <div className="container">

          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
            >
              <h3>
                Lace<span>Craft</span>
              </h3>

              <p>
                Thoughtfully designed footwear made for
                everyday elegance, comfort and timeless style.
              </p>
            </div>


            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h5>Navigation</h5>

              <Link to="/">Home</Link>
              <Link to="/product">Collection</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>


            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h5>Categories</h5>

              <p>Formal Footwear</p>
              <p>Ethnic Collection</p>
              <p>Women's Footwear</p>
              <p>Casual Collection</p>
            </div>


            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h5>Contact</h5>

              <p>Phone: 0000000</p>
              <p>Email: hello@lacecraft.com</p>
              <p>Monday - Saturday</p>
              <p>10:00 AM - 7:00 PM</p>
            </div>

          </div>


          <div className="footer-bottom">

            <p>
              © 2026 LaceCraft. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}

export default App;