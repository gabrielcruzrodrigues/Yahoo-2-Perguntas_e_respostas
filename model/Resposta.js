const Sequelize = require('sequelize');
const connection = require('../db/user.js');

const Respostas = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Respostas.sync({force: false})
    .then(() => {
        console.log('Tabela criada');
    })
    .catch((error) => {
        console.log('ocorreu um erro ao criar a tabela');
    });

module.exports = Respostas;