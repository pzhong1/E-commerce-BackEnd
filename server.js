const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');


const app = express(); // create new express app
const PORT = process.env.PORT || 3001;  // lisent on port 3001

//midware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { //sequelize will not delete existing tables
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
