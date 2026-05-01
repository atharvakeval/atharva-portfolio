import { motion } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    label: 'Security',
    items: ['Penetration Testing', 'Vulnerability Assessment', 'OWASP Top 10', 'OSINT', 'Web App Security', 'Incident Triage', 'Threat Intelligence', 'Log Analysis']
  },
  {
    label: 'SIEM & Tools',
    items: ['Splunk (in progress)', 'Microsoft Sentinel', 'Burp Suite', 'Nmap', 'Nuclei', 'Subfinder', 'Wireshark', 'tcpdump']
  },
  {
    label: 'OS & Networking',
    items: ['Windows (Event Viewer, Registry)', 'Linux CLI', 'syslog', 'TCP/IP', 'DNS', 'Firewalls', 'Network Traffic Analysis']
  },
  {
    label: 'Programming & Cloud',
    items: ['Python', 'Bash', 'JavaScript', 'AWS (Compute, Storage, Networking, Databases)']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        04 / Technical skills
      </motion.div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        The <span className="accent">stack</span> I work with.
      </motion.h2>

      <div className="skills-grid">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.label}
            className="skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
          >
            <div className="skill-group-head">
              <span className="skill-group-num">0{gi + 1}</span>
              <h3 className="skill-group-label">{g.label}</h3>
            </div>
            <div className="skill-pills">
              {g.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.1 + i * 0.04 }}
                  whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
