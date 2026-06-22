// Este componente cria o botão visual PT/EN.
// Ele mostra o idioma atual em destaque e chama toggleLanguage quando o usuário clica.
interface TranslateToggleProps {
    isDark: boolean
    currentLanguage: string
    toggleLanguage: () => void
}
function TranslateToggle({ isDark, currentLanguage, toggleLanguage }: TranslateToggleProps) {
    return(
        <button
            type='button'
            onClick={toggleLanguage}
            aria-label={"Trocar idioma"}
            className="inline-flex flex-col items-center gap-1 rounded-full border px-3 py-2 text-sm font-medium transition hover:opacity-80" 
            style={{ color: isDark ? '#ffffff' : '#2C2C2C', borderColor: isDark ? '#ffffff' : '#2C2C2C',}}
        >
            <span className={currentLanguage === 'pt' ? 'font-bold opacity-100' : 'opacity-40'}>PT</span>
            <span className='opacity-40'>—</span>
            <span className={currentLanguage === 'en' ? 'font-bold opacity-100' : 'opacity-40'}>EN</span>
        </button>
    )
}

export default TranslateToggle