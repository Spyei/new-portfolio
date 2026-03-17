# Portfólio

Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS v4. Apresenta minha trajetória como desenvolvedor Full Stack, com projetos, experiências, formação acadêmica e formulário de contato.

## Features

- **i18n** — suporte a Português e Inglês, com persistência via `localStorage`
- **Modo Claro** — tema escuro com ícones e textos claros
- **Animações** — transições suaves com Framer Motion, incluindo nav pill animada e highlight SVG
- **Formulário de contato** — integrado com Web3Forms com feedback visual de sucesso/erro
- **Design responsivo** — sidebar adaptada para mobile e desktop
- **Performance** — sem dependências de i18n externas, zero overhead

## Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework principal (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização via `@theme` |
| [Framer Motion](https://www.framer-motion.com/) | Animações |
| [Lucide React](https://lucide.dev/) | Ícones |
| [Devicon](https://devicon.dev/) | Ícones de tecnologias |

## Estrutura

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── projetos/             # Página de projetos
│   ├── experiencia/          # Página de experiência
│   ├── educacao/             # Página de educação
│   └── contato/              # Página de contato
├── components/
│   ├── sidebar/              # Sidebar com nav pill animada + botão de idioma
│   ├── home/                 # Header, tecnologias e projeto atual
│   ├── cards/                # Cards de projeto, experiência, educação e certificado
│   ├── contact/              # Formulário e popup de feedback
│   └── ui/                   # Componentes reutilizáveis (Title, Button, Container…)
├── contexts/
│   └── theme.tsx             # Context de tema
│   └── i18n.tsx              # Context de internacionalização
├── hooks/
│   └── useFirstVisit.ts      # Hook para animações de primeira visita
├── utils
│   ├── projects.ts           # Dados de projetos (locale-aware)
│   ├── experiences.ts        # Dados de experiências (locale-aware)
│   ├── education.ts          # Dados de educação (locale-aware)
│   ├── technologies.tsx      # Mapa de tecnologias com ícones
│   └── animations.ts         # Helpers de animação (springElement, firstVisitDelay)
└── validators/
    └── form.tsx              # Validação do formulário de contato

public/
└── locales/
    ├── pt.json               # Traduções em Português
    └── en.json               # Traduções em Inglês
```

## Rodando localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (usa webpack — necessário para Tailwind v4 HMR)
npm run dev

# Build de produção
npm run build
npm start
```

> **Nota:** o script `dev` usa a flag `--webpack` propositalmente. O Turbopack tem incompatibilidade com o HMR do Tailwind v4.

## Contato

O formulário usa [Web3Forms](https://web3forms.com/) para envio de emails sem backend próprio. Para usar sua própria chave, substitua o `access_key` em `src/components/contact/form.tsx`.

## Licença

MIT