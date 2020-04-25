const express = require('express')
const router = express.Router();
const User = require('./controllers/User');
const Pets = require('./controllers/Pets');





/*asdsadas*/


  router.post('/user/create', User.createUser)

  router.get('/user/list', User.listaUsers);



<<<<<<< HEAD
  

  
=======
  /*asldsadjkhaskhdkjsadhaksjdjhgadsjkhdsajkhdsajkhdsajkhsjkhdsajkhsajkh*/
*/
  /*dasbdsajhdjkasdhaksjdhaksjdhsajkdahsd


=======
>>>>>>> 503bd3f0781992fc7c59810f325498cc3e39bb0b
  router.post('/user/create', (req, res)=>{
    res.send("Rota criação de usuário")
  })



  router.get('/user/list', User.listaUsers);

 


  router.delete('/user/:id', (req, res)=>{
    res.send("Rota Deleção de usuário ")
  })

  router.put('/user/:id', (req, res)=>{
    res.send("Rota atualização de usuário")
  })





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
