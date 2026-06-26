import { useNavigate } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import profileImg from '../assets/profile.img.jpeg'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'
import  Typewriter  from 'typewriter-effect'

interface AboutProps {
    isDark: boolean
}

export default function About({ isDark }: AboutProps) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    {/* md:px-32: reduzido de px-80 para px-32, puxando todo o conteúdo mais para a esquerda no desktop */}
    return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center h-full px-10 md:px-32 py-4 md:py-37 gap-2 md:gap-20 overflow-hidden'>

    {/* w-16 h-16: foto bem menor no mobile (era w-30), md:w-60 md:h-60 mantém o original */}
    <div className='order-1 md:order-2 mb-2 md:mb-0 md:mt-0 md:self-start'>
        <img
            src={profileImg}
            alt='Nicolas Campos'
            className='w-27 h-27 md:w-60 md:h-60 rounded-full object-cover'
        ></img>
    </div>

    {/*Container que armazena o texto principal e os paragráfos*/}
    <div className='order-2 md:order-1 flex flex-col items-center md:items-start gap-3.5 md:gap-6 max-w-2xl'>
        
        {/* text-lg no mobile (era text-3xl), md:text-6xl mantém o original */}
        <h1 className='min-h-20 md:min-h-40 text-center md:text-left text-3xl md:text-6xl font-bold leading-tight' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
            <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString(t('about.title1'))
                    .typeString('\n')
                    .typeString(t('about.title2'))
                    .start();
            }   }
            />
        </h1>

        {/* text-[11px] no mobile (era text-sm), md:text-base mantém o original */}
        <p className='text-[12px] md:text-base leading-snug md:leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
            {t('about.paragraph1')}
        </p>

        <p className='text-[12px] md:text-base leading-snug md:leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
           {t('about.paragraph2')}
        </p>

        <p className='text-[12px] md:text-base leading-snug md:leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
            {t('about.paragraph3Start')}{' '}
            <span style={{ color: '#F5A623'}}>{t('about.paragraph3Highlight')}</span>, {t('about.paragraph3End')}
        </p>

        <p className='text-[12px] md:text-base leading-snug md:leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
            {t('about.paragraph4')}
        </p>

        <motion.div
            className='flex items-center gap-2 mt-1 md:mt-4 cursor-pointer'
            onClick={() => navigate('/projects')}
            whileHover={{ y: -3}}
            transition={{ type: 'spring', stiffness: 300}}
        >
            <span className='text-sm md:text-base' style={{ color: isDark ? '#ffffff' : '#2C2C2C' }}>
                {t('about.myProjects')}
            </span>
            <ArrowDown size={14} className='md:size-5' style={{ color: isDark ? '#ffffff' : '#2C2C2C', transform: 'rotate(-90deg)'}}/>
        </motion.div>
    </div>
</div>
    )
}