import React from 'react';
import './Footer.css';
import Logo from "../Images/logo.jpg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="logo">
            <img src={Logo} alt="Company Logo"/>
          </div>
          <div className="contact-details">
            <h3>Contact Us</h3>
            <p>Your trusted partner for quality services. We are here to help you 24/7.</p>
            <ul>
              <li><i className="fas fa-phone"></i>+917654690093</li>
              <li><i className="fas fa-envelope"></i> musclemind@gmail.com</li>
            
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="./Contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-icons">
            <h3>Follow Us</h3>
            <div className="icons-row">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <hr/>
        <p>Copyright Reserved 2024</p>
      </footer>
    </>
  );
}
