import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <h3 className="brand-name">Rakib Shaikh</h3>
              <p className="brand-tagline">Web Developer & UI/UX Designer</p>
              <p className="brand-description">
                Creating beautiful and functional web experiences with passion and creativity.
              </p>
            </div>
          </div>

         

          {/* Social Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Connect With Me</h5>
            <div className="social-links">
              <a href="https://github.com/Rakib760" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/rakhibulislam-jahangir-shaikh-370352327/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              
              <a href="mailto:rakibshaikh193@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Get In Touch</h5>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Mumbai, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 7021493541</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>rakibshaikh193@gmail</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <div className="copyright">
                <p>&copy; {currentYear} Rakib Shaikh. All rights reserved.</p>
              </div>
              <div className="footer-credits">
                <p>Made by Rakib Shaikh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
