<h1 align="center">
  <img src="https://img.icons8.com/emoji/96/hamburger-emoji.png" width="48"/>
  <br>
  <strong>Project Burguer</strong>
</h1>

<p align="center">
  <b>
    Sistema moderno de pedidos para hamburguerias, com interface intuitiva e gestão eficiente.<br>
    Experimente, aprimore processos e leve sua hamburgueria para o próximo nível!
  </b>
</p>

---

## 🚀 Principais Funcionalidades

<div align="center">

<table>
  <tr>
    <td align="center" width="300">📦<br><b>Cadastro e gestão de pedidos</b></td>
    <td align="center" width="300">🍔<br><b>Visualização do cardápio e personalização de hambúrgueres</b></td>
  </tr>
  <tr>
    <td align="center">🔄<br>Simulação de backend via <b>JSON Server (CRUD)</b></td>
    <td align="center">🚦<br>Navegação SPA com <b>Vue Router</b></td>
  </tr>
  <tr>
    <td align="center">🔗<br>Integração com API utilizando <b>Axios</b></td>
    <td align="center">♻️<br>Componentização e reutilização com <b>Vue 3</b></td>
  </tr>
  <tr>
    <td align="center" colspan="2">🧪<br>Testes unitários com <b>Vitest + Vue Test Utils</b></td>
  </tr>
</table>

</div>

---

## 🛠️ Tecnologias

<div align="center">

**Vue.js 3** &nbsp; | &nbsp;
**Vue Router 4** &nbsp; | &nbsp;
**Axios** &nbsp; | &nbsp;
**JSON Server** &nbsp; | &nbsp;
**Vitest** &nbsp; | &nbsp;
**NPM** &nbsp; | &nbsp;
**Babel**

</div>

---

## 📁 Estrutura do Projeto

```
project_burguer/
├── db/                 # Dados fake para JSON Server
│   └── db.json
├── src/                # Código-fonte principal
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── views/
│   └── App.vue
├── package.json        # Dependências, scripts e config
└── ...
```

---

## ⚡ Como Rodar Localmente

> **Pré-requisitos:** Node.js 14+, npm 6+ ou yarn

```bash
# Clone o repositório
git clone https://github.com/Eduardolimacrr/project_burguer.git
cd project_burguer

# Instale as dependências
npm install

# Inicie o backend fake (JSON Server)
npm run backend
# Disponível geralmente em http://localhost:3000

# Em outro terminal, suba o frontend Vue.js
npm run serve
# Acesse http://localhost:8080
```

---

## 🧪 Scripts Úteis

| Script              | Descrição                                  |
|---------------------|--------------------------------------------|
| `npm run serve`     | Servidor de desenvolvimento Vue            |
| `npm run build`     | Build de produção                          |
| `npm run backend`   | Sobe o JSON Server em `db/db.json`         |
| `npm run test`      | Roda testes unitários (Vitest)             |
| `npm run lint`      | Lint no código                             |

---

## 🔬 Testes

Utilizamos o **Vitest** para testes unitários. Para rodar:

```bash
npm run test
```

---

## 🤝 Contribuição

1. Faça um fork
2. Crie uma branch (`git checkout -b feature/nome-feature`)
3. Commit suas alterações (`git commit -m 'feat: descrição'`)
4. Push na branch (`git push origin feature/nome-feature`)
5. Abra um Pull Request

---


<p align="center">
  <b>
    Feito com <span style="color: #e25555;">&#9829;</span> por <a href="https://github.com/Eduardolimacrr">Eduardo Lima</a><br>
    Projeto educacional e de demonstração.
  </b>
</p>
