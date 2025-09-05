# 🧪 Testes Automatizados - UOL Termos de Uso

Repositório com os testes automatizados em **Cypress** e **Playwright** para validar a **data da última atualização** dos termos de uso da UOL.

---

## 📂 Estrutura do Projeto
```
uol-termos-teste/
├── cypress/
│   ├── e2e/
│   │   └── uol-termos.cy.js
│   └── cypress.config.js
└── playwright/
    ├── tests/
    │   └── uol-termos.spec.js
    └── playwright.config.js
```

---

## 🚀 Tecnologias Utilizadas
- Node.js (>= 18)
- Cypress (>= 13)
- Playwright (>= 1.48)

---

## ⚙️ Instalação
Clone o repositório e entre na pasta do projeto:
```bash
git clone https://github.com/seu-usuario/uol-termos-teste.git
cd uol-termos-teste
```

Instale as dependências:
```bash
npm install
```

---

## ▶️ Executando os Testes

### 🔹 Cypress
Abrir o runner interativo:
```bash
npm run cypress:open
```

Rodar em modo headless:
```bash
npm run cypress:run
```

### 🔹 Playwright
Rodar todos os testes:
```bash
npm run playwright:test
```

Executar com UI (modo interativo):
```bash
npm run playwright:ui
```

---

## ✅ O que é validado
1. Acessa a página de Termos de Uso da UOL.
2. Busca pela frase **"Última atualização"**.
3. Valida se a informação existe.
4. Exibe no console a data encontrada.

---

👨‍💻 Desenvolvido para teste técnico.
