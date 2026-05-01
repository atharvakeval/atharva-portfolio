import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import './Certifications.css'

const certs = [
  { name: 'Splunk Fundamentals 1', issuer: 'Splunk', status: 'in-progress' },
  { name: 'OWASP Top 10', issuer: 'TryHackMe', status: 'done' },
  { name: 'Cyber Threat Management', issuer: 'Cisco', status: 'done' },
  { name: 'Cyber Security Associate', issuer: 'Reliance Foundation', status: 'done' },
  { name: 'Cyber Security', issuer: 'Tech Mahindra', status: 'done' },
  { name: 'Burp Suite In Depth', issuer: 'Udemy', status: 'done' },
  { name: 'AWS Educate — 5 Badges', issuer: 'AWS', status: 'done', meta: 'Compute · Storage · Networking · Databases' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certs-section">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        05 / Certifications & Training
      </motion.div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Always <span className="accent">learning.</span>
      </motion.h2>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="cert-icon">
              {c.status === 'in-progress' ? <BookOpen size={18} /> : <Award size={18} />}
            </div>
            <div className="cert-body">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              {c.meta && <div className="cert-meta">{c.meta}</div>}
            </div>
            <div className={`cert-badge ${c.status}`}>
              {c.status === 'in-progress' ? 'In Progress' : 'Earned'}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
