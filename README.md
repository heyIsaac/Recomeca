# ReComeçar 60+ | Plataforma de Recolocação Digital

Uma plataforma web moderna e acessível desenvolvida para ajudar profissionais 60+ a se reconectarem com o mercado de trabalho através de cursos especializados em tecnologia.

## 📋 Sobre o Projeto

O **ReComeçar 60+** é uma plataforma educacional focada em oferecer cursos de tecnologia adaptados para pessoas com mais de 60 anos, facilitando sua recolocação no mercado de trabalho digital. O projeto foi desenvolvido com foco em acessibilidade, usabilidade e design moderno, seguindo as melhores práticas de UX/UI para o público idoso.

## ✨ Características Principais

-   🎨 **Design Moderno e Acessível**: Interface limpa e intuitiva, otimizada para usuários 60+
-   📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
-   🎯 **Navegação Intuitiva**: Menu mobile com drawer lateral para fácil acesso
-   📚 **Catálogo de Cursos**: Cursos especializados em IA, Dados, Cloud, Web e mais
-   💬 **Histórias Inspiradoras**: Depoimentos de profissionais que se recolocaram
-   ❓ **FAQ Interativo**: Seção de perguntas frequentes para esclarecer dúvidas
-   📧 **Formulário de Contato**: Sistema completo de contato com validação
-   🎨 **Componentes Reutilizáveis**: Baseado em shadcn/ui para consistência visual

## 🛠️ Tecnologias Utilizadas

### Core

-   **Next.js 16.0.3** - Framework React com App Router
-   **React 19.2.0** - Biblioteca JavaScript para interfaces
-   **TypeScript 5** - Tipagem estática para JavaScript

### Estilização

-   **Tailwind CSS 4.1.9** - Framework CSS utility-first
-   **PostCSS** - Processador CSS
-   **Fonte Afacad** - Tipografia otimizada para leitura

### Componentes UI

-   **Radix UI** - Componentes acessíveis e sem estilo
-   **shadcn/ui** - Componentes customizáveis baseados em Radix UI
-   **Lucide React** - Biblioteca de ícones

### Validação e Formulários

-   **React Hook Form 7.60.0** - Gerenciamento de formulários
-   **Zod 3.25.76** - Validação de schemas TypeScript-first
-   **@hookform/resolvers** - Resolvers para React Hook Form

### Outras Dependências

-   **Vercel Analytics** - Analytics para produção
-   **date-fns** - Manipulação de datas
-   **class-variance-authority** - Gerenciamento de variantes de classes
-   **clsx** e **tailwind-merge** - Utilitários para classes CSS

## 📁 Estrutura do Projeto

```
tetse/
├── app/
│   ├── _components/          # Componentes React
│   │   ├── ui/              # Componentes UI base (Button, Dialog, Sheet)
│   │   ├── Benefits.tsx     # Seção de benefícios
│   │   ├── ContactForm.tsx  # Formulário de contato
│   │   ├── FAQ.tsx          # Perguntas frequentes
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   ├── Hero.tsx         # Seção hero principal
│   │   ├── InspiringStories.tsx  # Histórias inspiradoras
│   │   ├── PopularCourses.tsx   # Cursos populares
│   │   └── StoryDetailModal.tsx  # Modal de detalhes da história
│   ├── _hooks/              # Custom hooks
│   │   └── useFormValidation.ts
│   ├── _services/           # Serviços
│   │   └── contactService.ts
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── data/
│   └── stories.json        # Dados das histórias inspiradoras
├── lib/
│   └── utils.ts            # Funções utilitárias
├── public/                 # Arquivos estáticos
│   ├── logo.png
│   ├── woman.png
│   ├── benefits-img.png
│   ├── banner.png
│   └── *.avif             # Imagens dos cursos
├── next.config.ts          # Configuração do Next.js
├── tsconfig.json           # Configuração TypeScript
├── postcss.config.mjs      # Configuração PostCSS
└── package.json            # Dependências do projeto
```

## 🚀 Instalação e Configuração

### Pré-requisitos

-   Node.js 18+ ou superior
-   pnpm (gerenciador de pacotes recomendado) ou npm/yarn

### Passos para Instalação

1. **Clone o repositório**

    ```bash
    git clone <url-do-repositorio> recomeca
    cd recomeca
    ```

2. **Instale as dependências**

    ```bash
    pnpm install
    # ou
    npm install
    ```

3. **Execute o servidor de desenvolvimento**

    ```bash
    pnpm dev
    # ou
    npm run dev
    ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Produção
pnpm build        # Cria build de produção
pnpm start        # Inicia servidor de produção

# Qualidade de Código
pnpm lint         # Executa ESLint
```

## 🎨 Componentes Principais

### Header

-   Navegação responsiva com menu mobile
-   Drawer lateral para dispositivos móveis
-   Logo e links de navegação
-   Botão CTA "Inscrever-se"

### Hero

-   Seção principal com call-to-action
-   Imagem destacada
-   Botões de ação principais
-   Banner de empresas parceiras

### Benefits

-   Lista de benefícios com ícones
-   Layout em duas colunas (imagem + conteúdo)
-   Design focado em legibilidade

### PopularCourses

-   Grid de cursos com filtros por categoria
-   Cards informativos com imagens
-   Sistema de categorização (IA, Dados, Web, etc.)

### InspiringStories

-   Cards de depoimentos
-   Modal de detalhes ao clicar
-   Dados carregados de JSON

### FAQ

-   Seção de perguntas frequentes
-   Accordion interativo
-   Organização por categorias

### ContactForm

-   Formulário completo com validação
-   Máscara de telefone
-   Feedback visual de envio
-   Integração com serviço de contato

## 🎯 Design e Acessibilidade

### Paleta de Cores

-   **Rosa Primário**: `#ff4589`
-   **Roxo Primário**: `#7f05ea`
-   **Texto**: `#212121` (cinza escuro)
-   **Fundo**: Branco e tons de cinza claro

### Tipografia

-   **Fonte Principal**: Afacad (Google Fonts)
-   Tamanhos otimizados para leitura (mínimo 16px)
-   Contraste adequado para acessibilidade

### Acessibilidade

-   ✅ Navegação por teclado
-   ✅ Foco visível em elementos interativos
-   ✅ Atributos ARIA apropriados
-   ✅ Textos alternativos em imagens
-   ✅ Contraste de cores WCAG AA

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints otimizados:

-   **Mobile**: < 640px
-   **Tablet**: 640px - 1024px
-   **Desktop**: > 1024px

## 📝 Estrutura de Dados

### Stories (Histórias Inspiradoras)

As histórias são carregadas de `data/stories.json` com a seguinte estrutura:

```json
{
  "stories": [
    {
      "id": 1,
      "name": "Nome",
      "age": 45,
      "location": "Cidade, Estado",
      "quote": "Citação",
      "from": "Cargo anterior",
      "to": "Novo cargo",
      "stats": { ... },
      "resultado": "...",
      "desafios": "...",
      "cursos": [...],
      "dica": "..."
    }
  ]
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

**Desenvolvido com ❤️ para ajudar profissionais 60+ a se reconectarem com o mercado de trabalho**
