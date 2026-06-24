// Importa os ícones usados: setas de navegação e link externo para o GitHub
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import preview from '../assets/preview.png'
import portifolio from '../assets/portifolio.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

// Array com os dados de cada projeto
const projects = [
  {
    title: 'To Do Task',
    description: 'projects.description1',
    stack: 'React, TypeScript, Tailwind CSS, API e Supabase',
    imagem: preview,
    github: 'https://github.com/nick-campos/task-manager',
  },

  {
    title: 'Portifólio Pessoal',
    description: 'projects.description2',
    stack: 'React, TypeScript, Tailwind CSS, Framer Motion, React Router DOM, react-i18next, EmailJS e Lucide React',
    imagem: portifolio,
    github: 'https://github.com/nick-campos/nicolasdev',
  },
]

// Componente da página Projetos
export default function Projects() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const currentProject = projects[currentIndex]

  return (
  //px-2: padding lateral ainda mais reduzido no mobile, md:px-20 mantém o original
  <div className="flex flex-col items-center justify-center h-full px-2 md:px-20 py-20 relative">

    {/* left-0: seta colada na borda no mobile (já tem px-2 no container pai), md:left-15 mantém posição original */}
      <motion.button
      className='absolute left-0 md:left-15 cursor-pointer top-1/2 -translate-y-1/2'
      style={{ color: '#E48F00' }}
      whileTap={{ scale: 0.55}}
      onClick={() => {
          setDirection(1)
          setCurrentIndex(prev => Math.max(prev -1, 0))
      }}
    > 
        <ChevronLeft size={24} className='md:size-7' />
      </motion.button>

      {/* max-w-[260px]: card bem mais compacto no mobile, md:max-w-[380px] mantém o tamanho original */}
      <AnimatePresence mode='wait'>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
        animate={{opacity: 1, x: 0 }}
        exit={{opacity: 0, x: direction === 1 ? - 50 : 50 }}
        transition={{ duration: 0.3}}

        className='rounded-2xl overflow-hidden shadow-lg w-full max-w-[260px] md:max-w-[380px]'
        style={{ background: '#FFFFFF'}}
      >
      {/* h-40: imagem bem mais baixa no mobile, md:h-80 mantém o original */}
      <img
        src={currentProject.imagem}
        alt={currentProject.title}
        className='w-full h-65 md:h-80 object-cover'
      ></img>

      {/* p-4: padding interno bem reduzido no mobile, md:p-12 mantém o original */}
        <div className="p-4 md:p-12 flex flex-col gap-2 md:gap-3">
          <h3 className= "text-base md:text-xl font-bold" style={{ color: '#2C2C2C'}}>
          {currentProject.title}
        </h3>

        <p className='text-xs md:text-sm' style={{ color: '#2C2C2C'}}>
          {t(currentProject.description)}
        </p>

        <p className='text-[10px] md:text-xs' style={{ color: '#888888'}}>
          {currentProject.stack}
        </p>

          <motion.a
            href={currentProject.github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 text-xs md:text-sm font-medium mt-1 md:mt-2'
            style={{ color: '#F5A623'}}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300}}
          >
          GitHub <ArrowUpRight size={14} className='md:size-4' />
          </motion.a>
        </div>
      </motion.div>
      </AnimatePresence>
      {/* right-0: seta colada na borda no mobile, md:right-15 mantém posição original */}
      <motion.button
        className='absolute right-0 md:right-15 cursor-pointer top-1/2 -translate-y-1/2 '
        style={{ color: '#E48F00' }}
        whileTap={{ scale: 0.55}}
        onClick={() => {
          setDirection(-1)
          setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1))
      }}
      >
        <ChevronRight size={24} className='md:size-7' />
      </motion.button>
    </div>
  )
}