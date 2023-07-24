//define the structure of a table in the database so i can inserting, querying, updating, and deleting operations.

const { Model, DataTypes } = require('sequelize');//imports the "Model" and "DataTypes" objects from the "sequelize" package

const sequelize = require('../config/connection'); // import sequelize in the config/connection.js

class Category extends Model {} // this allows to use methods such as create, findall update delete.

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    Category_name:{
      type: DataTypes.STRING,
      allowNull: false,
    

    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//exports so it can be import and use in other files
module.exports = Category;
