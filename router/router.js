const express = require('express');
const PerguntasController = require('../controllers/PerguntasController');
const router = express.Router();

router.get('/', PerguntasController.home);

router.get('/perguntas', PerguntasController.perguntas);

router.post('/salvarPergunta', PerguntasController.salvarPergunta);

router.get('/teste', (req, res) => {
    const teste = {
        title: 'titulo teste',
        descricao: 'conteudo teste'
    };

    res.render('teste', {teste: teste});
})

module.exports = router;