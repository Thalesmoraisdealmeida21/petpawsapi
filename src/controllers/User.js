const User = require('./../database/models/User');



module.exports = {


    async listaUsers(req, res){
      
      User.findAll().then((users)=>{

        res.json(users);
      })
    },

    async createUser(req, res){

      const { nome, email, senha } = req.body
      
      User.create({
        nome: nome,
        email: email,
        password: senha

      }).then((user)=>{
        res.status(200).json()
      })

    
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