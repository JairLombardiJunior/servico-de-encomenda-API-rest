# servico-de-encomenda-API-rest
Trabalho 1 disciplina de SW

A API tem como responsabilidade a criação cliente em um sistema de entrega de mercadorias (ex: amazon) e gerennciamento das encomendas, gerando um token para um usuário poder editar/remover suas encomendas.

# Instalação

  Clonar o repositório
  Executar "npm i"
  criar uma database de conteiner para o swagger popular, para isso fazer um novo arquivo ".env" e preenchendo-o como o exemplo seguir
          
          PORT = 3000
          BD_NAME = db_deliveryjair
          BD_USER = ????
          BD_PASSWORD = ????
          BD_HOST = localhost
          BD_PORT = 5432
          JWT_KEY = ???? (importante para operações de validação)

# Execução  
   Executar API com "npm run start"

Rotas
Base: http://localhost:3000 (ou outra porta)
Documentação: /docs
API: /api
rotas de : [ Cliente: (usuários), Encomendas, Auth (autenticação) ] estão presentes na sessão de documentação do swagger 

Tecnologias (API desenvolvida com Express JS
            (Documentação automática pelo swagger
            (Autenticação de usuários com JWT
            (Persistência no Postgres, utilizando Sequelize



