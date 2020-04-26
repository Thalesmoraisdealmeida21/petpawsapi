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
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(senha, salt, function(err, hash) {
            User.create({
              nome: nome,
              email: email,
              password: senha
      
            }).then((user)=>{
              res.status(200).json(user)
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