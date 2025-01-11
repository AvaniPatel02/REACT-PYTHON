import React, { useState } from 'react';
import './Contactus.css';
import { Link } from 'react-router-dom';

const Contactus = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxASXNpLMwa_ZeRTRR7Kgo1u-ETCa0jPPt54eHEEmMfvs3WRljZtlF4ANlIxLo9EMjM/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' 
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ Name: '', Email: '', Message: '' }); 
      } else {
        const errorResponse = await response.text();
      alert(`Error: ${errorResponse.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form. Please check your internet connection.');
    }
  };

  return (
    <div id="contect">
      <div className="mov">
        <div className="row">
          <div className="contect-left">
            <h1 className="sub-title">Contact Us</h1>
            <p><i className="fa-solid fa-paper-plane"></i> contact@example.com</p>
            <p><i className="fa-solid fa-square-phone"></i> 9876543210</p>
            <div className="social-icons">
              <Link to=""><i className="fa-brands fa-facebook"></i></Link>
              <Link to=""><i className="fa-brands fa-twitter-square"></i></Link>
              <Link to=""><i className="fa-brands fa-instagram"></i></Link>
              <Link to="https://www.linkedin.com/in/avanipatel02"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
          <div className="contect-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Your email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={formData.Message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
