import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import QuestionModal from './components/QuestionModal.jsx'
import Toast from './components/Toast.jsx'
import Loader from './components/Loader.jsx'
import DotsCanvas from './components/DotsCanvas.jsx'
import useScrollAnimate from './hooks/useScrollAnimate.js'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const [loaderHidden, setLoaderHidden] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '' })
  const { theme, toggleTheme } = useTheme()

  // hide the loader once everything has mounted, like the original ftco-loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 600)
    return () => clearTimeout(timer)
  }, [])

  // reveal .reveal elements as they scroll into view
  useScrollAnimate([loaderHidden])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', modalOpen)
  }, [modalOpen])

  const showToast = (message, duration = 3500) => {
    setToast({ visible: true, message })
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), duration)
  }

  const handleCopy = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast('Copied', 1200))
        .catch((err) => console.error('Clipboard write failed:', err))
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      try {
        document.execCommand('copy')
        showToast('Copied', 1200)
      } catch (err) {
        console.error('Fallback copy failed:', err)
      }
      document.body.removeChild(textarea)
    }
  }

  return (
    <>
      <DotsCanvas theme={theme} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Projects onCopy={handleCopy} />
      {/* <Education /> */}
      <Resume />
      <Contact onOpenModal={() => setModalOpen(true)} />
      <Footer />

      <QuestionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSent={(msg) => showToast(msg)}
      />

      <Toast
        message={toast.message}
        visible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />

      <Loader hidden={loaderHidden} />
    </>
  )
}
