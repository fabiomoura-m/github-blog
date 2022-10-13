<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#funcionalidades-da-aplicação">Funcionalidades</a> •
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> • 
  <a href="#como-executar">Como Executar</a> • 
  <a href="#deploy">Deploy</a> 
</p>

## Desktop
![github-blog](https://user-images.githubusercontent.com/93055468/195595351-4924e7cb-147e-4dad-b9fc-ad7a4d3ed473.png)

## Sobre

Aplicação de um blog pessoal consumindo a API do Github para pegar tanto os dados do usuário quanto os posts, que são issues criadas em um repositório no github.

---

## Funcionalidades da Aplicação

- [x] Listagem do perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- [x] Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- [x] Página para exibir um post (issue) completo

---

## Tecnologias Utilizadas

Na construção do projeto foram utilizadas as seguintes ferramentas:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Vite](https://vitejs.dev/)** 
- **[Styled Components](https://styled-components.com/)** 
- **[React-hook-form](https://react-hook-form.com/)**
- **[React-router-dom](https://reactrouter.com/en/main)**
- **[MomentJs](https://momentjs.com/)**
- **[Axios](https://axios-http.com/ptbr/docs/api_intro)**
- **[API-github](https://docs.github.com/pt/rest)**

---

## Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.   

Executando a Aplicação:

```sh
  # Clone este repositório
  $ git clone git@github.com:fabiomoura-m/github-blog.git 
  # Acesse a pasta do projeto em seu terminal
  $ cd github-blog
  # Instalando as dependências do projeto.
  $ npm install
  # Inicie a aplicação web
  $ npm run dev
```

---

## Deploy 

🚀 [github-blog](https://github-blog-fabiomoura-m.vercel.app/)
