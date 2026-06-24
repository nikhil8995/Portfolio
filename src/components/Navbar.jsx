import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react'
import { navLinks } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isDark, setIsDark } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-2 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'px-4' : 'px-4'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-void-950/90 backdrop-blur-xl border border-void-700/60 rounded-xl shadow-[0_0_30px_rgba(0,245,255,0.06)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-2 font-mono text-sm font-semibold text-neon-cyan"
        >
          <Terminal size={16} className="opacity-80" />
          <span>nikhil.dev</span>
          <span className="animate-blink text-neon-cyan">_</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-xs text-void-300 hover:text-neon-cyan px-3 py-1.5 rounded transition-all duration-200 hover:bg-neon-cyan/5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg text-void-400 hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-void-400 hover:text-neon-cyan transition-all duration-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-void-900/95 backdrop-blur-xl border border-void-700/60 rounded-xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                className="w-full text-left font-mono text-sm text-void-300 hover:text-neon-cyan px-6 py-3 border-b border-void-800/50 last:border-0 hover:bg-neon-cyan/5 transition-all duration-200"
              >
                <span className="text-neon-cyan/40 mr-2">{'>'}</span>
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
