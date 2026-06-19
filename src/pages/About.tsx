import { useNavigate } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import { motion } from 'framer-motion';

interface AboutProps {
    isDark: boolean
}

export default function About({ isDark }: AboutProps) {
    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-start min-h-screen px-80 py-20'>

            <div className='flex flex-col gap-6 max-w-xl'>
                <h1 className='text-6xl font-bold leading-tight' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    Quem está por<br /> trás do código?
                </h1>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    Tenho 23 anos e atuo como desenvolvedor frontend. Atualmente trabalho com
                    desenvolvimento voltado para email marketing, onde lido com interfaces HTML/CSS
                    altamente estruturadas e foco em compatibilidade e performance.
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    Minha stack inclui React, JavaScript, TypeScript, Tailwind CSS e integração com APIs.
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    Tenho como objetivo evoluir para uma atuação mais sólida como frontend em{' '}
                    <span style={{ color: '#F5A623'}}>produtos digitais</span>, aprofundando minha
                    experiência em interfaces, usabilidade e arquitetura de front-end.
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    Estou em constante transição de foco — buscando sair de um contexto mais técnico
                    e operacional para um ambiente voltado a produto e experiência do usuário.
                </p>

                <motion.div
                    className='flex items-center gap-2 mt-4 cursor-pointer'
                    onClick={() => navigate('/projects')}
                    whileHover={{ y: -3}}
                    transition={{ type: 'spring', stiffness: 300}}
                >
                    <span className='text-base' style={{ color: isDark ? '#ffffff' : '#2C2C2C' }}>
                        Meus projetos
                    </span>
                    <ArrowDown size={20} style={{ color: isDark ? '#ffffff' : '#2C2C2C', transform: 'rotate(-90deg)'}}/>
                </motion.div>
            </div>

            {/*Foto pessoal*/}
                <div className='ml-12 mt-[-450px]'>
                    <img
                        src={profileImg}
                        alt='Nicolas Campos'
                        className='w-40 h-40 rounded-full object-cover'
                    ></img>
                </div>
        </div>
    )
}