import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.jpg";
import loaferImage from "../assets/images/loafer.jpg";
import juttiImage from "../assets/images/jutti.jpg";
import heelImage from "../assets/images/heel.jpg";

function Home() {
  return (
    <main className="lace-page">

      {/* HERO */}

      <section className="lace-hero">

        <div className="container">

          <div className="row align-items-center">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <span className="hero-label">
                THE NEW FOOTWEAR EDIT
              </span>

              <h1>
                WALK WITH
                <br />
                <span>CHARACTER.</span>
              </h1>

              <p>
                Discover refined footwear created for
                workdays, celebrations and everything
                between.
              </p>

              <Link
                to="/product"
                className="btn lace-btn"
              >
                EXPLORE COLLECTION
              </Link>

            </div>


            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <div className="hero-image-box">

                <img
                  src={heroImage}
                  alt="LaceCraft footwear"
                />

                <div className="hero-image-text">
                  <span>2026 COLLECTION</span>
                  <strong>CRAFTED TO LAST</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="intro-section">

        <div className="container">

          <div
            className="intro-content"
            data-aos="fade-up"
          >

            <span>OUR PHILOSOPHY</span>

            <h2>
              Footwear that completes
              <br />
              the way you present yourself.
            </h2>

            <p>
              From polished office shoes to expressive
              ethnic styles, LaceCraft brings together
              carefully selected footwear for every occasion.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURED CATEGORIES */}

      <section className="category-section">

        <div className="container">

          <div className="section-heading">

            <div>
              <span>SHOP BY STYLE</span>

              <h2>
                Find your signature pair.
              </h2>
            </div>

            <Link
              to="/product"
              className="text-link"
            >
              VIEW ALL
            </Link>

          </div>


          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
            >

              <div className="category-card">

                <img
                  src={loaferImage}
                  alt="Loafers"
                />

                <div className="category-overlay">
                  <span>01</span>
                  <h3>Formal Classics</h3>
                  <p>Polished styles for every workday.</p>
                </div>

              </div>

            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="category-card">

                <img
                  src={juttiImage}
                  alt="Ethnic footwear"
                />

                <div className="category-overlay">
                  <span>02</span>
                  <h3>Ethnic Stories</h3>
                  <p>Traditional character with modern comfort.</p>
                </div>

              </div>

            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="category-card">

                <img
                  src={heelImage}
                  alt="Women's heels"
                />

                <div className="category-overlay">
                  <span>03</span>
                  <h3>Women's Edit</h3>
                  <p>Elegant footwear for special moments.</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PROMO */}

      <section className="promo-section">

        <div className="container">

          <div
            className="promo-box"
            data-aos="zoom-in"
          >

            <div>

              <span>
                LACECRAFT JOURNAL
              </span>

              <h2>
                The right pair changes
                <br />
                the whole look.
              </h2>

            </div>

            <Link
              to="/about"
              className="promo-link"
            >
              OUR STORY
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;