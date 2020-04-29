'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pets', {

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
        type: DataTypes.ENUM(['NAO POSSUI', 'AUDITIVA', 'OCULAR', 'FERIDA','MEMBROS']),
        allowNull: true,
      },

      idade: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },

      sexo: {
        type: DataTypes.ENUM(['MASCULINO', 'FEMININO']),
        allowNull: true,
      },

      porte: {
        type: DataTypes.ENUM(['PEQUENO', 'MEDIO', 'GRANDE']),
        allowNull: true,
      },
      
      descriçao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
  
  })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
