const {Model, DataTypes} = require('sequelize')


class Blacklist extends Model{
    static init(sequelize){
      super.init({
     
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },

      }, {
          sequelize,
          freezeTableName: false
      })
    }


}


module.exports =  Blacklist;