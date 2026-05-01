import { motion } from 'framer-motion'
import './Nav.css'

export default function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="logo">
        <span className="logo-mark">
          <span className="logo-bracket">[</span>
          AK
          <span className="logo-bracket">]</span>
        </span>
        <span className="logo-status">
          <span className="logo-dot"></span>
          online
        </span>
      </a>
      <ul className="nav-links">
        {links.map((l, i) => (
          <motion.li
            key={l.href}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          >
            <a href={l.href}>
              <span className="nav-num">0{i + 1}</span>
              {l.label}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.a
        href="#contact"
        className="nav-cta"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Get in touch →
      </motion.a>
    </motion.nav>
  )
}
