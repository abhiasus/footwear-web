import React from "react";

function Contact() {

  const submitForm = (e) => {

    e.preventDefault();

    alert("Thank you. Your message has been received.");

    console.log("Contact form submitted");
  };


  return (
    <main className="lace-page">

      {/* HEADER */}

      <section className="contact-header">

        <div className="container">

          <span>GET IN TOUCH</span>

          <h1>
            Let's talk
            <br />
            about footwear.
          </h1>

          <p>
            Have a question about our collection?
            We are happy to help.
          </p>

        </div>

      </section>


      {/* CONTACT */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* DETAILS */}

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <div className="contact-info">

                <span>
                  CONTACT DETAILS
                </span>

                <h2>
                  We're here to help.
                </h2>


                <div className="contact-item">

                  <small>
                    PHONE
                  </small>

                  <p>
                    0000000
                  </p>

                </div>


                <div className="contact-item">

                  <small>
                    EMAIL
                  </small>

                  <p>
                    hello@lacecraft.com
                  </p>

                </div>


                <div className="contact-item">

                  <small>
                    WORKING HOURS
                  </small>

                  <p>
                    Monday - Saturday
                    <br />
                    10:00 AM - 7:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <div className="contact-form">

                <h2>
                  Send us a message
                </h2>

                <form onSubmit={submitForm}>

                  <div className="row g-4">

                    <div className="col-md-6">

                      <label>
                        Your Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="col-md-6">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="How can we help?"
                        required
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Message
                      </label>

                      <textarea
                        rows="6"
                        placeholder="Write your message..."
                        required
                      ></textarea>

                    </div>


                    <div className="col-12">

                      <button type="submit">
                        SEND MESSAGE
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;