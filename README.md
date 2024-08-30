### Desafio Everymind - Best Minds 2024.2

<hr/>

<h1>Nunes Sports</h1>

Nunes Sports é um sistema de gestão de produtos que permite aos usuários exibir, criar, editar e deletar produtos vendidos pela empresa fictícia Nunes Sports. O sistema consiste em um backend desenvolvido com Node.js, Express e Sequelize para integração com o banco de dados MySQL, e um frontend desenvolvido com React.js, que permite a interação com os produtos de forma simples e intuitiva.

### Funcionalidades

- Exibir produtos: Os produtos cadastrados são exibidos em uma tabela de fácil visualização.
- Adicionar produtos: O usuário pode adicionar novos produtos, especificando nome, código, descrição e preço.
- Editar produtos: Permite editar os detalhes dos produtos existentes.
- Deletar produtos: O usuário pode remover produtos da lista.

### Tecnologias Utilizadas

- Frontend: React.js, Vite, Axios, Styled-components.
- Backend: Node.js, Express, Sequelize, MySQL.
- Banco de Dados: MySQL.

### Requisitos

- Node.js (v14 ou superior)
- MySQL
- Git

### Instruções para Rodar o Projeto Localmente

1. Clonar o Repositório
Para clonar o repositório do projeto, abra o terminal e execute o seguinte comando: git clone https://github.com/Alessandra1999/desafio-everymind.git

2. Configurar o Backend
No terminal, navegar até a pasta "backend" e instalar as dependências com o comando: npm install
Configurar o banco de dados: Crie um banco de dados MySQL com o nome nunes_sports.
Configure as credenciais do banco de dados no arquivo .env na pasta do backend: 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=nunes_sports

Execute as migrações para criar as tabelas no banco de dados: npx sequelize-cli db:migrate
Iniciar o backend: npm start
O backend estará rodando em http://localhost:5000.

3. Configurar o Frontend
No terminal, navegar até a pasta "frontend" e instalar as dependências com o comando: npm install
Configurar o Frontend: Crie um arquivo .env na pasta do frontend com o seguinte conteúdo:
VITE_API_URL=http://localhost:5000/api/produtos
Iniciar o frontend: npm run dev
O frontend estará disponível em http://localhost:5173.

### Testando o Projeto
Acesse o frontend em http://localhost:5173 no seu navegador.
Utilize as funcionalidades de adicionar, editar, e deletar produtos.
Verifique se as operações refletem corretamente no banco de dados.

### Problemas Comuns
Erro 500 (Internal Server Error): Verifique se o banco de dados está configurado corretamente e rodando.
Conexão Recusada: Certifique-se de que o backend está em execução antes de iniciar o frontend.
