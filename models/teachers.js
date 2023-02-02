'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teachers.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    phone:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    classId:{
      type:DataTypes.INTEGER
    },
    schoolId:{
      type:DataTypes.INTEGER
    }}, {
    sequelize,
    modelName: 'Teachers',
  });
  return Teachers;
};