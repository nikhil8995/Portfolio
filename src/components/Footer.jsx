import { GitBranch, Link2, Mail, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-void-800/60 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm text-neon-cyan">
          <Terminal size={14} />
          <span>nikhil.dev</span>
        </div>

        <p className="font-mono text-xs text-void-500">
          Thank You for visiting my portfolio! Feel free to reach out via email or connect with me on GitHub and LinkedIn.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: GitBranch, href: 'https://github.com/nikhil8995' },
            { icon: Link2, href: 'https://www.linkedin.com/in/nikhil-gaitonde-3b5a60353/' },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-void-500 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-void-900/80 text-center">
        <p className="font-mono text-[10px] text-void-700">
          &copy; {new Date().getFullYear()} Nikhil. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
