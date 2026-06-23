import { useEffect, useRef } from 'react'
import { useTheme } from './hooks/useTheme'
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
  const {isDark, toggleTheme} = useTheme() //trás o estado do tema e a função de alternar para o App

  // Define a ordem das páginas para saber para onde ir ao rolar
  const pageOrder = ['/', '/about', '/projects', '/findme']

  // Controla se já está navegando, evitando disparos múltiplos em um scroll só
  const isNavegando = useRef(false)

  {/* Controla a posição inicial do toque, usada para calcular a distância do swipe */}
  const touchStartY = useRef(0)

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

  // Guarda a posição Y onde o dedo tocou a tela
  function handleTouchStart(e: TouchEvent) {
    touchStartY.current = e.touches[0].clientY
  }

  // Calcula a distância do arrasto e decide se navega, igual à lógica do wheel
  function handleTouchEnd(e: TouchEvent) {
    if (isNavegando.current) return 

    const touchEndY = e.changedTouches[0].clientY
    const distancia = touchStartY.current - touchEndY
    const pageAtual = pageOrder.indexOf(location.pathname)

    // Arrastou para cima -> próxima página (mesma lógica do scroll para baixo)
    if (distancia > 50 && pageAtual < pageOrder.length -1) {
      isNavegando.current = true
      navigate(pageOrder[pageAtual +1])
      setTimeout(() => { isNavegando.current = false }, 800)
    }

   // Arrastou para baixo -> página anterior
    if (distancia < -50 && pageAtual >0) {
      isNavegando.current = true
      navigate(pageOrder[pageAtual -1])
      setTimeout(() => { isNavegando.current = false }, 800)
    }
  }

{/*Cast para EventListener: o TypeScript não reconhece automaticamente que
a função recebe um TouchEvent específico ao usar addEventListener genérico,
então o cast resolve o erro de tipos sem alterar o comportamento em runtime*/}
  window.addEventListener('wheel', handleWheel)
  window.addEventListener('touchstart', handleTouchStart as EventListener)
  window.addEventListener('touchend', handleTouchEnd as EventListener)

return () => {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('touchstart', handleTouchStart as EventListener)
  window.removeEventListener('touchend', handleTouchEnd as EventListener)
}
}, [location.pathname, navigate])

  return (

    //O div externo ocupa a tela toda e define o background fixo
    //flex: coloca a Sidebar e o conteúdo lado a lado horizontalmente
      <div
        className={`flex min-h-screen w-full ${isDark ? 'bg-[#22281F]' : 'bg-[#E5E0D7]'}`}
        style={{
        backgroundAttachment: 'fixed',
      }}
      >
      {/* Sidebar fixa no lado esquerdo */}
      <Sidebar isDark={isDark} toggleTheme={toggleTheme}/>

      {/* Empurra o conteúdo para não ficar atrás do header(mobile) no início da página
        pt-16: compensa a altura do header mobile (h-16)
        md:pt-0: zera o padding-top no desktop, por que a sidebar não é horizontal
        md:pl-24: compensa a largura da sidebar fixa no desktop (w-24) */}
      <main className='flex-1 overflow-y-auto pt-16 md:pt-0 md:pl-24'>

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
            <Routes 
              location={location}
            >
              <Route path='/' element={<Home isDark={isDark} />} />
              <Route path='/about' element={<About isDark={isDark}/>} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/findme' element={<Findme isDark={isDark}/>} />
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