import { motion } from 'framer-motion'
import { ExternalLink, Github, Mail, Activity, Search } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    icon: Mail,
    name: 'AI Phishing Email Detector',
    blurb: 'Manifest V3 Chrome extension that injects a Scan button into Gmail/Outlook Web and classifies phishing in real time via a FastAPI/ML backend.',
    bullets: [
      'Content scripts extract email body; FastAPI backend serves a scikit-learn classifier flagging urgency language, suspicious links, and spoofed senders.',
      'Result banner renders directly inside the inbox UI with traffic-light severity. Resolved CORS, model path, and scipy deprecation issues during integration.',
    ],
    stack: ['Python', 'FastAPI', 'scikit-learn', 'Chrome MV3', 'JavaScript'],
    accent: '#00ff9d'
  },
  {
    icon: Activity,
    name: 'ThreatLens',
    subtitle: 'SOC Analyst Threat Monitoring Dashboard',
    blurb: 'Zero-dependency browser dashboard that simulates a real SOC analyst workflow: alert triage, incident investigation, threat intel, and ML threat prediction.',
    bullets: [
      'Built a custom anomaly scoring engine in vanilla JS, plus a side-drawer incident detail micro-interaction targeting the alert fatigue problem.',
      'Architected for VirusTotal & AbuseIPDB API integration, with linear-regression-based threat prediction and IP reputation checks.',
    ],
    stack: ['JavaScript', 'HTML/CSS', 'Anomaly Scoring', 'Linear Regression'],
    accent: '#5eb3ff'
  },
  {
    icon: Search,
    name: 'Automated Recon Pipeline',
    blurb: 'Single-command CLI that chains the standard recon trio — Subfinder, Nmap, Nuclei — and ships a clean HTML/JSON report at the end.',
    bullets: [
      'Eliminated 4–5 hours of manual recon per target by automating subdomain enumeration, port scanning, and vuln scanning into one orchestrated pipeline.',
      'Validated against HackTheBox and personal lab environments, with structured logging and de-duplicated finding output.',
    ],
    stack: ['Python', 'Subfinder', 'Nmap', 'Nuclei', 'Bash'],
    accent: '#ffb84d'
  }
]

export default function Projects() {
  return (
    <section id="work" className="projects-section">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        03 / Selected work
      </motion.div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Projects I've <span className="accent">shipped.</span>
      </motion.h2>

      <div className="projects-list">
        {projects.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.article
              key={p.name}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--card-accent': p.accent }}
            >
              <div className="project-num">/0{i + 1}</div>

              <div className="project-main">
                <div className="project-head">
                  <div className="project-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="project-name">{p.name}</h3>
                    {p.subtitle && <div className="project-subtitle">{p.subtitle}</div>}
                  </div>
                </div>

                <p className="project-blurb">{p.blurb}</p>

                <ul className="project-bullets">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot"></span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="project-footer">
                  <div className="project-stack">
                    {p.stack.map(s => <span key={s}>{s}</span>)}
                  </div>
                  <div className="project-links">
                    <a href="#" aria-label="GitHub">
                      <Github size={16} />
                    </a>
                    <a href="#" aria-label="Live demo">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
