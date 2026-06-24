import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, GitBranch, Link2, Send, MapPin, Terminal } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [sent, setSent] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('entry.1503351815', form.name)
    formData.append('entry.1275871200', form.email)
    formData.append('entry.1686611204', form.message)

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeVACbokqvwEAsqhH94ZCtAiRXriHKanljKO9C3byJAw8G5rQ/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      )

      setSent(true)

      setTimeout(() => {
        setSent(false)
      }, 4000)

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const links = [
    {
      icon: Mail,
      label: 'nikhilgaitonde8995@gmail.com',
      href: 'mailto:nikhilgaitonde8995@gmail.com',
      color: 'text-neon-cyan',
    },
    {
      icon: GitBranch,
      label: 'github.com/nikhil8995',
      href: 'https://github.com/nikhil8995',
      color: 'text-white',
    },
    {
      icon: Link2,
      label: 'linkedin.com/in/nikhil-gaitonde-3b5a60353',
      href: 'https://www.linkedin.com/in/nikhil-gaitonde-3b5a60353/',
      color: 'text-blue-400',
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">
            {'// 06. contact'}
          </p>

          <h2 className="section-title">Get In Touch</h2>

          <div className="h-px w-16 bg-neon-cyan/40 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-void-400 text-sm leading-relaxed">
              Open to full-time roles in AI Engineering, Software Engineering,
              or DevOps. Let's build something together.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-void-500">
              <MapPin size={12} className="text-neon-cyan/60" />
              India · Open to relocation
            </div>

            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-neon-cyan/30 transition-all duration-200">
                    <link.icon size={14} className={link.color} />
                  </div>

                  <span className="font-mono text-xs text-void-400 group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={13} className="text-neon-cyan/60" />
                <span className="font-mono text-xs text-void-500">
                  compose_message.sh
                </span>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs text-void-500">
                  Name
                </label>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="w-full bg-void-900/60 border border-void-700/60 rounded-xl px-4 py-2.5 font-mono text-sm text-void-200 placeholder-void-600 focus:outline-none focus:border-neon-cyan/40 transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs text-void-500">
                  Email
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                  className="w-full bg-void-900/60 border border-void-700/60 rounded-xl px-4 py-2.5 font-mono text-sm text-void-200 placeholder-void-600 focus:outline-none focus:border-neon-cyan/40 transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs text-void-500">
                  Message
                </label>

                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="What are you building?"
                  required
                  className="w-full bg-void-900/60 border border-void-700/60 rounded-xl px-4 py-2.5 font-mono text-sm text-void-200 placeholder-void-600 focus:outline-none focus:border-neon-cyan/40 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full neon-btn rounded-xl flex items-center justify-center gap-2 py-3"
              >
                {sent ? (
                  <>
                    <span className="text-neon-green">✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

