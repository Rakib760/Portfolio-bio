import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="particles-container">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="container position-relative">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="contact-header">
              <div className="header-icon animate-pulse">
                <i className="fas fa-paper-plane"></i>
                <div className="icon-glow"></div>
              </div>
              <h2 className="section-title glitch-text" data-text="Get In Touch">
                Get In Touch
              </h2>
              <p className="section-subtitle">
                Let's create something <span className="highlight">amazing</span> together
              </p>
              <div className="title-underline"></div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="contact-wrapper">
              {/* Contact Form */}
              <div className="contact-form-container animate-slide-up">
                <div className="form-header">
                  <h3 className="form-title">Send Me a Message</h3>
                  <p className="form-subtitle">I'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group floating-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={`form-control ${activeField === 'name' ? 'active' : ''} ${formData.name ? 'has-value' : ''}`}
                      required
                    />
                    <label className="floating-label">Your Name</label>
                    <div className="input-underline">
                      <div className="underline-active"></div>
                    </div>
                    <div className="input-icon">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>

                  <div className="form-group floating-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`form-control ${activeField === 'email' ? 'active' : ''} ${formData.email ? 'has-value' : ''}`}
                      required
                    />
                    <label className="floating-label">Your Email</label>
                    <div className="input-underline">
                      <div className="underline-active"></div>
                    </div>
                    <div className="input-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>

                  <div className="form-group floating-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={`form-control ${activeField === 'message' ? 'active' : ''} ${formData.message ? 'has-value' : ''}`}
                      rows="5"
                      required
                    ></textarea>
                    <label className="floating-label">Your Message</label>
                    <div className="input-underline">
                      <div className="underline-active"></div>
                    </div>
                    <div className="input-icon">
                      <i className="fas fa-comment"></i>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-send-message ${isSubmitting ? 'sending' : ''}`}
                    disabled={isSubmitting}
                  >
                    <span className="btn-content">
                      {isSubmitting ? (
                        <>
                          <div className="send-spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="btn-shine"></div>
                    <div className="btn-particles">
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                    </div>
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="status-message success animate-fade-in">
                      <div className="status-icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="status-content">
                        <h5>Message Sent Successfully!</h5>
                        <p>I'll get back to you within 24 hours. Thank you!</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="status-message error animate-fade-in">
                      <div className="status-icon">
                        <i className="fas fa-exclamation-circle"></i>
                      </div>
                      <div className="status-content">
                        <h5>Something Went Wrong</h5>
                        <p>Please try again or contact me directly via email.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-container animate-slide-up">
                <div className="info-header">
                  <h3 className="info-title">Let's Connect</h3>
                  <p className="info-subtitle">Other ways to reach me</p>
                </div>

                <div className="contact-info-grid">
                  <div className="info-card email-card">
                    <div className="card-glow"></div>
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                      <div className="icon-pulse"></div>
                    </div>
                    <div className="info-content">
                      <h5>Email</h5>
                      <p>rakibshaikh193@gmail.com</p>
                      <a href="mailto:rakibshaikh193@gmail.com" className="info-link">
                        Send Email <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="info-card phone-card">
                    <div className="card-glow"></div>
                    <div className="info-icon">
                      <i className="fas fa-phone"></i>
                      <div className="icon-pulse"></div>
                    </div>
                    <div className="info-content">
                      <h5>Phone</h5>
                      <p>+91 7021493541</p>
                      <a href="tel:+917021493541" className="info-link">
                        Call Now <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="info-card location-card">
                    <div className="card-glow"></div>
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="icon-pulse"></div>
                    </div>
                    <div className="info-content">
                      <h5>Location</h5>
                      <p>Mumbai, India</p>
                      <span className="info-status">
                        <span className="status-dot"></span>
                        Available for work
                      </span>
                    </div>
                  </div>

                  <div className="info-card social-card">
                    <div className="card-glow"></div>
                    <div className="info-icon">
                      <i className="fas fa-share-alt"></i>
                      <div className="icon-pulse"></div>
                    </div>
                    <div className="info-content">
                      <h5>Social</h5>
                      <div className="social-links">
                        <a href="https://github.com/Rakib760" className="social-link">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rakhibulislam-jahangir-shaikh-370352327/" className="social-link">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:rakibshaikh193@gmail.com" className="social-link">
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className="contact-cta animate-fade-in">
              <h4>Ready to Start Your Project?</h4>
              <p>Let's discuss how we can bring your ideas to life</p>
              <div className="cta-buttons">
                <a href="mailto:rakibshaikh193@gmail.com" className="btn btn-cta-primary">
                  <i className="fas fa-rocket me-2"></i>
                  Start a Project
                </a>
                <a href="tel:+917021493541" className="btn btn-cta-secondary">
                  <i className="fas fa-phone me-2"></i>
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;