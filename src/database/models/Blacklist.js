const {Model, DataTypes} = require('sequelize')


class Blacklist extends Model{
    static init(sequelize){
      super.init({
        id: {
          type: DataTypes.NUMBER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
   
         
        }

      }, {
          sequelize,
          freezeTableName: true,
          
      })
    }


}


module.exports =  Blacklist;