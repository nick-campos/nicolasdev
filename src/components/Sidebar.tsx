// Importa o hook de navegação do React Router
import { useNavigate, useLocation } from 'react-router-dom'

// Importa os ícones da Lucide React
import { Home, User, Code2, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import TranslateToggle from './TranslateToggle'
import { useLanguage } from '../hooks/useTranslation'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
    isDark: boolean
    toggleTheme: () => void
}

// Array com os dados de cada item de navegação da sidebar
// path: rota para onde o item direciona
// icon: componente de ícone da Lucide React
// label: texto alternativo para acessibilidade
const navIcons = [
    { path: '/', icon: Home, labelKey:'sidebar.home'},
    { path: '/about', icon: User, labelKey: 'sidebar.about'},
    { path: '/projects', icon: Code2, labelKey: 'sidebar.projects'},
    { path: '/findme', icon: Mail, labelKey: 'sidebar.findme'},
]

// Componente da Sidebar — barra lateral fixa em todas as páginas
// useNavigate: usamos para redirecionar ao clicar em um ícone
// useLocation: usamos para saber qual página está ativa no momento
export default function Sidebar({ isDark, toggleTheme }: HeaderProps) {
    const navigate = useNavigate()
    const location = useLocation()
    // Este bloco chama o hook useLanguage dentro da Sidebar.
    const { currentLanguage, toggleLanguage } = useLanguage()

    const sideBarStyle = isDark
        ? 'bg-[#121212]' 
        : 'bg-[#E5E0D7]'

    const { t } = useTranslation()

    return (
        // Sidebar fixa na lateral esquerda, ocupando toda a altura da tela
        <aside className={`w-20 min-h-screen flex flex-col items-center py-5 gap-8 border-r border-gray-300 ${sideBarStyle}`}
        >

                {/*Logo*/}
                <div
                    className='flex flex-col cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    <span className='font-bold text-xl leading-none' style={{ color: '#F5A623' }}>Nick</span>
                    <span className='font-bold text-xl leading-none mt-[-6px]' style={{ color: '#F5A623' }}>Dev</span>
                </div>

                {/*Linha abaixo do nome*/}
                <div className='w-8 h-px' style={{backgroundColor: isDark ? '#FFFFFF' : '#2C2C2C'}}/>

                {/* Mapeia o array navItems e renderiza um ícone para cada item
                location.pathname: compara com o path do item para saber qual está ativo
                O ícone ativo recebe a cor laranja, os demais ficam em cinza escuro */}
                <nav className='flex flex-col items-center gap-8 text-2xl transition-colors'>
                    {navIcons.map(({ path, icon: Icon, labelKey }) => {
                        const isAtivo = location.pathname === path
                        return (
                            <button
                                key={path}
                                onClick={() => navigate(path)}
                                aria-label={t(labelKey)}
                                className='relative flex items-center cursor-pointer transition-colors duration-200 hover:bg-gray-200 rounded-lg p-2'
                                style={{ color: isAtivo ? '#F5A623' : isDark ? '#FFFFFF' : '#2C2C2C'}}
                            >
                                {/* Barrinha azul animada — desliza para cima ou para baixo
                                    layoutId: o framer-motion usa esse id para animar
                                    a  transição entre posições quando o ícone ativo muda */}
                                 {isAtivo && (
                                    <motion.span
                                        layoutId='activeIndicator'
                                        className='absolute left-[-18px] top-1/7 h-8 w-1 rounded-r-full'
                                        style={{ backgroundColor: isDark ? '#F5A623' : '#3B82F6', transform: 'translateY(-50%)' }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <Icon size={22} />
                            </button>
                        )
                    })}
                </nav>

                <div className='mt-auto pt-90'>
                    <TranslateToggle
                        isDark={isDark}
                        currentLanguage={currentLanguage}
                        toggleLanguage={toggleLanguage}
                    />
                </div>

                <div className='mt-auto pt-4' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
                    
                    <ThemeToggle 
                        isDark={isDark}
                        toggleTheme={toggleTheme}
                    />    
                </div>    
            </aside>
    )
}