# 📚 API Simples com Node.js + MongoDB

Este projeto foi desenvolvido com o objetivo de estudar os fundamentos de HTTP e bancos de dados não relacionais, utilizando Node.js e MongoDB.

## 🚀 Objetivo

O foco principal foi:

- Entender como funciona o protocolo HTTP na prática  
- Criar um servidor básico sem frameworks  
- Aprender conceitos iniciais de banco de dados não relacional  
- Conectar uma aplicação Node.js ao MongoDB  
- Realizar operações simples de leitura e escrita  

## 🛠️ Tecnologias utilizadas

- Node.js (módulo nativo http)  
- MongoDB (NoSQL)  
- Driver oficial do MongoDB para Node.js  

## 📌 Funcionalidades

Atualmente, a API possui funcionalidades básicas:

### ➕ Criar usuário
- Método: POST  
- Rota: /:nome  
- Descrição: Insere um usuário no banco com o nome informado na URL  

### 📄 Listar usuários
- Método: GET  
- Rota: /  
- Descrição: Retorna todos os usuários cadastrados no banco  

## ⚠️ Limitações

Este projeto foi intencionalmente mantido simples para fins de estudo. Portanto, ainda não inclui:

- Atualização de dados (PUT / PATCH)  
- Exclusão de dados (DELETE)  
- Validação de dados  
- Organização em camadas (controllers, services, etc.)  
- Uso de frameworks como Express  

## 🔐 Sobre segurança

Este projeto NÃO possui práticas de segurança implementadas, como:

- Uso de variáveis de ambiente (dotenv)  
- Proteção de credenciais  
- Validação ou sanitização de dados  
- Controle de acesso  

Isso foi proposital, pois o foco é apenas aprendizado dos conceitos básicos.  

## 📖 Aprendizados

Durante o desenvolvimento deste projeto, foi possível:

- Compreender a base do funcionamento de servidores HTTP  
- Entender como requisições e respostas funcionam  
- Aprender conceitos iniciais de bancos não relacionais  
- Realizar operações básicas com MongoDB (insert e find)  

Mesmo sem domínio completo, a base foi construída, permitindo evolução para projetos mais avançados.

## 💡 Observações

- Este projeto faz parte de um processo de reaprendizado do zero  
- MongoDB e APIs REST não têm dependência obrigatória, mas foram usados juntos para prática  
- O conhecimento será aprofundado em projetos futuros  

## ▶️ Como executar

1. Instale as dependências:
npm install mongodb

2. Execute o projeto:
node index.js

3. A API estará disponível em:
http://localhost:3000

