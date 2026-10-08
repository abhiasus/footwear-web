import React from "react";

import loaferImage from "../assets/images/loafer.jpg";
import officeImage from "../assets/images/office.jpg";
import juttiImage from "../assets/images/jutti.jpg";
import ethnicImage from "../assets/images/ethnic.jpg";
import sandalImage from "../assets/images/sandal.jpg";
import heelImage from "../assets/images/heel.jpg";
import flatsImage from "../assets/images/flats.jpg";
import derbyImage from "../assets/images/derby.jpg";
import monkImage from "../assets/images/monk.jpg";
import moccasinImage from "../assets/images/moccasin.jpg";
import sliponImage from "../assets/images/slipon.jpg";
import weddingImage from "../assets/images/wedding.jpg";

function Product() {

  const products = [
    {
      id: 1,
      name: "Heritage Loafer",
      category: "Loafers",
      price: "₹3,499",
      image: loaferImage,
    },
    {
      id: 2,
      name: "Office Classic",
      category: "Office",
      price: "₹3,299",
      image: officeImage,
    },
    {
      id: 3,
      name: "Royal Jutti",
      category: "Ethnic",
      price: "₹2,499",
      image: juttiImage,
    },
    {
      id: 4,
      name: "Ethnic Walk",
      category: "Ethnic",
      price: "₹2,799",
      image: ethnicImage,
    },
    {
      id: 5,
      name: "Comfort Sandal",
      category: "Sandals",
      price: "₹1,899",
      image: sandalImage,
    },
    {
      id: 6,
      name: "Grace Heel",
      category: "Heels",
      price: "₹2,999",
      image: heelImage,
    },
    {
      id: 7,
      name: "Soft Step",
      category: "Flats",
      price: "₹2,199",
      image: flatsImage,
    },
    {
      id: 8,
      name: "Milano Derby",
      category: "Formal",
      price: "₹3,799",
      image: derbyImage,
    },
    {
      id: 9,
      name: "Classic Monk",
      category: "Formal",
      price: "₹3,999",
      image: monkImage,
    },
    {
      id: 10,
      name: "Urban Moccasin",
      category: "Casual",
      price: "₹2,699",
      image: moccasinImage,
    },
    {
      id: 11,
      name: "Easy Slip",
      category: "Casual",
      price: "₹2,399",
      image: sliponImage,
    },
    {
      id: 12,
      name: "Wedding Royale",
      category: "Wedding",
      price: "₹4,499",
      image: weddingImage,
    },
  ];


  const addToCart = (product) => {

    console.log("Product added:", product.name);

    alert(`${product.name} added to cart.`);
  };


  return (
    <main className="lace-page">

      {/* PAGE TITLE */}

      <section className="collection-header">

        <div className="container">

          <span>THE COLLECTION</span>

          <h1>
            Designed for
            <br />
            every occasion.
          </h1>

          <p>
            Explore our selection of formal, ethnic,
            casual and occasion footwear.
          </p>

        </div>

      </section>


      {/* PRODUCT GRID */}

      <section className="product-section">

        <div className="container">

          <div className="product-top">

            <div>
              <span>2026 EDITION</span>
              <h2>All Footwear</h2>
            </div>

            <p>
              12 carefully selected styles
            </p>

          </div>


          <div className="row g-4">

            {products.map((product, index) => (

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >

                <div className="product-card">

                  <div className="product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="product-number">
                      {String(product.id).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="product-info">

                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <div className="product-bottom">

                      <strong>
                        {product.price}
                      </strong>

                      <button
                        onClick={() => addToCart(product)}
                      >
                        ADD
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Product;