const express = require('express')
const router = express.Router();
const User = require('./controllers/User');
const Pets = require('./controllers/Pets');






  router.post('/user/create', User.createUser);

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

  router.post('/pet/create', Pets.createPets);

  router.get('/pet/list', Pets.listaPets);

  router.delete('/pet/:id', Pets.deletePets);

  router.put('/pet/:id', Pets.altPets);
  



  module.exports = router
