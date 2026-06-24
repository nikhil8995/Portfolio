import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Zap } from 'lucide-react'
import AIChatWidget from './AIChatWidget'

export default function AIAssistant() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ai-assistant" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">{'// 05. ai assistant'}</p>
          <h2 className="section-title">Ask About Nikhil</h2>
          <p className="text-void-400 text-sm mt-3 max-w-md mx-auto">
            Curious about a specific project or skill? Chat with my AI assistant — it knows everything about my work.
          </p>
          <div className="h-px w-16 bg-neon-cyan/40 mt-6 mx-auto" />
        </motion.div>

        {/* Feature callouts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {[
            { icon: Cpu, label: 'Explain his DevOps project' },
            { icon: Zap, label: 'What ML projects has he built?' },
            { icon: Cpu, label: 'What technologies does he know?' },
            { icon: Zap, label: 'Tell me about his RFP project' },
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 font-mono text-xs text-void-400 border border-void-700/60 px-3 py-1.5 rounded-full bg-void-800/30"
            >
              <item.icon size={11} className="text-neon-cyan/60" />
              {item.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AIChatWidget />
        </motion.div>
      </div>
    </section>
  )
}
