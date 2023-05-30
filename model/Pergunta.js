const Sequelize = require('sequelize');
const connection = require('../db/user.js');

const Perguntas = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Perguntas.sync({force: false})
    .then(() => {
        console.log('tabela criada!');
    })
    .catch((error) => {
        console.log(`ocorreu um erro ao criar a tabela ${error}`)
    });

module.exports = Perguntas;