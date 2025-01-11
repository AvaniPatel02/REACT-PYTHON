import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="./images1.jpeg" alt="Company Logo" className="footer-logo" />
          <p>Your trusted partner in excellence.</p>
        </div>

      
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="./about">About Us</Link></li>
            <li><Link to="./products">Products</Link></li>
            <li><Link to="./customers">Customers</Link></li>
            <li><Link to="./contactus">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Address:</strong>710- Times Square -I, Thaltej - Shilaj Rd, opp. Rambaug, nr. Ravija Plaza, Thaltej, Ahmedabad, Gujarat 380059</p>
          <p><strong>Email:</strong> <Link href="mailto:info@company.com">info@company.com</Link></p>
          <p><strong>Phone:</strong> <Link href="tel:+1234567890">9876543210</Link></p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons1">
            <Link href=""><i className="fa-brands fa-facebook"></i></Link>
            <Link href=""><i className="fa-brands fa-twitter-square"></i></Link>
            <Link href=""><i className="fa-brands fa-instagram"></i></Link>
            <Link href="www.linkedin.com/in/avanipatel02"><i className="fa-brands fa-linkedin"></i></Link>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
        <div>
          <Link to="C:\Users\Victus\avni-patel-inte\MySite\foodapp\public\Data Protection Policy - Grabsolve.pdf">Privacy Policy</Link>| <Link href="#terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
