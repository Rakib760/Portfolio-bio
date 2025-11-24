import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

const Projects = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "HealthMed-AI",
      category: "web",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format",
      description: "A full-stack healthcare web application that leverages AI to provide medical assistance and health monitoring.",
      technologies: ["MERN Stack", "Bootstrap", "Tensorflow.js", "AI/ML"],
      liveLink: "https://rakib760.github.io/HealthMed/",
      githubLink: "https://github.com/Rakib760/HealthMed"
    },
    {
      id: 2,
      title: "Brand-Analyzer",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      description: "A web application that analyzes brand performance using data visualization and analytics tools.",
      technologies: ["MERN Stack", "Bootstrap", "Chart.js", "Data Analytics"],
      liveLink: "https://rakib760.github.io/AnalyzerPro/",
      githubLink: "https://github.com/Rakib760/AnalyzerPro"
    },
    {
      id: 3,
      title: "Social Platform AI",
      category: "web",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop&auto=format",
      description: "A social media platform enhanced with AI features for content recommendation and user engagement.",
      technologies: ["MERN Stack", "Hugging Face API", "Bootstrap", "AI Integration"],
      liveLink: "https://rakib760.github.io/Social-Platform-AI/",
      githubLink: "https://github.com/Rakib760/Social-Platform-AI"
    },
    {
      id: 4,
      title: "ToolEditor-PDF",
      category: "ui",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format",
      description: "A professional PDF editor tool with a user-friendly interface for editing and annotating PDF documents.",
      technologies: ["MERN Stack", "PDF.js", "React", "Node.js"],
      liveLink: "https://rakib760.github.io/tool-pro-editor/",
      githubLink: "https://github.com/Rakib760/tool-pro-editor"
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
      technologies: ["MERN Stack", "Stripe API", "Redux", "JWT"],
      liveLink: "https://rakib760.github.io/Ecommerce-Platform/",
      githubLink: "https://github.com/Rakib760/Ecommerce-Platform"
    },
    {
      id: 6,
      title: "Task Management App",
      category: "web",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
      description: "Productivity application for task management with real-time collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Real-time DB"],
      liveLink: "https://rakib760.github.io/TaskManager/",
      githubLink: "https://github.com/Rakib760/TaskManager"
    },
    {
      id: 7,
      title: "Weather Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format",
      description: "Real-time weather forecasting application with interactive maps and alerts.",
      technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
      liveLink: "https://rakib760.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/Rakib760/Weather-Dashboard"
    },
    {
      id: 8,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
      description: "Modern portfolio website with smooth animations and responsive design.",
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      liveLink: "https://rakib760.github.io/portfolio/",
      githubLink: "https://github.com/Rakib760/portfolio"
    },
    {
      id: 9,
      title: "Chat Application",
      category: "web",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop&auto=format",
      description: "Real-time chat application with multiple rooms and file sharing capabilities.",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
      liveLink: "https://rakib760.github.io/Chat-App/",
      githubLink: "https://github.com/Rakib760/Chat-App"
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
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                        title="Live Demo"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                        title="View Code"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="project-category-badge">
                    {project.category.toUpperCase()}
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
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm me-2 mb-2"
                    >
                      <i className="fas fa-external-link-alt me-1"></i>
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-primary btn-sm mb-2"
                    >
                      <i className="fab fa-github me-1"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <div className="empty-state animate-fade-in">
                <i className="fas fa-folder-open fa-3x mb-3 text-muted"></i>
                <h4>No projects found</h4>
                <p>No projects match the selected filter. Try a different category.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setFilter('all')}
                >
                  Show All Projects
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="row justify-content-center mt-4 mt-lg-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="cta-section animate-fade-in">
              <h3>Like What You See?</h3>
              <p>I'm always open to discussing new projects and opportunities</p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => onNavigate('contact')}
              >
                <i className="fas fa-paper-plane me-2"></i>
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
