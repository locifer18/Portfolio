import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section">
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
            data-text="ABOUT ME"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900'
            }}
          >
            ABOUT ME
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="neon-card"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="holographic-text" style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '30px'
              }}>
                My Journey
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginBottom: '25px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                I’m a passionate learner and aspiring developer who thrives on curiosity and creativity. My journey began with exploring code through small personal experiments, and every line I write fuels my desire to build something meaningful.              </p>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                I’ve invested hundreds of hours into mastering React, JavaScript, and modern web development, crafting personal projects that challenge me to grow. My goal is simple — to transform ideas into engaging, user-focused experiences while continuously expanding my skill set.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ delay: 0.7, duration: 1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px'
              }}
            >
              {[
                { number: '12+', label: 'Tech Skills', color: '#6366f1' },
                { number: '500+', label: 'Coding Hours', color: '#8b5cf6' },
                { number: '5+', label: 'Personal Projects', color: '#a855f7' },
                { number: '3', label: 'Certifications', color: '#6366f1' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                  className="neon-card"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  style={{
                    textAlign: 'center',
                    padding: '30px 20px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="holographic-text" style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    marginBottom: '10px',
                    textShadow: `0 0 20px ${stat.color}`
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;