// Importa os ícones usados: setas de navegação e link externo para o GitHub
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import previewProject from '../assets/previewProject.png'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'


// Array com os dados de cada projeto
const projects = [
  {
    title: ' To Do Task',
    description: 'projects.description',
    stack: 'React, TypeScript, Tailwind CSS, API e Supabase',
    imagem: previewProject,
    github: 'https://github.com/nick-campos/task-manager',
  },
]

// Componente da página Projetos
export default function Projects() {
  const { t } = useTranslation()
  //será útil quando implementar a lógica de navegção de outros projetos
  //const temMultiplos = projects.length > 1
  
  return (
    // Container principal centralizado, com a mesma lógica de espaçamento das outras páginas
    <div className="flex items-center justify-center min-h-screen px-20 py-20 relative">

      {/* Seta esquerda — sempre visível, mesma lógica da direita */}
            <motion.button
              className='absolute left-12 cursor-pointer top-1/2 -translate-y-1/2'
              style={{ color: '#E48F00' }}
              whileTap={{ scale: 0.55}}
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Card do projeto em destaque
            w-80: largura fixa, mantendo proporção parecida com o mockup */}
            <div
              className='rounded-2xl overflow-hidden shadow-lg'
              style={{ background: '#FFFFFF', width: '380px'}}
            >
              {/* Preview da imagem do projeto */}
              <img
                src={projects[0].imagem}
                alt={projects[0].title}
                className='w-full h-70 object-cover'
              ></img>

              {/* Conteúdo textual do card */}
              <div className= "p-12 flex flex-col gap-3">
                <h3 className= "text-xl font-bold" style={{ color: '#2C2C2C'}}>
                  {projects[0].title}
                </h3>

                <p className='text-sm' style={{ color: '#2C2C2C'}}>
                  {t(projects[0].description)}
                </p>

                <p className='text-xs' style={{ color: '#888888'}}>
                  {projects[0].stack}
                </p>

                <motion.a
                href={projects[0].github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-sm font-medium mt-2'
                style={{ color: '#F5A623'}}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300}}
                >
                GitHub <ArrowUpRight size={16} />
                </motion.a>
              </div>

            {/* Seta direita — sempre visível, mesma lógica da esquerda */}
            <motion.button
              className='absolute right-12 cursor-pointer top-1/2 -translate-y-1/2 '
              style={{ color: '#E48F00' }}
              whileTap={{ scale: 0.55}}
            >
              <ChevronRight size={28} />
            </motion.button>
            </div>
    </div>
  )
}