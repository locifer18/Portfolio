import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      field: "Computer Science",
      institution: "I.K Gujral Punjab Technical University",
      year: "2023 - 2026",
      grade: "CGPA: 8.5/10",
      color: "#6366f1"
    },
    {
      degree: "Higher Secondary",
      field: "Computer",
      institution: "New Flower Public School",
      year: "2018 - 2020",
      grade: "Percentage: 92%",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="education" className="section">
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
            data-text="EDUCATION"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900'
            }}
          >
            EDUCATION
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                className="neon-card"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{
                  padding: '40px',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(45deg, ${edu.color}, transparent)`,
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  opacity: 0.3
                }} />
                
                <motion.h3
                  className="holographic-text"
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                    textShadow: `0 0 20px ${edu.color}`
                  }}
                >
                  {edu.degree}
                </motion.h3>
                
                <p style={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  {edu.field}
                </p>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '15px'
                }}>
                  {edu.institution}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px'
                }}>
                  <span style={{
                    color: edu.color,
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {edu.year}
                  </span>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;