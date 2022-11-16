const express = require('express');
const routes = require('./routes');
const User = require('./models/Cliente');

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.json());
app.use(routes);
 
/* 
app.post('/cadastrar', (request, response) => {
    return response.json({
        nome: 'eee',
        profissao: 'engenheiro'
    });
}) */

app.post("/cadastrar", async (request, response) => {
    await User.create(request.body)
    .then(() => {
        return response.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() => {
        return response.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado!"
        })
    })
})

app.listen(3333)