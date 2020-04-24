const { Model, DataTypes } = require('sequelize');

class Pets extends Model {
    static init(sequelize){
      super.init({

        quantidade: {
            type: DataTypes.NUMBER,
            allowNull: true,
        }, 
        
          nome: {
              type: DataTypes.STRING,
              allowNull: true,
          },

          tipo: {
            type: DataTypes.ENUM(['CACHORRO', 'GATO']),
            allowNull: true,
          },
          
          deficiencia: {
            type: DataTypes.ENUM(['NÃO POSSUI', 'AUDITIVA', 'OCULAR', 'FERIDA','MEMBROS']),
            allowNull: true,
          },

          idade: {
            type: DataTypes.NUMBER,
            allowNull: true,
          },

          descrição: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
         
      },  
      {
        sequelize,
    
    
      })
    }
  }
  
  
  
  
  
  module.exports = Pets;