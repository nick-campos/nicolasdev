import { useNavigate } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import profileImg from '../assets/profile.img.jpeg'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'

interface AboutProps {
    isDark: boolean
}

export default function About({ isDark }: AboutProps) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    {/* flex-col no mobile (foto em cima, texto abaixo), flex-row a partir do desktop (lado a lado, como já era)
    justify-center: centraliza o conjunto verticalmente, evitando que estoure a tela
    gap-4 md:gap-0: espaço pequeno entre foto e texto no mobile */}
    return (
        <div className='flex flex-col items-center justify-center h-full px-6 md:px-80 py-10 md:py-20 gap-4 md:gap-0'>

            {/* Foto pessoal — vem primeiro no mobile (fica em cima)
            w-20 h-20: bem reduzida no mobile pra não ocupar espaço vertical demais
            md:order-2: no desktop, a foto volta a vir depois do texto (lado direito), como no layout original
            mt-0: sem deslocamento no mobile, md:mt-[-430px] mantém o ajuste original do desktop */}
                <div className='order-1 md:order-2 mt-0 md:ml-12 md:mt-[-430px]'>
                    <img
                        src={profileImg}
                        alt='Nicolas Campos'
                        className='w-30 h-30 md:w-60 md:h-60 rounded-full object-cover'
                    ></img>
                </div>

            {/* Bloco de texto — vem depois no mobile (fica abaixo da foto)
            order-2 md:order-1: garante a ordem visual correta nas duas telas
            text-center md:text-left: centraliza no mobile, alinha à esquerda no desktop
            gap-3 md:gap-6: espaçamento entre parágrafos reduzido no mobile */}
            <div className='order-2 md:order-1 flex flex-col items-center md:items-start gap-3 md:gap-6 max-w-xl'>
                
                {/* text-2xl no mobile (reduzido pra caber sem scroll), md:text-6xl mantém o original */}
                <h1 className='text-3xl md:text-6xl font-bold leading-tight' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.title1')}<br /> {t('about.title2')}
                </h1>

                {/* text-xs no mobile, md:text-base mantém o original */}
                <p className='text-sm md:text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph1')}
                </p>

                <p className='text-sm md:text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                   {t('about.paragraph2')}
                </p>

                <p className='text-sm md:text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph3Start')}{' '}
                    <span style={{ color: '#F5A623'}}>{t('about.paragraph3Highlight')}</span>, {t('about.paragraph3End')}
                </p>

                <p className='text-sm md:text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph4')}
                </p>

                <motion.div
                    className='flex items-center gap-2 mt-4 cursor-pointer'
                    onClick={() => navigate('/projects')}
                    whileHover={{ y: -3}}
                    transition={{ type: 'spring', stiffness: 300}}
                >
                    <span className='text-base' style={{ color: isDark ? '#ffffff' : '#2C2C2C' }}>
                        {t('about.myProjects')}
                    </span>
                    <ArrowDown size={20} style={{ color: isDark ? '#ffffff' : '#2C2C2C', transform: 'rotate(-90deg)'}}/>
                </motion.div>
            </div>
        </div>
    )
}