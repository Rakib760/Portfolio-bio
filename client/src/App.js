import React, { useState } from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import MainSectionprofile from './components/MainSectionprofile';
import Promo from './components/Promo';
import Skills from './components/SkillsGlobe';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Project';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'project':
        return <Projects onNavigate={setCurrentPage} />;
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <MainSectionprofile />
            <Promo />
            <Skills />
            <Contact />
          </>
        );
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div style={{ paddingTop: '80px' }}> {/* Add padding to account for fixed navbar */}
        {renderPage()}
      </div>
      <Footer />
    </>
  );
}

export default App;