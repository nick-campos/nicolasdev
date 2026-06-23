// Importa os ícones usados: setas de navegação e link externo para o GitHub
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import previewProject from '../assets/previewProject.png'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'


// Array com os dados de cada projeto
const projects = [
  {
    title: 'To Do Task',
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
    //px-4: padding lateral reduzido no mobile, md:px-20 mantém o original do desktop
    <div className="flex items-center justify-center min-h-screen px-4 md:px-20 py-20 relative">

      {/* Seta esquerda — sempre visível, mesma lógica da direita 
      left-2: seta mais próxima da borda no mobile, md:left-12 mantém posição original */}
            <motion.button
              className='absolute left-2 md:left-15 cursor-pointer top-1/2 -translate-y-1/2'
              style={{ color: '#E48F00' }}
              whileTap={{ scale: 0.55}}
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Card do projeto em destaque
            w-full max-w-[380px]: ocupa a largura disponível no mobile sem ultrapassar 380px, igual ao desktop*/}
            <div
              className='rounded-2xl overflow-hidden shadow-lg w-full max-w-[-380px]'
              style={{ background: '#FFFFFF', width: '380px'}}
            >
              {/* Preview da imagem do projeto */}
              <img
                src={projects[0].imagem}
                alt={projects[0].title}
                className='w-full h-80 object-cover'
              ></img>

              {/* Conteúdo textual do card 
              p-6: padding interno reduzido no mobile, md:p-12 mantém o original do desktop*/}
              <div className= "p-12 md:p-12 flex flex-col gap-3">
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

            {/* Seta direita — sempre visível, mesma lógica da esquerda 
            right-2: seta mais próxima da borda no mobile, md:right-12 mantém posição original*/}
            <motion.button
              className='absolute right-2 md:right-15 cursor-pointer top-1/2 -translate-y-1/2 '
              style={{ color: '#E48F00' }}
              whileTap={{ scale: 0.55}}
            >
              <ChevronRight size={28} />
            </motion.button>
            </div>
    </div>
  )
}