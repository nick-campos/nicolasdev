// Este componente cria o botão visual PT/EN.
// Ele mostra o idioma atual em destaque e chama toggleLanguage quando o usuário clica.
interface TranslateToggleProps {
    isDark: boolean
    currentLanguage: string
    toggleLanguage: () => void
}
function TranslateToggle({ isDark, currentLanguage, toggleLanguage }: TranslateToggleProps) {
    
    {/*Mobile: menor, horizontal, PT | EN
        Desktop: volta para vertical por causa do md:flex-col
        Mobile: texto menor com text-[10px]
        Desktop: volta para text-sm*/}
    return(
        <button
            type='button'
            onClick={toggleLanguage}
            aria-label={"Trocar idioma"}
            className="inline-flex items-center gap-0.5 rounded-full border px-1 py-1 text-[10px] font-medium transition hover:opacity-80 md:flex-col md:gap-1 md:px-3 md:py-1.5 md:text-sm" 
            style={{ color: isDark ? '#ffffff' : '#2C2C2C', borderColor: isDark ? '#ffffff' : '#2C2C2C',}}
        >
            <span className={currentLanguage === 'pt' ? 'font-bold opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}>PT</span>
            <span className='opacity-40'>—</span>
            <span className={currentLanguage === 'en' ? 'font-bold opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}>EN</span>
        </button>
    )
}

export default TranslateToggle