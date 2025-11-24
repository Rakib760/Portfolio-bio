import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import avatarImage from './Avatar.png';

const About = ({ onNavigate }) => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = '/Resume-Rakib Shaikh.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Resume-Rakib Shaikh.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                    src={avatarImage}
                    alt="Profile"
                    className="img-fluid rounded-circle about-profile-img"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <h2 className="fw-bold mb-4">Hi, I'm Rakib Shaikh</h2>
                <p className="mb-4">
                  I am a passionate MERN Stack Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in JavaScript and expertise in Bootstrap, I bring designs to life with clean and efficient code. Beyond coding, I have diverse skills as an Electrician and Goldsmith, which fuel my creativity and attention to detail. My journey is driven by a love for technology and a commitment to delivering exceptional user experiences.
                </p>

                <div className="mb-4">
                  <h4 className="mb-3">My Skills</h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="skill-badge">MERN Stack , </span>
                    <span className="skill-badge">Javascript , </span>
                    <span className="skill-badge">Bootstrap , </span>
                    <span className="skill-badge">Electrician , </span>
                    <span className="skill-badge">Goldsmith , </span>
                    <span className="skill-badge">Drawing Mastered.</span>
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

                {/* Responsive Button Group */}
                <div className="mt-4">
                  <div className="row g-3">
                    <div className="col-sm-6 col-12">
                      <button 
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                        onClick={handleDownloadCV}
                      >
                        <i className="fas fa-download me-2"></i>
                        Download CV
                      </button>
                    </div>
                    <div className="col-sm-6 col-12">
                      <button
                        className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center"
                        onClick={() => onNavigate('contact')}
                      >
                        <i className="fas fa-envelope me-2"></i>
                        Contact Me
                      </button>
                    </div>
                  </div>
                  
                  {/* Alternative: Stacked buttons on extra small screens */}
                  <div className="d-block d-sm-none mt-2 text-center">
                    <small className="text-muted">Available for freelance work</small>
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