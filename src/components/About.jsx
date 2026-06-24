import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, Rocket, Coffee } from 'lucide-react'

const traits = [
  { icon: Brain, label: 'AI / ML Engineer', desc: 'NLP pipelines, semantic search, LLM applications built for production.' },
  { icon: Code2, label: 'Full-Stack Dev', desc: 'React frontends, FastAPI backends, end-to-end product ownership.' },
  { icon: Rocket, label: 'DevOps Practitioner', desc: 'CI/CD pipelines, container orchestration, infra automation.' },
  { icon: Coffee, label: 'Open Source Fan', desc: 'Arch Linux, Hyprland, Neovim. Terminal-first workflow.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">{'// 01. about'}</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="h-px w-16 bg-neon-cyan/40 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 space-y-4 text-void-300 leading-relaxed"
          >
            <p>
              I'm a software engineer with a focus on building{' '}
              <span className="text-white font-medium">intelligent systems</span> that solve real problems at scale.
              My work sits at the intersection of machine learning, NLP, and modern software engineering.
            </p>
            <p>
              I've shipped NLP pipelines for industrial procurement automation, designed DevOps infrastructure
              that runs microservices in production, and built AI-powered content tools processing tens of thousands
              of data points daily. I care about code that's{' '}
              <span className="text-neon-cyan/80">maintainable, observable, and fast</span>.
            </p>
            <p>
              Outside of work I run Arch Linux with Hyprland, contribute to open source tools,
              and obsess over clean terminal setups. I believe good tooling makes better engineers.
            </p>

            {/* Tech highlights */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'React', 'FastAPI', 'HuggingFace', 'Docker', 'PostgreSQL'].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-4 group hover:border-neon-cyan/30 transition-all duration-300"
              >
                <t.icon size={18} className="text-neon-cyan mb-2 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-mono text-xs font-semibold text-white mb-1">{t.label}</div>
                <div className="font-body text-[11px] text-void-400 leading-relaxed">{t.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
