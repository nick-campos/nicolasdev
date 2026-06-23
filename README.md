Nicolas Dev — Portfolio

Portfolio pessoal desenvolvido para apresentar projetos, experiência e formas de contato, com navegação fluida entre seções, suporte a múltiplos idiomas e design responsivo.


Demonstração

Acesso ao projeto em produção: https://nicolascampos.dev


Visão Geral

O projeto é uma aplicação single-page dividida em quatro seções principais (Home, About, Projects e Findme/Contact), com transições animadas entre páginas e navegação que responde tanto a cliques quanto ao scroll do mouse. A interface conta com alternância entre tema claro e escuro, suporte aos idiomas Português e Inglês, e um formulário de contato funcional integrado por e-mail.


Tecnologias Utilizadas

React — biblioteca para construção da interface
TypeScript — tipagem estática para maior segurança no desenvolvimento
Tailwind CSS v4 — estilização utilitária e responsiva
Framer Motion — animações de transição entre páginas e microinterações
React Router DOM — roteamento entre as seções da aplicação
react-i18next — internacionalização (i18n) com suporte a Português e Inglês
EmailJS — envio de mensagens do formulário de contato sem necessidade de backend
Lucide React / React Icons — ícones utilizados na interface


Funcionalidades

Navegação entre páginas via clique nos ícones da sidebar e via scroll do mouse
Transições de página animadas com AnimatePresence
Alternância entre tema claro e escuro
Alternância de idioma (Português/Inglês)
Formulário de contato com envio de e-mail e feedback visual de status (enviando, sucesso, erro)
Layout responsivo, com a sidebar se adaptando para um header horizontal em dispositivos móveis


Estrutura do Projeto

src/
├── assets/           # Imagens e arquivos estáticos
├── components/       # Componentes reutilizáveis (Sidebar, ThemeToggle, TranslateToggle)
├── hooks/            # Hooks customizados (tema, idioma)
├── pages/            # Páginas da aplicação (Home, About, Projects, Findme)
├── App.tsx           # Componente raiz, definição de rotas e layout geral
└── main.tsx          # Ponto de entrada da aplicação

Como Executar Localmente

Pré-requisitos

Node.js (versão 18 ou superior)
npm ou yarn


Passos

Clone o repositório:

bash   git clone https://github.com/nick-campos/nicolasdev.git


Acesse a pasta do projeto:

bash   cd nicolasdev


Instale as dependências:

bash   npm install


Configure as variáveis de ambiente necessárias para o envio de e-mail (EmailJS), criando um arquivo .env na raiz do projeto com as chaves de serviço, template e chave pública correspondentes.
Inicie o servidor de desenvolvimento:

bash   npm run dev

Acesse a aplicação em http://localhost:5173 (ou na porta indicada no terminal).


Autor

Nicolas Campos Francisco

GitHub: github.com/nick-campos
LinkedIn: linkedin.com/in/nicolascampos