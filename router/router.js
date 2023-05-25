const express = require('express');
const PerguntasController = require('../controllers/PerguntasController');
const router = express.Router();

router.get('/', PerguntasController.home);

router.get('/perguntas', PerguntasController.perguntas);

module.exports = router;