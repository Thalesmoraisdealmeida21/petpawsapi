const Sequelize = require('sequelize');
const dbConfig = require('./config');


const User = require('./models/User');
const Blacklist = require('./models/Blacklist')
const connection = new Sequelize(dbConfig);


User.init(connection);
Blacklist.init(connection);

module.exports = connection;