const User = require('./../database/models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')



module.exports = {


  async login(req, res){


    const {nome, senha} = req.body
      User.findOne({where:{
            nome: nome
      }}).then((user)=>{
          if(user){
            bcrypt.compare(senha, user.password, function(err, result) {
              if(result){
                  const token = jwt.sign({ nome: nome }, 'shhhhh');
                  res.status(200).json(token)
              }
          });
          } else {
            res.status(401).json({mensagem: "Usuario não encontrado"})
          }
      }).catch((e)=>{
        res.status(401).json({mensagem: "Erro no no Login", erro: e.message})
        console.log("Erro:" + e.message)
      })


  }
}