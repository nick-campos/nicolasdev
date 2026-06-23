// useState: controla os valores dos campos do formulário
// useRef: referencia o formulário para o EmailJS conseguir capturar os dados
import { useState, useRef } from 'react'

// Biblioteca do EmailJS para enviar o formulário sem precisar de backend
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface FindmeProps {
    isDark: boolean
}

export default function Findme({ isDark }: FindmeProps) {
  // Referência ao formulário, usada pelo EmailJS para capturar os campos
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()

  // Controla o estado de envio: 'idle' | 'sending' | 'success' | 'error'
  // Usado para dar feedback visual ao usuário durante o envio
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Função chamada ao enviar o formulário
  // e.preventDefault(): impede o recarregamento padrão da página
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return 

    setStatus('sending')

    emailjs
      .sendForm(
        'service_px2ssuj', // Service ID
        'template_6msmn3n', // Template ID
        formRef.current,
        'jXblnnLB09u2SSTGx' // Public Key
      )
      .then(() => {
        setStatus('success')
        formRef.current?.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    // Container principal, mesma lógica de espaçamento das outras páginas
    //px-6: padding lateral reduzido no mobile, md:px-20 mantém o original
    //gap-6: espaçamento reduzido no mobile, md:gap-16 mantém o original
    <div className='flex items-center justify-center min-h-screen px-6 md:px-20 py-20 gap-6 md:gap-16'>
      {/* Coluna esquerda — título, descrição e links sociais */}
      <div className='flex flex-col gap-6 max-w-md'>
        {/* text-3xl no mobile, md:text-5xl mantém o tamanho original*/}
        <h1 className='text-3xl md:text-5x1 font-bold leading-tight' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
          {t('contact.title1')}<br /> {t('contact.title2')}
        </h1>

        <p className='text-base leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
          {t('contact.subtitle')}
        </p>

      {/*Links sociais — GitHub, LinkedIn e Email
        gap-3: espaçamento reduzido no mobile, md:gap-5 mantém o original*/}
      <div className='flex flex-col gap-3 md:gap-5'>
        <a
        href='https://github.com/nick-campos'
        target='_blank'
        rel='noopener noreferrer'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <FaGithub size={20} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}} />
        <div className='flex flex-col'>
          <span className='text-sm font-medium' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>GitHub</span>
          <span className='text-sm group-hover:underline' style={{ color: '#F5A623' }}>github.com/nick-campos</span>
        </div>
        </a>

        <a
        href='https://linkedin.com/in/nicolascampos'
        target='_blank'
        rel='noopener noreferrer'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <FaLinkedin size={20} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}} />
        <div className='flex flex-col'>
          <span className='text-sm font-medium' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>LinkedIn</span>
          <span className='text-sm group-hover:underline' style={{ color: '#F5A623' }}>linkedin.com/in/nicolascampos</span>
        </div>
        </a>

        <a
        href='mailto:nicolascampos611@gmail.com'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <Mail size={20} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}} />
        <div className='flex flex-col'>
          <span className='text-sm font-medium' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>Email</span>
          <span className='text-sm group-hover:underline' style={{ color: '#F5A623' }}>nicolascampos611@gmail.com</span>
        </div>
        </a>
      </div>
      </div>
      
      {/* Coluna direita — formulário de contato 
      p-5: padding interno reduzido no mobile, md:p-8 mantém o original*/}
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 p-5 md:p-8 rounded-2xl shadow-lg max-w-md w-full'
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Campo Nome*/}
        <div className='flex flex-col gap-1'>
          <label className='text-xs font-semibold uppercase' style={{ color: '#888888' }}>
            {t('contact.yourName')}
          </label>
          <input
            type='text'
            name='from_name'
            required
            className='border rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400'
            style={{ borderColor: '#DDDDDD' }}
          />
        </div>

        {/*Campo Email*/}
        <div className='flex flex-col gap-1'>
          <label className='text-xs font-semibold uppercase' style={{ color: '#888888' }}>
            {t('contact.yourEmail')}
          </label>
          <input 
            type='email'
            name='from_email'
            required
            className='border rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400'
            style={{ borderColor: '#DDDDDD' }}
          />
        </div>

        {/*Campo Mensagem*/}
        <div className='flex flex-col gap-1'>
          <label className='text-xs font-semibold uppercase' style={{ color: '#888888' }}>
            {t('contact.yourMessage')}
          </label>
          <textarea 
            name='message'
            required
            rows={5}
            className='border rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400 resize-none'
            style={{ borderColor: '#DDDDDD' }}
          />
        </div>

        {/* Botão de envio — muda o texto conforme o status do envio */}
        <button
          type='submit'
          disabled={status === 'sending'}
          className='flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-medium cursor-pointer transition-colors duration-200'
          style={{ backgroundColor: '#F5A623', color: '#FFFFFF' }}
        >
          {status === 'sending' ? t('contact.sending') : t('contact.send')}
          {status !== 'sending' && <ArrowRight size={16} />}
        </button>

        {/* Mensagens de feedback */}
        {status === 'success' && (
          <p className='text-sm text-center' style={{ color: 'green'}}>
            {t('contact.success')}
          </p>
        )}
        {status === 'error' && (
          <p className='text-sm text-center' style={{ color: 'red'}}>
            {t('contact.error')}
          </p>
        )}
      </form>
    </div>
  )
}