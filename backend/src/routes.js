const express = require('express');
const cors = require('cors');

const ClienteController = require('./controllers/ClienteController');
const CidadeController = require('./controllers/CidadeController');
const routes = express.Router();
routes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    routes.use(cors())
    next();
})
routes.put('/cliente/:id', ClienteController.update);
routes.get('/cliente/:id', ClienteController.read);
routes.get('/cliente/cidade/:id', ClienteController.getClientsByCity);

routes.get('/', ClienteController.groupAllClientsByCity);

routes.get('/cidade/:id?', CidadeController.read);


module.exports = routes;