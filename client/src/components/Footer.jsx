import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();




  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      {/* Background Elements */}
      <div className="footer-background">
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
        <div className="grid-pattern"></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="container position-relative">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-brand">
                <div className="brand-header">
                  <div className="brand-logo">
                    <div className="logo-glow"></div>
                    <span className="logo-text">RS</span>
                  </div>
                  <h3 className="brand-name">Rakib Shaikh</h3>
                </div>
                <p className="brand-tagline">Full Stack Developer & UI/UX Designer</p>
                <p className="brand-description">
                  Creating beautiful and functional web experiences with passion and creativity.
                  Transforming ideas into digital reality.
                </p>



              </div>
            </div>



            {/* Social Links */}
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="footer-title">Connect With Me</h5>
              <div className="social-links">
                <a href="https://github.com/Rakib760" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">

                    <div className="icon-glow"></div>
                  </div>
                  <span className="social-text"><i className="fab fa-github"></i></span>
                  <div className="link-arrow">

                  </div>
                </a>
                <a href="https://www.linkedin.com/in/rakhibulislam-jahangir-shaikh-370352327/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">

                    <div className="icon-glow"></div>
                  </div>
                  <span className="social-text"> <i className="fab fa-linkedin"></i></span>
                  <div className="link-arrow">

                  </div>
                </a>
                <a href="mailto:rakibshaikh193@gmail.com" className="social-link">
                  <div className="social-icon">

                    <div className="icon-glow"></div>
                  </div>
                  <span className="social-text"><i className="fas fa-envelope"></i></span>
                  <div className="link-arrow">

                  </div>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Mumbai, India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+917021493541" className="contact-value">+91 7021493541</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:rakibshaikh193@gmail.com" className="contact-value">rakibshaikh193@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="availability-status">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-ornament"></div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright">
                <p>&copy; {currentYear} <span className="highlight">Rakib Shaikh</span>. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-actions">
                <div className="footer-credits">
                  <p>Made with <span className="heart">❤️</span> by Rakib Shaikh</p>
                </div>
                <button className="btn-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="floating-cta">
        <div className="cta-bubble">
          <div className="bubble-content">
            <span>Let's work together!</span>
          </div>
          <div className="bubble-tail"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;