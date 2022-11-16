const User = require('../models/Cliente');
const City = require('../models/Cidade');
const db = require('../models/dbConfig');

const { QueryTypes } = require('sequelize');


module.exports = {
    
    async read(request, response) {
        const {id} = request.params;
        if (id) {
            const user = await User.findOne({where: {id: id}})
            return response.json(user)
        }
        const users = await User.findAll()
        return response.json(users)
    },

    async update(request, response) {
        const {id} = request.params;
        const user = await User.findOne({where: {id: id}})
        await user.update(request.body).then(() => {
            return response.json({
                erro: false,
                mensagem: "Usuário atualizado com sucesso!"
            })
        }).catch(() => {
            return response.status(400).json({
                erro: true,
                mensagem: "Erro ao atualizar usuário!"
            })
        })
    },

    async groupAllClientsByCity(request, response) {
        const allClientsByCity = await db.query("SELECT COUNT(*) as 'customers_total', cities.name as 'city', cities.id FROM `clients`, `cities` WHERE clients.city = cities.id GROUP BY clients.city ORDER BY cities.name ASC", { type: QueryTypes.SELECT })
        return response.json(allClientsByCity)
    },

    async getClientsByCity(request, response) {

        const pageAsNumber = Number.parseInt(request.query.page);
        const SizeAsNumber = Number.parseInt(request.query.size);

        let page = 0;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
            page = pageAsNumber;
        }
        let size = 10;
        if (!Number.isNaN(SizeAsNumber) && SizeAsNumber > 0 && SizeAsNumber < 10) {
            size = SizeAsNumber;
        }

        const {id} = request.params;
        const allClientsByCity = await User.findAndCountAll({where: {city: id}, limit: size, offset: page * size});
        var clientReturn = {'client': allClientsByCity, 'totalPages': Math.ceil(allClientsByCity.count / size)};
        return response.json(clientReturn)
    },

}