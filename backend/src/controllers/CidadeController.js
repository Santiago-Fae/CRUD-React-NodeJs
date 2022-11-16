const City = require('../models/Cidade');
const db = require('../models/dbConfig');

module.exports = {
    async read(request, response) {
        const {id} = request.params;
        if (id) {
            const city = await City.findOne({where: {id: id}})
            return response.json(city)
        }
        const cities = await City.findAll({ order:[['name', 'ASC']]})
        return response.json(cities)
    },
}