import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative glass rounded-2xl p-6 flex flex-col gap-4 group overflow-hidden cursor-pointer transition-all duration-300 hover:border-opacity-60"
      style={{
        borderColor: hovered ? `${project.accent}44` : undefined,
        boxShadow: hovered ? `0 0 30px ${project.accent}18, inset 0 0 30px ${project.accent}06` : undefined,
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5">
            ★ Featured
          </span>
        </div>
      )}

      {/* Glow orb */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${project.accent}22 0%, transparent 70%)` }}
      />

      {/* Icon + number */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
          style={{ borderColor: `${project.accent}33`, background: `${project.accent}11` }}
        >
          {project.icon}
        </div>
        <span className="font-mono text-xs text-void-500">{'0' + (project.id)}</span>
      </div>

      {/* Title */}
      <div>
        <h3
          className="font-display font-bold text-base text-white leading-snug transition-colors duration-200 group-hover:text-neon-cyan"
          style={{ color: hovered ? project.accent : undefined }}
        >
          {project.shortTitle}
        </h3>
        {project.featured && (
          <p className="font-mono text-[10px] text-void-500 mt-0.5 leading-relaxed line-clamp-1">{project.title}</p>
        )}
      </div>

      {/* Description */}
      <p className="text-void-400 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-0.5 rounded-md border"
            style={{ color: `${project.accent}cc`, borderColor: `${project.accent}33`, background: `${project.accent}0a` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[10px] text-void-500 px-2 py-0.5 rounded bg-void-800/60">
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-1">
        <a
          href={project.github || "#"} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-void-400 hover:text-white transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            // Prevents the jump to top if there is no github link yet
            if (!project.github) e.preventDefault(); 
          }}
        >
          <GitBranch size={13} /> Code
        </a>
        <a
          href={project.demo || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
          style={{ color: hovered ? project.accent : '#64748b' }}
          onClick={(e) => {
            e.stopPropagation();
            // Prevents the jump to top if there is no demo link yet
            if (!project.demo) e.preventDefault();
          }}
        >
          <ExternalLink size={13} /> Demo <ArrowRight size={11} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neon-cyan mb-2">{'// 03. projects'}</p>
          <h2 className="section-title">What I've Built</h2>
          <div className="h-px w-16 bg-neon-cyan/40 mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
