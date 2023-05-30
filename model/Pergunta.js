const Sequelize = require('sequelize');
const connection = require('../db/user.js');

const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false})
    .then(() => {
        console.log('tabela criada!');
    })
    .catch((error) => {
        console.log(`ocorreu um erro ao criar a tabela ${error}`)
    });