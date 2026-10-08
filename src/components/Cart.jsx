import React, { useState } from "react";

import loaferImage from "../assets/images/loafer.jpg";

function Cart() {

  const [quantity, setQuantity] = useState(1);

  const price = 3499;

  const total = price * quantity;


  const increase = () => {
    setQuantity(quantity + 1);
  };


  const decrease = () => {

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  };


  const checkout = () => {

    alert("Thank you for shopping with LaceCraft.");

    console.log("Checkout clicked");
  };


  return (
    <main className="lace-page">

      <section className="cart-header">

        <div className="container">

          <span>YOUR SELECTION</span>

          <h1>
            Shopping Cart
          </h1>

          <p>
            Review your selected footwear before checkout.
          </p>

        </div>

      </section>


      <section className="cart-section">

        <div className="container">

          <div className="row g-5">

            {/* CART PRODUCT */}

            <div
              className="col-lg-8"
              data-aos="fade-right"
            >

              <div className="cart-product">

                <div className="cart-image">

                  <img
                    src={loaferImage}
                    alt="Heritage Loafer"
                  />

                </div>


                <div className="cart-details">

                  <span>
                    LOAFERS
                  </span>

                  <h2>
                    Heritage Loafer
                  </h2>

                  <p>
                    Premium everyday footwear with
                    a timeless silhouette.
                  </p>

                  <strong>
                    ₹3,499
                  </strong>


                  <div className="quantity-box">

                    <button onClick={decrease}>
                      −
                    </button>

                    <span>
                      {quantity}
                    </span>

                    <button onClick={increase}>
                      +
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* SUMMARY */}

            <div
              className="col-lg-4"
              data-aos="fade-left"
            >

              <div className="cart-summary">

                <span>
                  ORDER SUMMARY
                </span>

                <h2>
                  Your Total
                </h2>


                <div className="summary-row">

                  <p>
                    Heritage Loafer
                  </p>

                  <strong>
                    ₹{price}
                  </strong>

                </div>


                <div className="summary-row">

                  <p>
                    Quantity
                  </p>

                  <strong>
                    {quantity}
                  </strong>

                </div>


                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{total.toLocaleString("en-IN")}
                  </strong>

                </div>


                <button
                  className="checkout-btn"
                  onClick={checkout}
                >
                  PROCEED TO CHECKOUT
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Cart;