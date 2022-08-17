const express = require('express');
//const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/', async function (req, res) {
    //var resultado = await usuario.findAll();
    //res.json(resultado);
});

app.get('/autenticar', async function (req, res) {
    res.render("autenticar")
    //var resultado = await usuario.findAll();
    //res.json(resultado);
});
app.get('/inscrever', async function (req, res) {
    res.render("inscrever")
    //var resultado = await usuario.findAll();
    //res.json(resultado);
});

app.post('/logar', async function (req, res) {
    //var resultado = await usuario.findAll();
    //res.json(resultado);
});

app.post('/deslogar', async function (req, res) {
    //var resultado = await usuario.findAll();
    //res.json(resultado);
});

app.listen(3000, function () {
    console.log('App de Exemplo escutando na porta 3000!')
});