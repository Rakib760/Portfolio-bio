import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

const Projects = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 2,
      title: "Weather App",
      category: "web",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      description: "Real-time weather application with beautiful UI and animations",
      technologies: ["React", "API", "CSS3", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 3,
      title: "Task Manager",
      category: "web",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Productivity app with drag-and-drop functionality and real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "ui",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
      description: "Modern dashboard design with analytics and user engagement metrics",
      technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Secure mobile banking application with biometric authentication",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description: "Modern portfolio website with smooth animations and responsive design",
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Navigation */}
        <div className="row">
          <div className="col-12">
            <button 
              className="btn btn-outline-secondary mb-4"
              onClick={() => onNavigate('home')}
            >
              ← Back to Home
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <h2 className="section-title animate-fade-in">My Projects</h2>
            <p className="section-subtitle animate-fade-in">
              Here are some of my recent works that showcase my skills and creativity
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row justify-content-center mb-4 mb-lg-5">
          <div className="col-12">
            <div className="filter-buttons animate-slide-up d-flex flex-wrap justify-content-center gap-2">
              <button 
                className={`btn filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`btn filter-btn ${filter === 'web' ? 'active' : ''}`}
                onClick={() => setFilter('web')}
              >
                Web Development
              </button>
              <button 
                className={`btn filter-btn ${filter === 'mobile' ? 'active' : ''}`}
                onClick={() => setFilter('mobile')}
              >
                Mobile Apps
              </button>
              <button 
                className={`btn filter-btn ${filter === 'ui' ? 'active' : ''}`}
                onClick={() => setFilter('ui')}
              >
                UI/UX Design
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div 
                className="project-card animate-slide-up h-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-eye"></i>
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content d-flex flex-column">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description flex-grow-1">{project.description}</p>
                  
                  <div className="project-technologies mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2 mb-2">
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm mb-2">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-4 mt-lg-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="cta-section animate-fade-in">
              <h3>Like What You See?</h3>
              <p>I'm always open to discussing new projects and opportunities</p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => onNavigate('home')}
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;