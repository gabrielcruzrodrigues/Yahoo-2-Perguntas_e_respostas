const PerguntasModel = require('../model/Pergunta.js');

exports.home = (req, res) => {
    PerguntasModel.findAll({ raw: true, order:[
        ['id', 'DESC']
    ] })
        .then((perguntas) => {
            console.log(perguntas);
            res.render('home', { perguntas: perguntas});
        });
};

exports.perguntas = (req, res) => {
    res.render('perguntas');
};

exports.salvarPergunta = (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    PerguntasModel.create({
        titulo: titulo,
        descricao: descricao
    })
    .then(() => {
        res.redirect('/');
    });
};
