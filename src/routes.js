const express = require('express')
const router = express.Router();
const User = require('./controllers/User');
const Pets = require('./controllers/Pets');
const Auth = require('./../src/controllers/Auth');
const verifyAuthorization = require('./middleware/auth') 






  router.post('/user/create', User.createUser)
  router.get('/user/list', User.listaUsers);



  router.post('/login', Auth.login)
  router.post('/logout', Auth.logout)







/*
* A função verifyAuthorization quando passada como middleware exige autenticação
* para a rota em questão, caso não tenha o token no header ou ele seja inválido não acessa a rota e retorna 401
*
*/

  router.get('/pet', verifyAuthorization, (req, res)=>{
      res.send("Rota inicial")
  })

  router.post('/pet/create', verifyAuthorization, (req, res)=>{
    res.send("Rota criaçãode pet")
  })

  router.get('/pet/list', verifyAuthorization, Pets.listaPets);

  router.delete('/pet/:id', verifyAuthorization, (req, res)=>{
    res.send("Rota inicial")
  })

  router.put('/pet/:id', verifyAuthorization, (req, res)=>{
    res.send("Rota inicial")
  })



  module.exports = router
