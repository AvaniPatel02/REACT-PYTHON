import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Customers from "./Customers";
import Contactus from "./Contactus";
import Footer from './Footer';
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero-section">
          <h1>QuickBites</h1>
          <h3>Your Favorite Food, Just a Tap Away!</h3>
          <div>
          <Link to="/about">
            <button className="cta-button">Learn More</button>
          </Link>
          </div>
         
          {/* <p>Call to Action: "Start Ordering Now"</p> */}
        </div>
        </div>
        <div className="container">
          <AboutUs />
      </div>
        <div className="container">
          <Products />
      </div>
      <div className="container">
          <Customers />
      </div>
      <div className="container">
          <Testimonials />
      </div>
      <div className="container">
          <Contactus />
      </div>
      <div className="hello">
          <Footer />
      </div>
    </>
  );
};

export default Home;
