import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        02 / Experience
      </motion.div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Where I've <span className="accent">worked.</span>
      </motion.h2>

      <motion.div
        className="exp-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="exp-header">
          <div className="exp-icon-wrap">
            <Briefcase size={22} />
          </div>
          <div className="exp-title-block">
            <h3 className="exp-role">Security Consultant Intern</h3>
            <div className="exp-company">
              VigilOps Security Services Pvt. Ltd.
              <span className="exp-mode">· Remote</span>
            </div>
          </div>
          <div className="exp-period">
            <span className="period-text">Dec 2025 — Apr 2026</span>
            <span className="period-meta">~40 hrs/week · 4 months</span>
          </div>
        </div>

        <ul className="exp-bullets">
          <li>
            <span className="bullet-marker">→</span>
            Worked full-time remote for four months on <strong>security research and documentation</strong>,
            covering different areas of security and digital forensics. Turned findings into
            clear, structured written reports.
          </li>
          <li>
            <span className="bullet-marker">→</span>
            Wrote small <strong>Python scripts</strong> and used <strong>Linux command-line tools</strong> to
            speed up routine security checks. Built real practice with Git, version control,
            and shipping clean, well-documented work.
          </li>
          <li>
            <span className="bullet-marker">→</span>
            Managed my own time and tasks on a remote schedule, used my own setup (BYOD),
            and kept the team updated. Learned how a <strong>small remote security team</strong> actually
            runs day to day.
          </li>
        </ul>

        <div className="exp-tags">
          <span>Security Research</span>
          <span>Digital Forensics</span>
          <span>Python</span>
          <span>Linux CLI</span>
          <span>Git</span>
          <span>Documentation</span>
        </div>
      </motion.div>
    </section>
  )
}
