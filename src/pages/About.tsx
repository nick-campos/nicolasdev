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

    return (
        <div className='flex items-center justify-start min-h-screen px-80 py-20'>

            <div className='flex flex-col gap-6 max-w-xl'>
                <h1 className='text-6xl font-bold leading-tight' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.title1')}<br /> {t('about.title2')}
                </h1>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph2')}
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                   {t('about.paragraph1')}
                </p>

                <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    {t('about.paragraph2')}{' '}
                    <span style={{ color: '#F5A623'}}>{t('about.paragraph3Start')}</span>, {t('about.paragraph3Highlight')}
                    {t('about.paragraph3End')}
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

            {/*Foto pessoal*/}
                <div className='ml-12 mt-[-430px]'>
                    <img
                        src={profileImg}
                        alt='Nicolas Campos'
                        className='w-60 h-60 rounded-full object-cover'
                    ></img>
                </div>
        </div>
    )
}