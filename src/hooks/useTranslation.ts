// Este hook guarda a lógica de troca de idioma.
// Ele pega o idioma atual do i18n e alterna entre "pt" e "en" quando a função toggleLanguage for chamada.
import { useTranslation } from 'react-i18next'

export function useLanguage() {
    const { i18n } = useTranslation()

    const currentLanguage = i18n.language

    function toggleLanguage() {
        const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt'

    i18n.changeLanguage(nextLanguage)
}

return { currentLanguage, toggleLanguage }
}
