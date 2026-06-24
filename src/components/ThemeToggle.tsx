import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
    isDark: boolean
    toggleTheme: () => void
}

function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {

    return (
        <button
            onClick={toggleTheme}
                className='text-sx px-2 py-1.9 rounded transition-colors cursor-pointer'
            >
                {isDark ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeToggle