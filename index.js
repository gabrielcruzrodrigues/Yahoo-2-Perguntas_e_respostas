const express = require('express');
const app = express();
const router = require('./router/router.js');
const connection = require('./db/user.js');
const port = 3000;

// testando a conexão com o banco de dados
connection.authenticate()
    .then(() => {
        console.log('conexão feita com o banco de dados');
    })
    .catch((error) => {
        console.log(error);
    });

//definindo o ejs como view engine
app.set('view engine', 'ejs');

//habilitando o express a pegar os dados do body
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//configurando a pasta public como view engine
app.use(express.static('public'));

//configurando as rotas
app.use('/', router);

app.listen(port, () => {
    console.log(`the server is running in port: ${port}`);
});