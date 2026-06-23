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

    {/* flex-row mantido em todas as telas (mesmo layout, só redimensionado)
    px-6: padding lateral reduzido no mobile, md:px-80 mantém o respiro original do desktop */}
    return (
        <div className='flex items-center justify-start min-h-screen px-6 md:px-80 py-20'>

            <div className='flex flex-col gap-6 max-w-xl'>
                {/* text-2xl no mobile, md:text-6xl mantém o tamanho original do desktop */}
                <h1 className='text-4xl md:text-6xl font-bold leading-tight' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.title1')}<br /> {t('about.title2')}
                </h1>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph1')}
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                   {t('about.paragraph2')}
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph3Start')}{' '}
                    <span style={{ color: '#F5A623'}}>{t('about.paragraph3Highlight')}</span>, {t('about.paragraph3End')}
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
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

            {/*w-24 h-24: tamanho reduzido no mobile, md:w-60 md:h-60 mantém o tamanho original
                ml-4 mt-[-150px]: deslocamento proporcionalmente menor no mobile, md: mantém o original */}
                <div className='ml-[-110px] mt-[-490px] md:ml-12 md:mt-[-430px]'>
                    <img
                        src={profileImg}
                        alt='Nicolas Campos'
                        className='w-30 h-30 md:w-60 md:h-60 rounded-full object-cover'
                    ></img>
                </div>
        </div>
    )
}