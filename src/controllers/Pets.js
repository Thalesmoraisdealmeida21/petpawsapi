const Pets = require('./../database/models/Pets');


module.exports = {


  async listaPets(req, res) {

    Pets.findAll().then((pet) => {

      res.json(pet);
    })
  },

  async createPets(req, res) {

    const { quantidade, nome, deficiencia } = req.body

    Pets.create({
      nome: nome,
      quantidade: quantidade,
      deficiencia: deficiencia

    }).then((pet) => {
      res.status(200).json(pet)
    })
  },

  async altPets(req, res) {

    Pets.update({
      quantidade: quantidade,
      nome: nome,
    }, {
      where: {
        id: 'idCaso'
      }
    }).then((ret) => {
      res.status(200).json()
    })
  },

  async deletePets(req, res) {

    Pets.destroy({
      where: {
        id: 'idCaso'
      }
    }).then((ret) => {
      res.status(200).json()
    })
  },
}