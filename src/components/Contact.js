import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('user_def456'); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name === 'from_name' ? 'name' : name === 'from_email' ? 'email' : name;
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if EmailJS is properly configured
    const serviceId = 'service_1xyo4tc'; 
    const templateId = 'template_lnmp83w'; // Replace with your actual template ID
    const publicKey = 'fCxID7F0ht4oiMJGa'; // Replace with your actual public key
    
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      alert('EmailJS is not configured yet. Please check EMAILJS_SETUP.md for setup instructions.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please check your EmailJS configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
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
            data-text="CONTACT"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900'
            }}
          >
            CONTACT
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px'
          }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="neon-card" style={{ marginBottom: '30px' }}>
                <h3 className="holographic-text" style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '20px'
                }}>
                  Get In Touch
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '30px'
                }}>
                  Ready to build something amazing together? Let's connect and 
                  turn your ideas into extraordinary digital experiences.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { icon: FaEnvelope, label: 'Email', value: 'anshkanda08@gmail.com' },
                    { icon: FaPhone, label: 'Phone', value: '+91 62688 44871' },
                    { icon: FaMapMarkerAlt, label: 'Location', value: 'Amritsar, IN' }
                  ].map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        padding: '15px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: '15px'
                      }}
                    >
                      <info.icon style={{ fontSize: '1.5rem', color: '#6366f1' }} />
                      <div>
                        <div style={{ fontWeight: '600', marginBottom: '5px' }}>
                          {info.label}
                        </div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                          {info.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'center'
                }}
              >
                {[
                  { icon: FaGithub, href: 'https://github.com/locifer18', color: '#6366f1' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ansh-kanda-75995a244/', color: '#8b5cf6' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotateY: 180 }}
                    style={{
                      fontSize: '2.5rem',
                      color: social.color,
                      filter: `drop-shadow(0 0 20px ${social.color})`
                    }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <form onSubmit={handleSubmit} className="contact-form-futuristic">
                <h3 className="holographic-text" style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Send Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-futuristic"
                    required
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-futuristic"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input-futuristic"
                  style={{ marginBottom: '20px' }}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input-futuristic"
                  rows="5"
                  style={{ marginBottom: '30px' }}
                  required
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-futuristic"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: '100%',
                    padding: '18px',
                    fontSize: '1.1rem',
                    justifyContent: 'center'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(0, 0, 0, 0.3)',
                          borderTop: '2px solid #000',
                          borderRadius: '50%'
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;