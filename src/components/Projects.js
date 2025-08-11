import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with React, Node.js, Express.js and MongoDB. Features payment processing and admin-user dashboard.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Braintree'],
      github: 'https://github.com/locifer18/mern-ecommerce-project',
      live: 'https://luxury-begonia-e4acf2.netlify.app/',
      pic: <img src="/e-com.png" style={{ width: '100%', height: '100%' }} />
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'Real-time chat app with AI integration, WebSocket connections, and modern UI design.',
      technologies: ['React', 'Firebase', 'Bootsrap'],
      github: 'https://github.com/locifer18/Real-Time-Chat-Application',
      live: 'https://reactchat-137a2.web.app/',
      pic: <img src="/chat.png" style={{ width: '100%', height: '100%' }} />
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="glitch-effect holographic-text"
            data-text="PROJECTS"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900'
            }}
          >
            PROJECTS
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
                className="project-card-3d"
                whileHover={{ scale: 1.05 }}
              >
                <div className="project-image-3d">
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: 'white',
                    fontWeight: '900'
                  }}>
                    {project.pic}
                  </div>
                </div>

                <div style={{ padding: '30px' }}>
                  <h3 className="holographic-text" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '1rem'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '25px'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          background: 'rgba(99, 102, 241, 0.15)',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          color: '#6366f1',
                          padding: '5px 12px',
                          borderRadius: '15px',
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-futuristic"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        padding: '12px 20px',
                        fontSize: '0.9rem',
                        background: 'linear-gradient(45deg, #8b5cf6, #a855f7)'
                      }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-futuristic"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        padding: '12px 20px',
                        fontSize: '0.9rem'
                      }}
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;