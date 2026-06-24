export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,245,255,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, rgba(2,8,23,0.8) 0%, transparent 100%)',
        }}
      />
      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 animate-pulse"
        style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)', animationDuration: '6s' }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full opacity-5 animate-pulse"
        style={{ background: 'radial-gradient(circle, #bf5af2 0%, transparent 70%)', animationDuration: '8s', animationDelay: '2s' }}
      />
    </div>
  )
}
