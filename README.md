# 🌐 Cifroo Website — Simulador de Palco & Portal Oficial

Portal oficial e simulador interativo do **Cifroo Mobile**, construído com **React 18**, **Vite** e **Tailwind CSS**.

---

## 🚀 Tecnologias Utilizadas
- **React 18** (Arquitetura modular em componentes)
- **Vite** (Build ultra-rápido e Hot Module Replacement)
- **Tailwind CSS** (Design brutalista Dark Studio `#121212`, `#1F1F1F`, `#FF6D00`)
- **JetBrains Mono & Plus Jakarta Sans** (Tipografia técnica de estúdio)

---

## 📁 Estrutura do Projeto
```
website/
├── public/              # Arquivos estáticos (_redirects, version.json)
├── src/
│   ├── components/      # Componentes visuais desacoplados
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Changelog.jsx
│   │   ├── Simulator.jsx
│   │   ├── WhyCifroo.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── DownloadSection.jsx
│   │   ├── Faq.jsx
│   │   ├── Footer.jsx
│   │   └── Icons.jsx
│   ├── data/            # Dados e constantes centralizadas
│   │   ├── constants.js
│   │   ├── songs.js
│   │   ├── changelog.js
│   │   ├── features.js
│   │   └── faq.js
│   ├── utils/           # Utilitários de harmonia e transposição
│   │   └── transposer.js
│   ├── App.jsx          # Orquestrador da página
│   ├── main.jsx         # Ponto de entrada React
│   └── index.css        # Diretivas do Tailwind e scrollbar
├── index.html           # Ponto de entrada Vite
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind
├── vite.config.js       # Configuração do Vite
└── version.json         # Manifesto da versão do aplicativo
```

---

## 🛠️ Como Executar

### 1. Instalar dependências:
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento:
```bash
npm run dev
```

### 3. Gerar a compilação de produção:
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 📄 Licença
Propriedade de [BlackBlueDev](https://github.com/BlackBlueDev). Todos os direitos reservados.
