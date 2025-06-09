# 📚 Angular Book Catalog

Este é um projeto frontend desenvolvido em **Angular 16** com **Angular Material**, que permite gerenciar um catálogo de livros, autores e gêneros.

A aplicação se comunica com uma **API REST** já existente, consumindo endpoints para listagem, criação, edição e visualização de dados.

---

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse no navegador:
   ```
   http://localhost:4200
   ```

---

## 🧭 Funcionalidades

A aplicação possui navegação entre:

- 📚 Livros
- 👤 Autores
- 🏷️ Gêneros (Genres)

Com as seguintes ações para cada entidade:

- Listagem (com paginação para livros)
- Criação
- Edição
- Visualização de detalhes (livros)

---

## 🔗 Principais Endpoints Consumidos

### 📘 Books
- `GET /Books/list?page=1&pageSize=20&ordedBy=title&direction=asc` — livros paginados
- `POST /Books` — cria novo livro (`title`, `authorId`, `genrerId`)
- `PUT /Books/{id}` — edita um livro
- `GET /Books/{id}` — detalhes do livro
- `DELETE /Books/{id}` — remove um livro

### 👤 Authors
- `GET /Authors`
- `POST /Authors`
- `PUT /Authors/{id}`
- `DELETE /Authors/{id}`

### 🏷️ Genrers
- `GET /Genrers`
- `POST /Genrers`
- `PUT /Genrers/{id}`
- `DELETE /Genrers/{id}`

---

## 🎨 Tecnologias

- [Angular 16](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- HTML + CSS (puro)
- RxJS
- TypeScript

---

## 💡 Observação

É necessário ter a **API backend em execução** (com CORS liberado para `http://localhost:4200`) para que a aplicação funcione corretamente.

---

## 🛠️ Requisitos para rodar

- Node.js v16+ ou v18+
- Angular CLI (`npm install -g @angular/cli`)

---
