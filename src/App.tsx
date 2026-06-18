import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Findme from './pages/Findme'
import './App.css'

function App() {
  return (

    //O div externo ocupa a tela toda e define o background fixo
    //flex: coloca a Sidebar e o conteúdo lado a lado horizontalmente
    <BrowserRouter>
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/findme' element={<Findme />} />
        </Routes>
      </main>
      
      </div>
    </BrowserRouter>
  )
}

export default App