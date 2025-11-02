import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const About = ({ onNavigate }) => {
  return (
    <section className="about-section py-5" style={{ minHeight: '100vh', backgroundColor: '#141313', color: 'white' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header Section with Back Button */}
            <div className="text-center mb-5">
              <button 
                className="btn btn-outline-light mb-4 d-flex align-items-center mx-auto"
                onClick={() => onNavigate('home')}
              >
                <i className="fas fa-arrow-left me-2"></i>
                Back to Home
              </button>
              <h1 className="display-4 fw-bold text-white mb-3">About Me</h1>
              <div className="title-underline mx-auto"></div>
              <p className="lead mt-3">Get to know more about my journey, skills, and passion</p>
            </div>

            {/* Content Section */}
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about-image-container text-center">
                  <img 
                    src="myavatar-removebg-preview.png" 
                    alt="Profile" 
                    className="img-fluid rounded-circle about-profile-img"
                  />
                 
                </div>
              </div>
              
              <div className="col-lg-6">
                <h2 className="fw-bold mb-4">Hi, I'm RSK</h2>
                <p className="mb-4">
                  I'm a passionate web developer and UI/UX designer with over 5 years of experience creating 
                  digital experiences that users love. I specialize in creating responsive, user-friendly 
                  applications with modern technologies.
                </p>
                
                <div className="mb-4">
                  <h4 className="mb-3">My Skills</h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="skill-badge">JavaScript</span>
                    <span className="skill-badge">React</span>
                    <span className="skill-badge">HTML/CSS</span>
                    <span className="skill-badge">Bootstrap</span>
                    <span className="skill-badge">UI/UX Design</span>
                    <span className="skill-badge">Node.js</span>
                    <span className="skill-badge">Responsive Design</span>
                  </div>
                </div>
                
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className="fas fa-paint-brush"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">UI/UX Design</h6>
                        <small>Creating intuitive interfaces</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className="fas fa-code"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Web Development</h6>
                        <small>Building responsive websites</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Mobile First</h6>
                        <small>Priority on mobile experience</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className="fas fa-rocket"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Fast & Optimized</h6>
                        <small>Performance focused solutions</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button className="btn btn-primary me-3">
                    <i className="fas fa-download me-2"></i>
                    Download CV
                  </button>
                  <button 
                    className="btn btn-outline-light"
                    onClick={() => onNavigate('contact')}
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="row mt-5 pt-5">
              <div className="col-12">
                <h3 className="text-center mb-5">My Experience</h3>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>Senior Web Developer</h5>
                      <p className="text-primary mb-1">Tech Solutions Inc. • 2020 - Present</p>
                      <p>Leading frontend development team and creating responsive web applications for clients worldwide.</p>
                    </div>
                    <div className="timeline-date">2020</div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>Web Developer</h5>
                      <p className="text-primary mb-1">Digital Agency • 2018 - 2020</p>
                      <p>Developed and maintained websites for various clients, focusing on user experience and performance.</p>
                    </div>
                    <div className="timeline-date">2018</div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>UI/UX Designer</h5>
                      <p className="text-primary mb-1">Creative Studio • 2016 - 2018</p>
                      <p>Created user interfaces and experiences for web and mobile applications.</p>
                    </div>
                    <div className="timeline-date">2016</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;