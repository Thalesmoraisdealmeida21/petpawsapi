const express = require('express')
const router = express.Router();
const User = require('./controllers/User');
const Pets = require('./controllers/Pets');








<<<<<<< HEAD
  router.post('/user/create', User.createUser)

  router.get('/user/list', User.listaUsers);

  router.get('/user/login', (req, res)=>{

  });

  /*asldsadjkhaskhdkjsadhaksjdjhgadsjkhdsajkhdsajkhdsajkhsjkhdsajkhsajkh*/
*/
  /*dasbdsajhdjkasdhaksjdhaksjdhsajkdahsd


=======
  router.post('/user/create', (req, res)=>{
    res.send("Rota criação de usuário")
  })
/*
    sadsadasdsadsadas
*/


  router.get('/user/list', User.listaUsers);

 


>>>>>>> 066f3851d26d362152a2fb62a52e048b8f2f8618
  router.delete('/user/:id', (req, res)=>{
    res.send("Rota Deleção de usuário ")
  })

  router.put('/user/:id', (req, res)=>{
    res.send("Rota atualização de usuário")
  })



  /* ---------------------------------------------- */


  router.get('/pet', (req, res)=>{
      res.send("Rota inicial")
  })

  router.post('/pet/create', (req, res)=>{
    res.send("Rota criaçãode pet")
  })

  router.get('/pet/list', Pets.listaPets);

  router.delete('/pet/:id', (req, res)=>{
    res.send("Rota inicial")
  })

  router.put('/pet/:id', (req, res)=>{
    res.send("Rota inicial")
  })



  module.exports = router
