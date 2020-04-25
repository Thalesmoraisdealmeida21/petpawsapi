const express = require('express')
const router = express.Router();
const User = require('./controllers/User')








  router.post('/user/create', User.createUser)

  router.get('/user/list', User.listaUsers);

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
    res.send("Rota inicial")
  })

  router.get('/pet/list', (req, res)=>{
    res.send("Rota inicial")
  })

  router.delete('/pet/:id', (req, res)=>{
    res.send("Rota inicial")
  })

  router.put('/pet/:id', (req, res)=>{
    res.send("Rota inicial")
  })



  module.exports = router