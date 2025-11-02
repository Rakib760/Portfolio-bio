import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Promo.css'; // Optional CSS file

const Promo = () => {
  return (
    <section className="promo-section py-5" style={{ backgroundColor: '#141313', position: 'relative' }}>
      {/* Decorative elements */}
      <div className="promo-decoration"></div>
      
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="promo-content">
              <h3 className="text-uppercase text-white mb-4 promo-subtitle">
                I LIKE MY WORK TO DO WITH
              </h3>
              <h2 className="display-4 fw-bold text-primary mb-4 promo-title">
                PASSION AND CREATIVITY
              </h2>
              <h4 className="text-white-50 promo-role">
                AS WEB DEVELOPER
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;