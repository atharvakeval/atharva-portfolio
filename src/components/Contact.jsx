import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import './Contact.css'

const contacts = [
  { icon: Mail, label: 'Email', value: 'atharvakeval8380@gmail.com', href: 'mailto:atharvakeval8380@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 83809 53501', href: 'tel:+918380953501' },
  { icon: Linkedin, label: 'LinkedIn', value: 'atharva-keval', href: 'https://www.linkedin.com/in/atharva-keval-a667b3202' },
  { icon: Github, label: 'GitHub', value: '@atharva-keval', href: 'https://github.com/atharvakeval' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        06 / Contact
      </motion.div>

      <motion.h2
        className="contact-headline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Looking for a <span className="accent">SOC analyst</span><br />
        intern who actually <em>ships?</em>
      </motion.h2>

      <motion.p
        className="contact-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I'm actively looking for cybersecurity internship and SOC analyst roles.
        If you've got an opening or just want to talk security — my inbox is open.
      </motion.p>

      <motion.a
        href="mailto:atharvakeval8380@gmail.com"
        className="contact-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        atharvakeval8380@gmail.com
        <ArrowUpRight size={20} />
      </motion.a>

      <div className="contact-grid">
        {contacts.map((c, i) => {
          const Icon = c.icon
          return (
            <motion.a
              key={c.label}
              href={c.href}
              className="contact-card"
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <div className="contact-card-icon">
                <Icon size={18} />
              </div>
              <div>
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-value">{c.value}</div>
              </div>
              <ArrowUpRight size={16} className="contact-card-arrow" />
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
