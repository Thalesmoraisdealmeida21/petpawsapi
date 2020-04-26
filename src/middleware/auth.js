const jwt = require('jsonwebtoken')
const Blacklist = require('./../database/models/Blacklist')

module.exports = (req, res, next) => {

  const { authorization } = req.headers



  jwt.verify(authorization, 'shhhhh', function(err, decoded){

   
      if(decoded){
        Blacklist.findOne({where: {
          token: authorization
        }}).then((tokenFound)=>{
            if(tokenFound){
                res.status(401).json({mensagem: "Token Expirado"})
            } else {
                next();
            }
        }).catch((err)=>{
          if(err){
            res.status(401).json({mensagem: "Ocorreu um erro", erro: err.message})
          }
        })
      } else {
        res.status(401).json({mensagem: "Token Inválido"})
      }
    })


  


}