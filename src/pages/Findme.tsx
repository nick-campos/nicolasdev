// useState: controla os valores dos campos do formulário
// useRef: referencia o formulário para o EmailJS conseguir capturar os dados
import { useState, useRef } from 'react'

// Biblioteca do EmailJS para enviar o formulário sem precisar de backend
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowRight } from 'lucide-react'

export default function Findme() {
  // Referência ao formulário, usada pelo EmailJS para capturar os campos
  const formRef = useRef<HTMLFormElement>(null)

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
    <div className='flex items-center justify-center min-h-screen px-20 py-20 gap-16'>
      {/* Coluna esquerda — título, descrição e links sociais */}
      <div className='flex flex-col gap-6 max-w-md'>
        <h1 className='text-5xl font-bold leading-tight' style= {{ color:'#2C2C2C' }}>
          Vamos criar<br /> algo juntos?
        </h1>

        <p className='text-base leading-relaxed' style={{ color: '#2C2C2C' }}>
          Encontre-me online ou envie uma mensagem direta
        </p>
      </div>
      {/* Links sociais — GitHub, LinkedIn e Email
              Cada item é clicável e abre em uma nova aba */}
      <div className='flex flex-col gap-5 mt-4'>
        <a
        href='https://github.com/nick-campos'
        target='_blank'
        rel='noopener noreferrer'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <FaGithub size={20} style={{ color: '#000000'}} />
        <div className='flex flex-col'>
          <span className='text-sm font-medium' style={{ color: '#2C2C2C' }}>GitHub</span>
          <span className='text-sm group-hover:underline' style={{ color: '#F5A623' }}>github.com/nick-campos</span>
        </div>
        </a>

        <a
        href='https://linkedin.com/in/nicolascampos'
        target='_blank'
        rel='noopener noreferrer'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <FaLinkedin size={20} style={{ color: '#000000'}} />
        <div className='flex flex-col'>
          <span className='text-sm font-medium' style={{ color: '#2C2C2C' }}>LinkedIn</span>
          <span className='text-sm group-hover:underline' style={{ color: '#F5A623' }}>linkedin.com/in/nicolascampos</span>
        </div>
        </a>

        <a
        href='mailto:nicolascampos611@gmail.com'
        className="flex items-center gap-3 cursor-pointer group"
        >
        <Mail size={20} style={{ color: '#000000'}} />
        <div className='flex flex-col'>
          <span className='text-sm font-medium' style={{ color: '#2C2C2C' }}>Email</span>
          <span className='text-sm group-hover:underline' style={{ color: '#F5A623' }}>nicolascampos611@gmail.com</span>
        </div>
        </a>
      </div>
      
      {/* Coluna direita — formulário de contato */}
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 p-8 rounded-2xl shadow-lg max-w-md w-full'
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Campo Nome*/}
        <div className='flex flex-col gap-1'>
          <label className='text-xs font-semibold uppercase' style={{ color: '#888888' }}>
            Seu nome
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
            Seu email
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
            Sua mensagem
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
          {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
          {status !== 'sending' && <ArrowRight size={16} />}
        </button>

        {/* Mensagens de feedback */}
        {status === 'success' && (
          <p className='text-sm text-center' style={{ color: 'green'}}>
            Mensagem enviada com sucesso!
          </p>
        )}
        {status === 'error' && (
          <p className='text-sm text-center' style={{ color: 'red'}}>
            Erro ao enviar. Tente novamente.
          </p>
        )}
      </form>
    </div>
  )
}