const Sequelize = require('sequelize');
const db = require('./dbConfig');

const User = db.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
//criar a tabela
User.sync()
//User.sync ({alter:true})
module.exports = User;