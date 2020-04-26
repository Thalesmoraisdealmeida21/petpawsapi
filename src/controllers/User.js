const User = require('./../database/models/User');
const bcrypt = require('bcrypt');


module.exports = {


    async listaUsers(req, res){
      
      User.findAll().then((users)=>{

        res.json(users);
      })
    },

    async createUser(req, res){
    
      const saltRounds = 16;
      const { nome, email, senha } = req.body

      User.findOne({where:{
          nome: nome
      }}).then((userExist)=>{
        if(userExist){
          res.status(200).json({mensagem: "Nome de usuário ja está sendo utilizado"})
        }
      })

      User.findOne({where:{
        email: email
      }}).then((userExist)=>{
        if(userExist){
          res.status(200).json({mensagem: "Este e-mail ja está sendo utilizado ja está sendo utilizado"})
        }
    })


  
   
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(senha, salt, function(err, hash) {
            User.create({
              nome: nome,
              email: email,
              password: hash
      
            }).then((user)=>{
              res.status(200).json(user)
            }).catch((err)=>{
              res.status(500).json({erro: err.message})
            })
        });
    });

    
     

    
/*
      //Update
      User.update({
        nome: nomedousuario
      }, {
        where:{
          id: id
        }
      })
     // Delete
      User.destroy({where: {
        id: "idusuario"
      }}).then((ret)=>{

      })*/
    }


}