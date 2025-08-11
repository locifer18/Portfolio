import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaRocket, FaCode, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "ANSH KANDA";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ textAlign: 'center' }}
        >
          {/* 3D Holographic Avatar */}
          <motion.div
            initial={{ rotateY: -180, scale: 0 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 2, type: "spring" }}
            style={{
              width: '300px',
              height: '300px',
              margin: '0 auto 60px',
              position: 'relative',
              transformStyle: 'preserve-3d'
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7, #6366f1)',
              padding: '6px',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #000 20%, #1a0033 60%, #000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                position: 'relative',
                overflow: 'hidden'
              }}>

                <img
                  src="/a1.png"
                  alt="Avatar"
                  className="avatar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Glitch Name Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="glitch-effect holographic-text"
            data-text={text}
            style={{ marginBottom: '30px' }}
          >
            {text}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="neon-card"
            style={{
              display: 'inline-block',
              marginBottom: '50px',
              background: 'rgba(0, 0, 0, 0.9)',
              transform: 'perspective(1000px) rotateX(10deg)'
            }}
          >
            <h2 className="holographic-text" style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: '700',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Full Stack Developer
            </h2>
            <div style={{
              height: '4px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)',
              marginTop: '15px',
              borderRadius: '2px',
              animation: 'holographicShift 2s infinite'
            }} />
          </motion.div>

          {/* Description with typewriter effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
              fontSize: '1.4rem',
              maxWidth: '800px',
              margin: '0 auto 60px',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '400'
            }}
          >
            Crafting <span className="holographic-text" style={{ fontWeight: '700' }}>extraordinary digital experiences</span> that
            push the boundaries of technology. Specializing in React, Node.js, and cutting-edge solutions
            that transform ideas into reality.
          </motion.p>

          {/* Futuristic Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              marginBottom: '80px',
              flexWrap: 'wrap'
            }}
          >
            <motion.a
              href="#projects"
              className="btn-futuristic"
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Explore Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-futuristic"
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(45deg, #8b5cf6, #a855f7)',
              }}
            >
              <FaCode />
              Hire Me Now
            </motion.a>
          </motion.div>

          {/* 3D Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            style={{
              display: 'flex',
              gap: '50px',
              justifyContent: 'center'
            }}
          >
            {[
              { icon: FaGithub, href: 'https://github.com/locifer18', color: '#6366f1' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/ansh-kanda-75995a244', color: '#8b5cf6' },
              { icon: FaDownload, href: '/resume.pdf', color: '#8b5cf6', download: true },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.download ? '_self' : '_blank'}
                rel="noopener noreferrer"
                download={social.download ? 'Ansh_Resume.pdf' : undefined}
                whileHover={{
                  scale: 1.5,
                  rotateY: 360,
                  rotateX: 180,
                  filter: 'brightness(1.5)'
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  fontSize: '3rem',
                  color: social.color,
                  filter: `drop-shadow(0 0 30px ${social.color})`,
                  transition: 'all 0.3s ease',
                  transformStyle: 'preserve-3d'
                }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '2px',
                height: '60px',
                background: 'linear-gradient(to bottom, #6366f1, transparent)',
                margin: '0 auto',
                borderRadius: '1px'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
