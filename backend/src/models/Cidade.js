const Sequelize = require('sequelize');
const db = require('./dbConfig');

const User = db.define('cities', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
//criar a tabela
User.sync()
//User.sync ({alter:true})
module.exports = User;