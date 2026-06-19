import { useNavigate } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface HomeProps {
    isDark: boolean
}

export default function Home({ isDark }: HomeProps ) {
  const navigate = useNavigate()
  
  return (
    // flex: centraliza o conteúdo vertical e horizontalmente
    <div className='flex flex-col items-center justify-center min-h-screen ml-[-80px]'>

    {/* Bloco de texto central da Home
          text-center: centraliza o título
          max-w-2xl: limita a largura para não esticar demais em telas largas */}
    <div className='flex flex-col items-center gap-6 max-w-2xl px-8'>
      <h1 className='text-4xl font-bold text-center' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>Olá. Eu sou Nicolas Campos
      <span style={{ color: '#F5A623' }}>.</span>
      <br />
      Desenvolvedor{' '}
      <span style={{ color: '#F5A623' }}>Frontend</span>
       <span>.</span>
      </h1>

      {/* Botão explorar com seta para baixo
            serve como direcionamento visual para o usuário rolar a página
            ou navegar para a próxima seção */}
      <motion.div className='flex flex-col items-center gap-2 mt-4'
          style={{ color: '#2C2C2C' }}
          onClick={() => navigate('/about')}
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300}}
          >
        <span
          className='text-lg cursor-pointer' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}
        >Explorar</span>
        <ArrowDown size={18} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}/>
      </motion.div>
    </div>
  </div>
  )
}