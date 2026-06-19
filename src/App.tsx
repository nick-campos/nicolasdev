import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Findme from './pages/Findme'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import './App.css'

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()

  // Define a ordem das páginas para saber para onde ir ao rolar
  const pageOrder = ['/', '/about', '/projects', '/findme']

  // Controla se já está navegando, evitando disparos múltiplos em um scroll só
  const isNavegando = useRef(false)

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      if (isNavegando.current) return

      const pageAtual = pageOrder.indexOf(location.pathname)

      // Scroll para baixo -> próxima página
      if (e.deltaY > 30 && pageAtual < pageOrder.length - 1) {
        isNavegando.current = true
        navigate(pageOrder[pageAtual + 1])
        setTimeout(() => { isNavegando.current = false }, 800)
    }

    // Scroll para cima -> página anterior
    if (e.deltaY < -30 && pageAtual > 0) {
      isNavegando.current = true
      navigate(pageOrder[pageAtual - 1])
      setTimeout(() => { isNavegando.current = false }, 800)
    }
  }

  window.addEventListener('wheel', handleWheel)
  return () => window.removeEventListener('wheel', handleWheel)
}, [location.pathname, navigate])

  return (

    //O div externo ocupa a tela toda e define o background fixo
    //flex: coloca a Sidebar e o conteúdo lado a lado horizontalmente
      <div
        className='flex min-h-screen w-full'
        style={{
          background: '#E5E0D7',
          backgroundAttachment: 'fixed',
        }}
      >
      {/* Sidebar fixa no lado esquerdo */}
      <Sidebar />

      {/* Área principal onde as páginas são renderizadas overflow-y-auto: só esta área rola, não a página toda */}
      <main className='flex-1 overflow-y-auto'>

        {/* AnimatePresence detecta quando uma página sai e outra entra
              mode="wait": espera a página atual sair antes da próxima entrar
              key={location.pathname}: força o React a tratar cada rota como um elemento novo,
              disparando a animação de entrada a cada navegação */}

        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition= {{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/findme' element={<Findme />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
export default App