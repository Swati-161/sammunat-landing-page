import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Custom CRM App', users: '8k+', tags: ['CRM', 'Automation'], desc: 'Tailored enterprise solution for lead tracking and workflow automation.' },
    { name: 'E-commerce Platform', users: '15k+', tags: ['E-commerce', 'Retail'], desc: 'High-performance marketplace with integrated AI-driven recommendations.' },
    { name: 'Mobile Banking System', users: '5k+', tags: ['Finance', 'App Dev'], desc: 'Secure, biometric-enabled banking app with real-time fraud detection.' },
  ];

  return (
    <section className="projects-section">
      <div style={{ textAlign: 'left', marginBottom: '50px' }}>
        <h2 className="section-title">Our Recent <span>Projects</span></h2>
        <p className="section-subtitle">Explore some of our successfully implemented systems across various industries worldwide.</p>
      </div>

      <div className="grid-3">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className="user-badge">{project.users} Users</span>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="tag-container">
              {project.tags.map((tag, tIndex) => (
                <span key={tIndex} className="tag">{tag}</span>
              ))}
            </div>
            <button className="btn-secondary" style={{ width: '100%', marginTop: '20px', padding: '10px' }}>
              Case Study
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;