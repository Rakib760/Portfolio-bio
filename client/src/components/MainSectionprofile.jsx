import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MainSectionprofile.css';

const MainSectionprofile = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#141313', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <div className="circles-container">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
        <div className="floating-particle particle-4"></div>
      </div>
      
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100 py-5">
          {/* Text Content - Left Side */}
          <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-white mb-3 animated-text">
              HI, I AM WEB DEVELOPER
            </h1>
            <h2 className="display-5 text-primary mb-0 typewriter-text">
              UI/UX DESIGNER
            </h2>
           
          </div>
          
          {/* Profile Photo - Right Side with Circle Container */}
          <div className="col-lg-6 text-center position-relative">
            <div className="profile-container">
              <div className="profile-glow"></div>
              <img 
                src="myavatar-removebg-preview.png" 
                alt="Profile" 
                className="profile-img rounded-circle"
              />
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSectionprofile;