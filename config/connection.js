require('dotenv').config(); //dotenv library allows load environment variables from a file named .env( .env is hiding file that store important info that now one can see )

const Sequelize = require('sequelize'); // import and  install npm sequelize package for use it's functionallity


//setting up the connection for Sequelize and then check for a complete database URL, if no then using individual settings to create the connection.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: '127.0.0.1', 
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize; //exports the Sequelize, so it available for use in other files.
