// Importa o hook de navegação do React Router
import { useNavigate, useLocation } from 'react-router-dom'

// Importa os ícones da Lucide React
import { Home, User, Code2, Mail, Icon } from 'lucide-react'
import { motion, AnimatePresence, transform } from 'framer-motion'

// Array com os dados de cada item de navegação da sidebar
// path: rota para onde o item direciona
// icon: componente de ícone da Lucide React
// label: texto alternativo para acessibilidade
const navIcons = [
    { path: '/', icon: Home, label:'Home'},
    { path: '/about', icon: User, label: 'Sobre mim'},
    { path: '/projects', icon: Code2, label: 'Projetos'},
    { path: '/findme', icon: Mail, label: 'Me encontre'},
]

// Componente da Sidebar — barra lateral fixa em todas as páginas
// useNavigate: usamos para redirecionar ao clicar em um ícone
// useLocation: usamos para saber qual página está ativa no momento
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        // Sidebar fixa na lateral esquerda, ocupando toda a altura da tela
        <aside className='w-20 min-h-screen flex flex-col items-center py-8 gap-8 border-r border-gray-300'
            style={{ backgroundColor: '#E5E0D7' }}>

                {/*Logo*/}
                <div
                    className='flex flex-col cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    <span className='font-bold text-xl leading-none' style={{ color: '#F5A623' }}>Nick</span>
                    <span className='font-bold text-xl leading-none mt-[-6px]' style={{ color: '#F5A623' }}>Dev</span>
                </div>

                {/*Linha abaixo do nome*/}
                <div className='w-8 h-px' style={{backgroundColor: '#000000'}}/>

                {/* Mapeia o array navItems e renderiza um ícone para cada item
                location.pathname: compara com o path do item para saber qual está ativo
                O ícone ativo recebe a cor laranja, os demais ficam em cinza escuro */}
                <nav className='flex flex-col items-center gap-8'>
                    {navIcons.map(({ path, icon: Icon, label }) => {
                        const isAtivo = location.pathname === path
                        return (
                            <button
                                key={path}
                                onClick={() => navigate(path)}
                                aria-label={label}
                                className='relative flex items-center cursor-pointer transition-colors duration-200 hover:bg-gray-200 rounded-lg p-2'
                                style={{ color: isAtivo ? '#F5A623' : '#2C2C2C' }}
                            >
                                {/* Barrinha azul animada — desliza para cima ou para baixo
                                    layoutId: o framer-motion usa esse id para animar
                                    a  transição entre posições quando o ícone ativo muda */}
                                 {isAtivo && (
                                    <motion.span
                                        layoutId='activeIndicator'
                                        className='absolute left-[-20px] top-1/2 h-6 w-1 rounded-r-full'
                                        style={{ backgroundColor: '#3B82F6', transform: 'translateY(-50%)' }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <Icon size={22} />
                            </button>
                        )
                    })}
                </nav>
            </aside>
    )
}