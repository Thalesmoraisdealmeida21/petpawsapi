const { Model, DataTypes } = require('sequelize')


class User extends Model {
  static init(sequelize){
    super.init({
          
        nome: {
            type: DataTypes.STRING,
            allowNull: true,
      
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: true,
        }, 
        cidade: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        uf: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        descrição: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        tipo: {
          type: DataTypes.ENUM(['PESSOA', 'ONG']),
          allowNull: true,
        }
    },  
    {
      sequelize,
  
  
    })
  }
}





module.exports = User;