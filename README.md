<h1 align="center">
    <img alt="" src="./assets/icon.png">

</h1>

<h1 align="center">Pet Paws API</h1>




<p align="center">Está é a api da aplicação Pet Paws. Que é um sistema que apróxima ongs e pessoas que desejam achar donos para animais em adoção.</p>




## Sumario

<ul>
  <li><a href="#-ponto-de-partida">Ponto de Partida</a></li>
  <li><a href="#-funcionalidades-do-aplicativo">Funcionaldiades do Aplicativo</a></li>
  <li><a href="#-funcionalidades-do-aplicativo">Tecnologias</a></li>
</ul>

---

## 🚀 Ponto de Partida


 Para rodar a API você precisa instalar um ambiente para aplicativos node versão 12 ou superior, tendo em sua maquina ja instalado o node é necessario executar o comando "npm install" para instalar todas as dependecias da aplicação. Feito isto basta executar o comando "npm start" e a aplicação estara rodando em "localhost:3333"
 




## 📋 Funcionalidades da API de autenticação(Branch Auth)
<h5>Abaixo estão todas as funcioanlidades da api de autenticação e suas rotas.</h5> 

- [X] Criação de usuario
        **Rota:** /user/create
        __Tipo:__ POST 
            
            
        == Parametros: == 
             nome: string
             email: string
             senha: string
        
- [x] Listar todos os usuários 
        **Rota:** /user/list
        __Tipo:__ GET 
            
            
        == Parametros: == 
             nenhum
        == Retorno: == 
          {
            "id": number,
            "nome": string,
            "email": string,
            "password": string,
            "telefone": string,
            "cidade": string,
            "uf": string,
            "descrição": TEXT,
            "tipo": ENUM(['PESSOA', 'ONG']),
            "createdAt": DATE,
            "updatedAt": DATE"
          },

  
- [x] Login no sistema 
         **Rota:** /login
        __Tipo:__ POST 
            
            
        == Parametros: == 
             {
                "nome": string,
                "senha": string
             }
        == Retorno: == 
            {
              token: string 
            }
- [x] Logout no sistema 

      == Parametros: == 
                No header
                {
                    "authorization": string, // token
                    
                }
              == Retorno: == 
                {
                  "mensagem": string
                }
</h1>






### Tecnologias

- Core
  - [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

  - [Express.js](https://expressjs.com/) - Um framework para aplicativos da web node.js

- Banco de dados
  - [Sqlite](https://www.sqlite.org/index.html) - Banco de dados relacional
  - [Sequelize](https://sequelize.org) -Uma ORM de banco de dados relacional para node.js

- Autenticação
  - [JWT](https://jwt.io/) Um padrão de autenticação para aplicações web
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) Pacote para geração de token de autenticação
  - [bcrypt](https://www.npmjs.com/package/bcrypt) Biblioteca de criptografia para senhas

















---



