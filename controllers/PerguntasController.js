const PerguntasModel = require('../model/Pergunta.js');
const RespostaModel = require('../model/Resposta.js');

// listando todos os itens da tabela perguntas e enviando para a view home
exports.home = (req, res) => {
    PerguntasModel.findAll({ raw: true, order:[
        ['id', 'DESC']
    ] })
        .then((perguntas) => {
            console.log(perguntas);
            res.render('home', { perguntas: perguntas});
        });
};

//rota para a página com o formulário para realizar as perguntas
exports.perguntas = (req, res) => {
    res.render('perguntas');
};

//criando e inserindo pergunta no banco de dados
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

//buscando a pergunta por id e exibindo a pagina individual, com suas respostas
exports.buscarId = (req, res) => {
    const id = req.params.id;
    PerguntasModel.findOne({
        where: {id: id}
    })
    .then((pergunta) => {
        if (pergunta != undefined) {

            RespostaModel.findAll({ //buscando as respostas na tabela respostas
                where: {perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            })
            .then((respostas) => {
                res.render('pergunta', { pergunta: pergunta, resposta: respostas});
            })
        } else {
            res.redirect('/');
        };
    });
};
