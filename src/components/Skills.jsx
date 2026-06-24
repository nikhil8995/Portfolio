import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

const categoryColors = {
  'Languages': {
    text: 'text-neon-cyan',
    border: 'border-neon-cyan/30',
    bg: 'bg-neon-cyan/5',
    dot: 'bg-neon-cyan',
  },
  'AI / ML': {
    text: 'text-neon-purple',
    border: 'border-neon-purple/30',
    bg: 'bg-neon-purple/5',
    dot: 'bg-neon-purple',
  },
  'Web': {
    text: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/5',
    dot: 'bg-blue-400',
  },
  'DevOps': {
    text: 'text-neon-green',
    border: 'border-neon-green/30',
    bg: 'bg-neon-green/5',
    dot: 'bg-neon-green',
  },
  'Data': {
    text: 'text-neon-orange',
    border: 'border-neon-orange/30',
    bg: 'bg-neon-orange/5',
    dot: 'bg-neon-orange',
  },
  'Tools': {
    text: 'text-void-300',
    border: 'border-void-600/40',
    bg: 'bg-void-700/20',
    dot: 'bg-void-300',
  },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">{'// 02. skills'}</p>
          <h2 className="section-title">Tech Stack</h2>
          <div className="h-px w-16 bg-neon-cyan/40 mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const colors = categoryColors[category] || categoryColors['Tools']
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="glass rounded-2xl p-5 group hover:border-void-600/70 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1.5 h-4 rounded-full ${colors.dot}`} style={{ opacity: 0.7 }} />
                  <span className={`font-mono text-xs font-semibold ${colors.text}`}>{category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIdx * 0.08 + i * 0.04 + 0.2 }}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-lg border ${colors.text} ${colors.border} ${colors.bg} hover:opacity-100 opacity-80 transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
