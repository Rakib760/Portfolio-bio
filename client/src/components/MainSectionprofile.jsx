import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MainSectionprofile.css';
import avatarImage from './Avatar.png';

const MainSectionprofile = () => {




  return (
    <section className="main-hero-section" style={{ backgroundColor: '#141313', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Enhanced Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div className="particle-field">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>

        <div className="gradient-orbs">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="animated-grid"></div>
      </div>

      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100 min-vh-100">
          {/* Text Content - Enhanced Left Side */}
          <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0 position-relative z-3">
            {/* Animated Welcome Badge */}
            <div className="welcome-badge animate-pulse">
              <span className="pulse-dot"></span>
              Welcome to my portfolio
            </div>

            {/* Main Headline with Glitch Effect */}
            <div className="headline-container">
              <h1 className="main-headline glitch-text" data-text="HI, I'M RAKIB SHAIKH">
                HI, I'M <span className="text-gradient">RAKIB SHAIKH</span>
              </h1>

              {/* Animated Title */}
              <div className="title-container">
                <h2 className="profession-title typewriter-text">
                  FULL STACK DEVELOPER
                </h2>
                <div className="title-underline"></div>
              </div>
            </div>

            {/* Description with Animation */}
            <div className="description-wrapper">
              <p className="hero-description">
                I create <span className="highlight">digital experiences</span> that blend
                <span className="highlight"> innovative design</span> with
                <span className="highlight"> cutting-edge technology</span>.
                Passionate about building responsive, user-friendly applications.
              </p>
            </div>

            {/* Stats Counter */}


            {/* CTA Buttons with Enhanced Effects */}


            {/* Social Links */}
            <div className="social-links-hero">
              <a href="https://github.com/Rakib760" className="social-link-hero" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rakhibulislam-jahangir-shaikh-370352327/" className="social-link-hero" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:rakibshaikh193@gmail.com" className="social-link-hero" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Section - Right Side */}
          <div className="col-lg-6 text-center position-relative z-3">
            <div className="profile-hero-container">
              {/* Multi-layer Glow Effects */}
              <div className="glow-layers">
                <div className="glow-layer layer-1"></div>
                <div className="glow-layer layer-2"></div>
                <div className="glow-layer layer-3"></div>
              </div>

              {/* Profile Image with Rotating Glowing Border */}
              <div className="profile-image-wrapper">
                <div className="rotating-glow-border">
                  <div className="profile-image-container">
                    <img
                      src={avatarImage}
                      alt="Rakib Shaikh - Full Stack Developer"
                      className="profile-hero-img"
                    />



                  </div>
                </div>
              </div>



            </div>

            {/* Current Status */}
            <div className="current-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Background Noise Texture */}
      <div className="noise-texture"></div>
    </section>
  );
};

export default MainSectionprofile;
