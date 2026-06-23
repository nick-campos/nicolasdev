import { useNavigate, useLocation } from 'react-router-dom'
import { Home, User, Code2, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import ThemeToggle from './ThemeToggle'
import TranslateToggle from './TranslateToggle'
import { useLanguage } from '../hooks/useTranslation'

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

const navIcons = [
  { path: '/', icon: Home, labelKey: 'sidebar.home' },
  { path: '/about', icon: User, labelKey: 'sidebar.about' },
  { path: '/projects', icon: Code2, labelKey: 'sidebar.projects' },
  { path: '/findme', icon: Mail, labelKey: 'sidebar.findme' },
]

export default function Sidebar({ isDark, toggleTheme }: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const { currentLanguage, toggleLanguage } = useLanguage()

  const sideBarStyle = isDark ? 'bg-[#22281F]' : 'bg-[#E5E0D7]'

  return (
    //No mobile, vira header horizontal no topo, no desktop volta a ser sidebar vertical
    <aside
      className={`fixed top-0 left-0 z-50
      w-full h-16 flex items-center justify-between px-4
      border-b border-gray-200

      md:w-24 md:h-screen md:flex-col md:items-center md:justify-start
      md:px-0 md:border-b-0 md:border-r
      md:overflow-hidden
     ${sideBarStyle}`}
    >

      {/*Mobile: elementos ficam em linha, distribuídos no header 
        Desktop: elementos voltam para coluna, como sidebar*/}
      <div className="flex w-full items-center justify-between md:flex-col md:justify-start md:pt-8">
        
        {/*No mobile: texto menor com text-base
          No desktop: volta para text-xl
          No mobile: sem pl-5, para não empurrar demais
          No desktop: usa md:pl-5 */}
        <div
          className="flex flex-col items-start cursor-pointer md:w-full md:pl-3"
          onClick={() => navigate('/')}
        >
          <span className="font-bold text-base leading-none md:text-xl" style={{ color: '#F5A623' }}>
            Dev
          </span>

          <span className="font-bold text-base leading-none mt-0 md:text-xl" style={{ color: '#F5A623' }}>
            Nicolas
          </span>
        </div>

        {/*hidden: escondido no mobile
           block: aparece no desktop*/}
        <div
          className="hidden md:block w-10 h-px mt-8"
          style={{ backgroundColor: isDark ? '#FFFFFF' : '#2C2C2C' }}
        />

        {/*Mobile: flex em linha por padrão
          Mobile: gap-4 para caber melhor no header
          Desktop: md:flex-col
          Desktop: md:gap-8
          Desktop: md:mt-10 */}
        <nav className="flex items-center gap-3 text-2xl transition-colors md:mt-10 md:flex-col md:gap-8">
          {navIcons.map(({ path, icon: Icon, labelKey }) => {
            const isAtivo = location.pathname === path

            return (
              //Mobile: padding menor - Desktop: padding norma
              <button
                key={path}
                onClick={() => navigate(path)}
                aria-label={t(labelKey)}
                className={`relative flex items-center cursor-pointer transition-colors duration-200 rounded-lg p-1.5 md:p-2 ${!isDark ? 'hover:bg-gray-200' : ''}`}
                style={{
                color: isAtivo ? '#F5A623' : isDark ? '#FFFFFF' : '#2C2C2C',
                }}
              >
                {/*hidden: esconde no mobile - block: mostra no desktop*/}
                {isAtivo && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="hidden md:block absolute -left-7 top-1/70 h-10 w-1 rounded-r-full"
                    style={{
                    backgroundColor: isDark ? '#F5A623' : '#3B82F6',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/*Mobile: ícone com 20px - Desktop: ícone volta para 22px*/}
                <Icon size={20} className="md:size-[22px]"/>
              </button>
            )
          })}
        </nav>
      </div>
      
      {/*Mobile: toggles ficam em linha, ao lado dos ícones
        Desktop: voltam para coluna no final da sidebar
        Mobile: gap-2
        Desktop: gap-4*/}
      <div
        className="ml-4 flex items-center gap-2 md:mt-auto md:flex-col md:gap-4 md:pb-8"
        style={{ color: isDark ? '#ffffff' : '#2C2C2C' }}
      >
        <TranslateToggle
          isDark={isDark}
          currentLanguage={currentLanguage}
          toggleLanguage={toggleLanguage}
        />

        <ThemeToggle
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      </div>
    </aside>
  )
}