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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title animate-fade-in">Get In Touch</h2>
            <p className="section-subtitle animate-fade-in">Let's work together on your next project</p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="contact-card animate-slide-up">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-send"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3 animate-fade-in">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3 animate-fade-in">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 text-center mb-4">
            <div className="contact-info animate-slide-up">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h5>Email</h5>
              <p>rakibshaikh193@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="contact-info animate-slide-up">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h5>Phone</h5>
              <p>+91 7021493541</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="contact-info animate-slide-up">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h5>Location</h5>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;