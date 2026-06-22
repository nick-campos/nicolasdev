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

  const sideBarStyle = isDark ? 'bg-[#121212]' : 'bg-[#E5E0D7]'

  return (
    <aside
      className={`w-24 h-screen overflow-hidden flex flex-col items-center border-r border-gray-300 ${sideBarStyle}`}
    >
      <div className="flex flex-col items-center w-full pt-8">
        <div
          className="flex flex-col items-start w-full pl-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="font-bold text-xl leading-none" style={{ color: '#F5A623' }}>
            Dev
          </span>

          <span className="font-bold text-xl leading-none" style={{ color: '#F5A623' }}>
            Nicolas
          </span>
        </div>

        <div
          className="w-10 h-px mt-8"
          style={{ backgroundColor: isDark ? '#FFFFFF' : '#2C2C2C' }}
        />

        <nav className="flex flex-col items-center gap-8 text-2xl transition-colors mt-10">
          {navIcons.map(({ path, icon: Icon, labelKey }) => {
            const isAtivo = location.pathname === path

            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                aria-label={t(labelKey)}
                className="relative flex items-center cursor-pointer transition-colors duration-200 hover:bg-gray-200 rounded-lg p-2"
                style={{
                  color: isAtivo ? '#F5A623' : isDark ? '#FFFFFF' : '#2C2C2C',
                }}
              >
                {isAtivo && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -left-7 h-10 w-2 rounded-r-full"
                    style={{
                      backgroundColor: isDark ? '#F5A623' : '#3B82F6',
                      transform: 'translateY(-50%)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <Icon size={22} />
              </button>
            )
          })}
        </nav>
      </div>

      <div
        className="mt-auto flex flex-col items-center gap-4 pb-8"
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