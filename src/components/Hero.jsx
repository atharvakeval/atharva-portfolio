import { motion } from 'framer-motion'
import { Shield, Terminal, Activity } from 'lucide-react'
import atharva from '../assets/atharva.jpeg'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="hero">
      <motion.div
        className="hero-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* LEFT: text content */}
        <div className="hero-content">
          <motion.div className="hero-status" variants={itemVariants}>
            <span className="status-dot"></span>
            <span className="status-text">Available for SOC Analyst & Cybersecurity Internships</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-line">Atharva</span>
            <span className="hero-line">Keval<span className="hero-period">.</span></span>
            <span className="hero-line hero-subtitle">
              Securing systems,
            </span>
            <span className="hero-line hero-subtitle">
              <span className="accent-italic">one log at a time.</span>
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Computer Engineering student specializing in <strong>cybersecurity</strong>.
            Hands-on with vulnerability assessment, penetration testing, and SOC analyst
            workflows. Currently building expertise in SIEM tools and threat hunting.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <Shield size={18} className="stat-icon" />
              <div>
                <div className="stat-value">4 mo</div>
                <div className="stat-label">Security internship</div>
              </div>
            </div>
            <div className="stat">
              <Terminal size={18} className="stat-icon" />
              <div>
                <div className="stat-value">3+</div>
                <div className="stat-label">Security projects</div>
              </div>
            </div>
            <div className="stat">
              <Activity size={18} className="stat-icon" />
              <div>
                <div className="stat-value">7+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#work" className="btn-primary">
              View my work
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn-secondary">Contact me</a>
          </motion.div>
        </div>

        {/* RIGHT: photo with effects */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="photo-frame">
            {/* corner brackets */}
            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>

            {/* photo with overlay */}
            <div className="photo-inner">
              <img src={atharva} alt="Atharva Keval" />
              <div className="photo-overlay"></div>
              <div className="photo-scan"></div>
            </div>

            {/* floating info card */}
            <motion.div
              className="info-card info-card-top"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="info-card-label">Location</div>
              <div className="info-card-value">Kopargaon, IN</div>
            </motion.div>

            <motion.div
              className="info-card info-card-bottom"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="info-card-row">
                <span className="info-dot"></span>
                <span className="info-card-label">Status</span>
              </div>
              <div className="info-card-value">Open to opportunities</div>
            </motion.div>

            <motion.div
              className="info-card info-card-side"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="info-card-label">Specialization</div>
              <div className="info-card-value">SOC · Pentest</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}
