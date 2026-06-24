import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">{'// 04. certifications'}</p>
          <h2 className="section-title">Credentials</h2>
          <div className="h-px w-16 bg-neon-cyan/40 mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center group hover:border-neon-cyan/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
              <div className="font-display font-bold text-sm text-white mb-1 leading-snug">{cert.name}</div>
              <div className="font-mono text-xs text-neon-cyan/70 mb-2">{cert.issuer}</div>
              <div className="inline-flex items-center gap-1 font-mono text-[10px] text-void-500 border border-void-700/50 px-2 py-0.5 rounded-full">
                <Award size={9} />
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
