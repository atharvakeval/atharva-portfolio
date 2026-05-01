import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Code2, Lock } from 'lucide-react'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        01 / About me
      </motion.div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Curious about <span className="accent">how systems break</span><br />
        and how to defend them.
      </motion.h2>

      <div className="about-grid">
        <motion.div
          className="about-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p>
            I'm a Computer Engineering undergrad at <strong>Sanjivani College of Engineering, Kopargaon</strong>,
            with a deep focus on <strong>cybersecurity</strong>. My interest sits at the
            intersection of offensive and defensive security — understanding attack surfaces
            well enough to defend them.
          </p>
          <p>
            Through my internship at <strong>VigilOps Security</strong> and self-directed
            projects, I've worked across vulnerability assessment, web app penetration
            testing, and SOC analyst workflows. I'm currently building hands-on expertise
            in SIEM platforms — Splunk and Microsoft Sentinel — while sharpening my
            incident triage and log analysis skills.
          </p>
          <p>
            I write Python automation tools, build security dashboards, and document everything I learn.
            Targeting SOC analyst and cybersecurity internship roles where I can ship real value.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="info-row">
            <GraduationCap size={20} className="info-icon" />
            <div>
              <div className="info-label">Education</div>
              <div className="info-value">B.Tech Computer Engineering</div>
              <div className="info-meta">Sanjivani College · 2023–2027 · CGPA 7.30</div>
            </div>
          </div>

          <div className="info-row">
            <MapPin size={20} className="info-icon" />
            <div>
              <div className="info-label">Based in</div>
              <div className="info-value">Kopargaon, Maharashtra</div>
              <div className="info-meta">India · IST (UTC+5:30)</div>
            </div>
          </div>

          <div className="info-row">
            <Lock size={20} className="info-icon" />
            <div>
              <div className="info-label">Focus areas</div>
              <div className="info-value">SOC · PenTest · Threat Intel</div>
              <div className="info-meta">SIEM · OWASP · Incident Response</div>
            </div>
          </div>

          <div className="info-row">
            <Code2 size={20} className="info-icon" />
            <div>
              <div className="info-label">Stack</div>
              <div className="info-value">Python · JS · Bash · AWS</div>
              <div className="info-meta">Linux · Git · FastAPI · scikit-learn</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
