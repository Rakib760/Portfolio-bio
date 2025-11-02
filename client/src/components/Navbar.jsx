import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'project', label: 'PROJECTS' },
    { id: 'blog', label: 'BLOG' }
  ];

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    // Bootstrap collapse events
    const navbar = document.getElementById('navbarNav');
    const handleCollapseShow = () => setIsCollapsed(false);
    const handleCollapseHide = () => setIsCollapsed(true);
    
    if (navbar) {
      navbar.addEventListener('shown.bs.collapse', handleCollapseShow);
      navbar.addEventListener('hidden.bs.collapse', handleCollapseHide);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (navbar) {
        navbar.removeEventListener('shown.bs.collapse', handleCollapseShow);
        navbar.removeEventListener('hidden.bs.collapse', handleCollapseHide);
      }
    };
  }, []);

  const handleNavClick = (itemId) => {
    onNavigate(itemId);
    // Auto-close mobile menu after selection
    if (isMobile && !isCollapsed) {
      const toggle = document.querySelector('.navbar-toggler');
      if (toggle) {
        toggle.click();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ 
      backgroundColor: '#141313',
      padding: '0.5rem 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div className="container">
        {/* Brand/Logo */}
        <span 
          className="navbar-brand fw-bold" 
          style={{ 
            cursor: 'pointer',
            fontSize: '1.8rem',
            padding: '0.5rem 0',
            transition: 'all 0.3s ease'
          }}
          onClick={() => handleNavClick('home')}
          onMouseEnter={(e) => {
            e.target.style.color = '#0d6efd';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
          }}
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
          style={{
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '0.25rem 0.5rem'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ 
            gap: isMobile ? '0' : '0.5rem',
            padding: isMobile ? '1rem 0' : '0'
          }}>
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <span 
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  style={{ 
                    cursor: 'pointer',
                    fontWeight: currentPage === item.id ? '600' : '400',
                    color: '#ffffff',
                    borderBottom: currentPage === item.id ? '2px solid #0d6efd' : 'none',
                    padding: isMobile ? '0.75rem 1rem' : '0.5rem 1rem',
                    margin: isMobile ? '0.125rem 0' : '0 0.125rem',
                    transition: 'all 0.3s ease',
                    borderRadius: isMobile ? '0' : '6px',
                    textAlign: isMobile ? 'center' : 'left',
                    fontSize: isMobile ? '1.1rem' : '1rem',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.target.style.backgroundColor = currentPage === item.id 
                        ? 'rgba(13, 110, 253, 0.25)' 
                        : 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {item.label}
                  
                  {/* Hover effect for desktop */}
                  {!isMobile && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#0d6efd',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)'
                      }}
                      className="nav-link-underline"
                    />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Custom CSS for additional responsive behaviors */}
      <style jsx>{`
        @media (max-width: 576px) {
          .navbar-brand {
            font-size: 1.6rem !important;
          }
          
          .nav-link {
            font-size: 1rem !important;
            padding: 0.875rem 1rem !important;
          }
        }
        
        @media (max-width: 360px) {
          .navbar-brand {
            font-size: 1.4rem !important;
          }
          
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
        
        /* Improve hover effects for desktop */
        @media (min-width: 992px) {
          .nav-link:hover .nav-link-underline {
            width: 80%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;