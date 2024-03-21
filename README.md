# Teste Server Software - API de Sistema de Gerenciamento de Estoque 
![Screenshot_7](https://github.com/cadonaenrike/teste-server-back-end/assets/95323804/f2572b51-d8e5-4a25-b808-304c74caf135)

link da API:https://teste-server-back-end.vercel.app/

## Descrição

Este é um projeto de sistema de gerenciamento de estoque desenvolvido com Node.js, Express.js e Prisma ORM. A aplicação permite realizar operações CRUD (Criar, Ler, Atualizar, Excluir) de produtos em um banco de dados PostgreSQL.

## Funcionalidades Principais

- **CRUD de Produtos**: Permite criar, ler, atualizar e excluir produtos do banco de dados.
- **Validação de Dados**: Realiza validação de dados antes de salvar no banco de dados, garantindo a integridade das informações.
- **Tratamento de Erros**: Lida com erros de forma adequada, retornando mensagens de erro significativas para o usuário.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construir aplicações de servidor.
- **Express.js**: Framework web para Node.js que simplifica a criação de APIs RESTful.
- **Prisma ORM**: ORM (Object-Relational Mapping) para Node.js que simplifica a interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional para armazenar os dados do sistema.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática opcional.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/teste-server-software.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd teste-server-software
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração do Banco de Dados

1. Configure suas credenciais do banco de dados no arquivo `.env`, seguindo o formato do arquivo `.env.example`.

2. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

## Uso

1. Inicie o servidor:

   ```bash
   npm start
   ```

2. Acesse a API em `http://localhost:3000`.

## Exemplos de Rotas e Métodos

### Criar um Novo Produto

- **URL**: `/api/produtos`
- **Método HTTP**: `POST`
- **Corpo da Requisição**:

  ```json
  {
    "descricao": "Produto de Teste",
    "preco": 25.99
  }
  ```

- **Resposta de Sucesso**:

  ```json
  {
    "code": 201,
    "message": "Produto criado com sucesso",
    "data": {
      "id": 1,
      "descricao": "Produto de Teste",
      "preco": 25.99
    }
  }
  ```

### Atualizar um Produto Existente

- **URL**: `/api/produtos/:id`
- **Método HTTP**: `PUT`
- **Parâmetros de Rota**: `id` (ID do produto)
- **Corpo da Requisição**:

  ```json
  {
    "descricao": "Produto Atualizado",
    "preco": 29.99
  }
  ```

- **Resposta de Sucesso**:

  ```json
  {
    "code": 200,
    "message": "Produto atualizado com sucesso",
    "data": {
      "id": 1,
      "descricao": "Produto Atualizado",
      "preco": 29.99
    }
  }
  ```

### Excluir um Produto Existente

- **URL**: `/api/produtos/:id`
- **Método HTTP**: `DELETE`
- **Parâmetros de Rota**: `id` (ID do produto)
- **Resposta de Sucesso**:

  ```json
  {
    "code": 200,
    "message": "Produto excluído com sucesso"
  }
  ```

## Contribuição

Contribuições são bem-vindas! Para contribuir com este projeto, siga estas etapas:

1. Fork o repositório
2. Crie um branch para sua feature (`git checkout -b feature/sua-feature`)
3. Faça commit de suas mudanças (`git commit -m 'Adicionar nova feature'`)
4. Push para o branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
