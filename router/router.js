const express = require('express');
const PerguntasController = require('../controllers/PerguntasController');
const RespostasController = require('../controllers/RespostasController');
const PerguntaModel = require('../model/Pergunta');
const RespostaModel = require('../model/Resposta');
const router = express.Router();

// perguntas
router.get('/', PerguntasController.home);
router.get('/perguntas', PerguntasController.perguntas);
router.post('/salvarPergunta', PerguntasController.salvarPergunta);
router.get('/perguntas/:id', PerguntasController.buscarId);

// respostas
router.post('/resposta', RespostasController.respostaId);

module.exports = router;