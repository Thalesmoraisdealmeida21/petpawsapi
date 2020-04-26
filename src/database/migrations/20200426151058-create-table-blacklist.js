'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Blacklist', {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
          },
          token: {
            type: DataTypes.STRING,
            allowNull: false
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          }
        })
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('Blacklist');
    
  }
};
