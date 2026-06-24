import { motion } from 'framer-motion'
import { GitBranch, Link2, FileText, ArrowRight, Cpu } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import AIChatWidget from './AIChatWidget'

const phrases = [
  'Software Engineer',
  'AI/ML Engineer',
  'DevOps Practitioner',
  'Full-Stack Developer',
  'NLP Enthusiast',
]

export default function Hero() {
  const typed = useTypingEffect(phrases, 75, 2200)

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 w-fit font-mono text-xs text-neon-cyan/80 border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-sm text-void-400 mb-2"
              >
                {'// hello world'}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display text-6xl md:text-7xl font-extrabold leading-none tracking-tight"
              >
                <span className="text-white">Nikhil</span>
              </motion.h1>
            </div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-xl md:text-2xl h-8"
            >
              <span className="text-neon-cyan">{typed}</span>
              <span className="animate-blink text-neon-cyan">|</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-void-300 text-base leading-relaxed max-w-md"
            >
              Building production-grade systems at the intersection of{' '}
              <span className="text-neon-cyan/80">AI/ML</span> and{' '}
              <span className="text-neon-cyan/80">software engineering</span>.
              From NLP pipelines to DevOps infrastructure — I ship things that scale.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#"
                className="neon-btn rounded-lg flex items-center gap-2"
              >
                <FileText size={14} />
                Resume
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-lg bg-void-800/60 text-void-200 border border-void-700/60 hover:border-void-500 hover:text-white transition-all duration-200"
              >
                <GitBranch size={14} />
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-lg bg-void-800/60 text-void-200 border border-void-700/60 hover:border-void-500 hover:text-white transition-all duration-200"
              >
                <Link2 size={14} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 pt-2"
            >
              {[
                ['3+', 'Projects'],
                ['4', 'Certifications'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-bold text-2xl text-neon-cyan">
                    {num}
                  </div>
                  <div className="font-mono text-xs text-void-400">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={14} className="text-neon-cyan" />
              <span className="font-mono text-xs text-void-400">
                AI_ASSISTANT.exe
              </span>
            </div>

            <AIChatWidget compact />
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-1 text-void-500 cursor-pointer"
            onClick={() =>
              document
                .querySelector('#about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className="font-mono text-xs">scroll</span>
            <ArrowRight size={14} className="rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}