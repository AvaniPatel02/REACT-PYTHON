import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about" >
      <h1>About Us</h1>
      <h3>Welcome to QuickBites, where innovation meets excellence.</h3>
      <div
        id="carouselExampleDark"
        className="carousel carousel-light slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="">
            <img src="/pic10.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="pic1">Our History</h5>
              <p className="pic1-h">
                Founded in 2010, QuickBites started as a small team with a big
                vision. Over the years, we have grown into a leading industry
                player, known for our commitment to quality and innovation.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="">
            <img src="/pic8.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="pic2">Our Vision</h5>
              <p className="pic2-h">
                To be the world’s most customer-centric company, where customers
                can find and discover anything they want..
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/pic11.jpeg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="pic3">Our Mission</h5>
              <p className="pic3-h">
                To provide top-quality products and services that improve lives
                and foster sustainable development.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/pic9.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="pic4-h">Our Values</h5>
              <ul>
                <li>
                  Integrity: We act with honesty and integrity, not compromising
                  the truth.
                </li>
                <li>
                  Innovation: Always striving to improve and bring cutting-edge
                  solutions.
                </li>
                <li>
                  Customer Focus: We are dedicated to meeting and exceeding
                  customer expectations.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
