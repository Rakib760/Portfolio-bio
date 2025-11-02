import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'project', label: 'PROJECT' },
    { id: 'blog', label: 'BLOG' }
  ];

  // Close mobile menu when item is clicked
  const handleNavClick = (itemId) => {
    onNavigate(itemId);
    if (window.innerWidth < 992) { // LG breakpoint
      const toggle = document.querySelector('.navbar-toggler');
      if (toggle && !isCollapsed) {
        toggle.click(); // Close the navbar
      }
    }
  };

  // Update state when navbar is collapsed/expanded
  useEffect(() => {
    const navbar = document.getElementById('navbarNav');
    const handleCollapse = () => {
      setIsCollapsed(navbar.classList.contains('show'));
    };
    
    navbar.addEventListener('shown.bs.collapse', handleCollapse);
    navbar.addEventListener('hidden.bs.collapse', handleCollapse);
    
    return () => {
      navbar.removeEventListener('shown.bs.collapse', handleCollapse);
      navbar.removeEventListener('hidden.bs.collapse', handleCollapse);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#141313' }}>
      <div className="container-fluid">
        {/* Brand/Logo */}
        <span 
          className="navbar-brand fw-bold" 
          style={{ cursor: 'pointer' }}
          onClick={() => handleNavClick('home')}
        >
          RSK
        </span>
        
        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <span 
                  className={`nav-link text-white ${currentPage === item.id ? 'active' : ''}`}
                  style={{ 
                    cursor: 'pointer',
                    fontWeight: currentPage === item.id ? 'bold' : 'normal',
                    borderBottom: currentPage === item.id ? '2px solid #0d6efd' : 'none',
                    padding: '0.5rem 1rem',
                    margin: '0 0.25rem',
                    transition: 'all 0.3s ease',
                    borderRadius: '4px'
                  }}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = currentPage === item.id ? 'rgba(13, 110, 253, 0.2)' : 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;