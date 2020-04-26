'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Blacklist', {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          token: {
            type: DataTypes.STRING,
            allowNull: true,

          },
          createdAt: {
            type: DataTypes.DATE,
           
          },
          updatedAt: {
            type: DataTypes.DATE,
            
          }
        },{
          freezeTable: false
        })
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('Blacklist');
    
  }
};
