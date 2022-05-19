<h1 align="center"><b> Api para Livraria </b></h1>

![library](https://user-images.githubusercontent.com/52571090/169311724-bdb59e9a-653d-47a9-b95e-333c62ba484c.png)

## Badges

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=%20PRONTO&color=GREEN&style=for-the-badge"/>
</p>

## Índice 

* [Título e Imagem de capa](#Título-e-Imagem-de-capa)
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-Projeto)
* [Funcionalidades do projeto](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Conclusão](#conclusão)


## Descrição do Projeto

- Essa api feita em Node.js usando Express, foi desenvolvida com o intuito de criar um crud de uma livraria, mas que não possui um front-end, então deve-se usar o
 Postman para testar, caso não possua em sua máquina, baixe-o.

## Status do Projeto

- Concluído

## :hammer: Funcionalidades do projeto

- LIVROS
  - GET- http://localhost:3000/livros
  - POST - http://localhost:3000/livros
    - {
      "titulo": "Back-end JavaScript",
      "autor": "Johnna",
      "editora": "Casa do Code",
      "numeroPaginas": 230
      }
  - PUT- http://localhost:3000/livros/(DIGITAR O ID)
  - DELETE -http://localhost:3000/livros/(DIGITAR O ID)


-AUTORES
  - GET- http://localhost:3000/autores
  - POST- http://localhost:3000/autores
    - {
       "nome": "Joao Vitor",
       "nacionalidade":"brasileiro"
      }
  - PUT- http://localhost:3000/autores/(DIGITAR O ID)
  - DELETE- http://localhost:3000/autores/(DIGITAR O ID)

Buscas Livro Por editora
  http://localhost:3000/livros/busca?editora=Casa+do+Código
      
      
## 📁 Acesso ao projeto

**Você pode acessar o código fonte principal do projeto nesse repositório ou baixá-lo como arquivo zip**

## 🛠️ Abrir e rodar o projeto

Primeiramente, atente-se e veja se você já possui o node instalado. Para isso, vá ao seu prompt de comando e digite node -v. O resultado esperado deve ser a versão 
 do seu node, caso contrário, baixe-o e instale-o. 
  Depois rode o comando, npm install, e depois de ter rodado as dependências, rode o comando node server.js. O resultado esperado deve ser o servidor rodando e te
  retornando uma mensagem "Conexão com o banco feita com sucesso". Depois é só testar com os comandos. Ressalto aqui que você deve ter o Postman na sua máquina para testar a
  Api. 


## Tecnologias utilizadas
  - Node.js
  - Express
  - MongoDB

## 📁 Conclusão
  A intenção do projeto e mostrar como criar uma api do zero, e o exemplo a ser praticado foi uma livraria. Qualquer dúvida você pode entrar em contato comigo,
  meus contatos estão disóníveis no meu README que esta no meu perfil. TMJ Comunidade!!

