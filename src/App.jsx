import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import GridBackground from './components/GridBackground'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import AIAssistant from './components/AIAssistant'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  // --- ADDED FIX ---
  // Forces the browser to stay at the top on initial load, 
  // overriding any third-party autoFocus traps.
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])
  // -----------------

  return (
    <div className="relative min-h-screen bg-void-950">
      <GridBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <AIAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}