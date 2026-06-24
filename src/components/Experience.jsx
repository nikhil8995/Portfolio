import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">{'// 04. experience'}</p>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="h-px w-16 bg-neon-cyan/40 mt-3" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-cyan/20 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-8 pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-4 w-3 h-3 rounded-full border-2 border-neon-cyan bg-void-950 shadow-[0_0_8px_#00f5ff66]" />

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-5 hover:border-void-600/60 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-base text-white group-hover:text-neon-cyan transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Briefcase size={11} className="text-void-500" />
                        <span className="font-mono text-xs text-neon-cyan/70">{exp.company}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-void-500 whitespace-nowrap border border-void-700/50 px-2.5 py-1 rounded-lg bg-void-800/40 h-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-void-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
