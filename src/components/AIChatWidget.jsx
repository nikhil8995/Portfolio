import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles } from 'lucide-react'
import { aiResponses } from '../data/portfolio'

const examplePrompts = [
  { label: 'DevOps project', key: 'devops' },
  { label: 'ML projects', key: 'ml' },
  { label: 'Tech stack', key: 'technologies' },
  { label: 'RFP project', key: 'rfp' },
]

function getResponse(input) {
  const lower = input.toLowerCase()
  if (lower.includes('devops') || lower.includes('cicd') || lower.includes('jenkins') || lower.includes('docker')) return aiResponses.devops
  if (lower.includes('ml') || lower.includes('machine learning') || lower.includes('ai') || lower.includes('model')) return aiResponses.ml
  if (lower.includes('tech') || lower.includes('stack') || lower.includes('language') || lower.includes('know') || lower.includes('skill')) return aiResponses.technologies
  if (lower.includes('rfp') || lower.includes('semantic') || lower.includes('matching') || lower.includes('nlp')) return aiResponses.rfp
  if (lower.includes('about') || lower.includes('who') || lower.includes('nikhil')) return aiResponses.about
  return `I can tell you about Nikhil's projects, tech stack, or specific systems like his RFP matching engine or DevOps pipeline. Try asking something specific!`
}

function formatMessage(text) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <div key={i} className="font-semibold text-white mt-2 first:mt-0">{line.slice(2, -2)}</div>
    }
    if (line.startsWith('**') && line.includes('**')) {
      const parts = line.split(/\*\*(.*?)\*\*/g)
      return (
        <div key={i} className="mt-1">
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-neon-cyan/90">{p}</strong> : <span key={j}>{p}</span>)}
        </div>
      )
    }
    if (line.startsWith('• ')) return <div key={i} className="flex gap-2 mt-1"><span className="text-neon-cyan mt-0.5">▸</span><span>{line.slice(2)}</span></div>
    if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.') || line.startsWith('5.')) {
      return <div key={i} className="flex gap-2 mt-1 ml-2"><span className="text-void-400 font-mono text-xs">{line.slice(0, 2)}</span><span>{line.slice(2)}</span></div>
    }
    if (line === '') return <div key={i} className="h-1" />
    return <div key={i}>{line}</div>
  })
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

export default function AIChatWidget({ compact = false }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: aiResponses.default }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text) => {
    const msg = text.trim()
    if (!msg || loading) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: msg }])
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 600))
    setLoading(false)
    setMessages((prev) => [...prev, { role: 'assistant', text: getResponse(msg) }])
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) }
  }

  return (
    <div
      className={`flex flex-col rounded-2xl border border-void-700/60 bg-void-900/70 backdrop-blur-xl overflow-hidden ${
        compact ? 'h-[480px]' : 'h-[560px]'
      }`}
      style={{ boxShadow: '0 0 40px rgba(0,245,255,0.06), inset 0 0 40px rgba(0,245,255,0.02)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-void-700/50 bg-void-900/50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
            <Sparkles size={13} className="text-neon-cyan" />
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-neon-cyan">Ask About Nikhil</div>
            <div className="font-mono text-[10px] text-void-500">AI assistant • always online</div>
          </div>
        </div>
        <div className="ml-auto flex gap-1.5">
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* Example prompts */}
      <div className="flex flex-wrap gap-1.5 px-4 pt-3 pb-2">
        {examplePrompts.map((p) => (
          <button
            key={p.key}
            onClick={() => send(p.label)}
            className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan/70 hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-200"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 scrollbar-thin">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 ${
                  msg.role === 'assistant'
                    ? 'bg-neon-cyan/10 border border-neon-cyan/20'
                    : 'bg-void-700/60 border border-void-600/40'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <Bot size={11} className="text-neon-cyan" />
                ) : (
                  <User size={11} className="text-void-300" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                  msg.role === 'assistant'
                    ? 'bg-void-800/60 text-void-200 border border-void-700/40'
                    : 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
                }`}
              >
                {formatMessage(msg.text)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2.5"
          >
            <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/20">
              <Bot size={11} className="text-neon-cyan" />
            </div>
            <div className="bg-void-800/60 rounded-xl px-3 py-2.5 border border-void-700/40">
              <TypingIndicator />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 border-t border-void-800/50">
        <div className="flex gap-2 bg-void-800/50 rounded-xl border border-void-700/50 px-3 py-2 focus-within:border-neon-cyan/30 transition-all duration-200">
          <span className="font-mono text-xs text-neon-cyan/40 mt-[3px] flex-shrink-0">{'>'}</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask anything about Nikhil..."
            className="flex-1 bg-transparent font-mono text-xs text-void-200 placeholder-void-600 outline-none"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="flex-shrink-0 text-neon-cyan/60 hover:text-neon-cyan disabled:opacity-30 transition-all duration-200"
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}
