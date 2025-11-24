import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Promo.css';

const Promo = () => {
  return (
    <section className="promo-section py-5" style={{ backgroundColor: '#141313', position: 'relative', overflow: 'hidden' }}>
      {/* Enhanced Background Elements */}
      <div className="promo-background">
        <div className="floating-geometrics">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="geometric-shape shape-4"></div>
          <div className="geometric-shape shape-5"></div>
        </div>

        <div className="sparkle-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`sparkle sparkle-${i + 1}`}></div>
          ))}
        </div>

        <div className="gradient-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        <div className="binary-matrix"></div>
      </div>

      {/* Animated Border */}
      <div className="promo-border-top"></div>
      <div className="promo-border-bottom"></div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="promo-content">
              {/* Animated Icon */}
              <div className="promo-icon mb-4">
                <div className="icon-wrapper">
                  <i className="fas fa-code"></i>
                  <div className="icon-glow"></div>
                </div>
              </div>

              {/* Main Content */}
              <h3 className="text-uppercase text-white mb-3 promo-subtitle animate-typing">
                I LIKE MY WORK TO DO WITH
              </h3>

              <h2 className="display-3 fw-bold mb-4 promo-title glitch-text" data-text="PASSION AND CREATIVITY">
                PASSION AND CREATIVITY
              </h2>

              <h4 className="text-gradient mb-5 promo-role">
                AS WEB DEVELOPER
              </h4>







            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-tech-icons">
        <div className="tech-float-icon" data-tooltip="React">
          <i className="fab fa-react"></i>
        </div>
        <div className="tech-float-icon" data-tooltip="JavaScript">
          <i className="fab fa-js"></i>
        </div>
        <div className="tech-float-icon" data-tooltip="Node.js">
          <i className="fab fa-node"></i>
        </div>
        <div className="tech-float-icon" data-tooltip="Database">
          <i className="fas fa-database"></i>
        </div>
      </div>
    </section>
  );
};

export default Promo;