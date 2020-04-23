const User = require('./../database/models/User');
const bcrypt = require('bcrypt');


module.exports = {


    async listaUsers(req, res){
      
      User.findAll().then((users)=>{

        res.json(users);
      })
    }


}