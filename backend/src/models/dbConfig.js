const Sequelize = require('sequelize');

const sequelize = new Sequelize("native", "root", "", {
    host: "localhost",
    dialect: "mysql"
}); 

sequelize.authenticate().then(() => {
    //console.log('conexão com sucesso')
}).catch (() => {
    //console.log("erro conexão")
})

module.exports = sequelize;