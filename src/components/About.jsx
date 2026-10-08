import React from "react";

function About() {
  return (
    <main className="lace-page">

      {/* TITLE */}

      <section className="about-header">

        <div className="container">

          <span>ABOUT LACECRAFT</span>

          <h1>
            Made for people
            <br />
            who notice the details.
          </h1>

        </div>

      </section>


      {/* STORY */}

      <section className="about-story">

        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <span>
                OUR STORY
              </span>

              <h2>
                Simple idea.
                <br />
                Beautiful footwear.
              </h2>

            </div>


            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <p>
                LaceCraft was created around a simple
                belief: footwear should feel as good as
                it looks.
              </p>

              <p>
                We bring together classic silhouettes,
                contemporary designs and comfortable
                materials to create footwear that fits
                naturally into everyday life.
              </p>

              <p>
                Every collection is selected with attention
                to design, versatility and long-term style.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span>
                WHAT WE VALUE
              </span>

              <h2>
                Details make the difference.
              </h2>

            </div>

          </div>


          <div className="row g-4">

            <div
              className="col-lg-4"
              data-aos="fade-up"
            >

              <div className="value-card">

                <span>01</span>

                <h3>
                  Craft
                </h3>

                <p>
                  We choose designs that balance
                  appearance, comfort and everyday use.
                </p>

              </div>

            </div>


            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="value-card">

                <span>02</span>

                <h3>
                  Character
                </h3>

                <p>
                  Our collections are designed to help
                  every outfit feel distinctly yours.
                </p>

              </div>

            </div>


            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="value-card">

                <span>03</span>

                <h3>
                  Comfort
                </h3>

                <p>
                  Beautiful footwear should also be
                  comfortable enough for the entire day.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;