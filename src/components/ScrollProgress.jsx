import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-void-800">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00f5ff, #bf5af2)',
          boxShadow: '0 0 8px #00f5ff88',
        }}
      />
    </div>
  )
}
