'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require('../utils/common');
const {BUSINESS,PREMIUM_ECONOMY,FIRST_CLASS,ECONOMY} = Enums.SEAT_TYPE //here we destructing the Enums
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey : 'airplaneId'
      })
    }
  }
  Seat.init({
    airplaneId:{
      type : DataTypes.INTEGER,
      allowNull : false
    },
    row:{
      type : DataTypes.INTEGER,
      allowNull : false
    },
    col: {
      type : DataTypes.STRING,
      allowNull : false
    },
    // we change the name class to type because in js class is a keyword it can match the name 
    type: {
      type : DataTypes.ENUM,
      values : [BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue : ECONOMY,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};