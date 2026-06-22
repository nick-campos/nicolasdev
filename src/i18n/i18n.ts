// Este bloco mostra a configuração base do i18n.
// Ele conecta o i18next ao React usando initReactI18next.
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pt from './locales/pt.json'
import en from './locales/en.json'

i18n 
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: pt,
            },
            en: {
                translation: en,
            },
        },
        lng: 'pt',
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false,
        },
    })

    export default i18n