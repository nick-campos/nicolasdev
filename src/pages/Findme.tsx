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

    {/* flex-col no mobile (empilhado), md:flex-row restaura o lado-a-lado no desktop, como era antes */}
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-20 py-6 md:py-20 gap-3 md:gap-16'>
      
      {/* Coluna 1: só título e descrição */}
      <div className='flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-7 max-w-md'>
        
        {/* text-3xl no mobile, md:text-5xl mantém o tamanho original*/}
        <h1 className='text-2xl md:text-5xl font-bold leading-tight md:max-w-[480px]' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
          {t('contact.title1')}<br /> {t('contact.title2')}
        </h1>

        <p className='text-sm md:text-base leading-snug md:leading-relaxed' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>
          {t('contact.subtitle')}
        </p>
      </div>

      {/* Coluna 2: links sociais, agora isolados como segunda coluna no desktop */}
      <div className='flex flex-col items-center gap-2 md:gap-5'>
        <a
        href='https://github.com/nick-campos'
        target='_blank'
        rel='noopener noreferrer'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <div className='flex items-center gap-2'>
          <FaGithub size={18} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}} />
          <span className='text-xs font-medium' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>GitHub:</span>
        </div>
        <span className='text-xs group-hover:underline' style={{ color: '#F5A623' }}>github.com/nick-campos</span>
        </a>

        <a
        href='https://linkedin.com/in/nicolascampos'
        target='_blank'
        rel='noopener noreferrer'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <div className='flex items-center gap-2'>
          <FaLinkedin size={18} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}} />
          <span className='text-xs font-medium' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>LinkedIn:</span>
        </div>
        <span className='text-xs group-hover:underline' style={{ color: '#F5A623' }}>linkedin.com/in/nicolascampos</span>
        </a>

        <a
        href='mailto:nicolascampos611@gmail.com'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <div className='flex items-center gap-2'>
          <Mail size={18} style={{ color: isDark ? '#ffffff' : '#2C2C2C'}} />
          <span className='text-xs font-medium' style={{ color: isDark ? '#ffffff' : '#2C2C2C'}}>Email: </span>
        </div>
        <span className='text-xs group-hover:underline' style={{ color: '#F5A623' }}>nicolascampos611@gmail.com</span>
        </a>
      </div>
      
      {/* Coluna 3: formulário, sem mudança */}
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 md:gap-4 p-4 md:p-8 rounded-2xl shadow-lg max-w-md w-full'
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