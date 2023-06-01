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

exports.buscarId = (req, res) => {
    const id = req.params.id;
    PerguntasModel.findOne({
        where: {id: id}
    })
    .then((pergunta) => {
        if (pergunta != undefined) {
            res.render('pergunta', { pergunta: pergunta});
        } else {
            res.redirect('/');
        };
    });
};
