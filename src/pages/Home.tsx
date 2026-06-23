import { useNavigate } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface HomeProps {
    isDark: boolean
}

export default function Home({ isDark }: HomeProps ) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  
    {/* flex: centraliza o conteúdo vertical e horizontalmente
      ml-0: sem margem negativa no mobile (não tem sidebar lateral, então não precisa compensar nada)
      md:ml-[-80px]: no desktop, recentraliza o conteúdo compensando o espaço da sidebar fixa */}
  return (
    <div className='flex flex-col items-center justify-center h-full ml-0 md:ml-[-80px]'>

    {/* Bloco de texto central da Home
          text-center: centraliza o título
          max-w-2xl: limita a largura para não esticar demais em telas largas */}
    <div className='flex flex-col items-center gap-6 max-w-2xl px-8'>
      <h1 className='text-4xl font-bold text-center' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>{t('home.greeting')}
      <span style={{ color: '#F5A623' }}>.</span>
      <br />
      {t('home.roleBefore') && `${t('home.roleBefore')}`} {' '}
      <span style={{ color: '#F5A623' }}>{t('home.roleHighlight')}</span>
      {t('home.roleAfter') && ` ${t('home.roleAfter')}`}
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
        >{t('home.explore')}</span>
        <ArrowDown size={18} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}/>
      </motion.div>
    </div>
  </div>
  )
}