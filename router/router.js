const express = require('express');
const PerguntasController = require('../controllers/PerguntasController');
const Perguntas = require('../model/Pergunta');
const router = express.Router();

router.get('/', PerguntasController.home);

router.get('/perguntas', PerguntasController.perguntas);

router.post('/salvarPergunta', PerguntasController.salvarPergunta);

router.get('/perguntas/:id', PerguntasController.buscarId);

module.exports = router;