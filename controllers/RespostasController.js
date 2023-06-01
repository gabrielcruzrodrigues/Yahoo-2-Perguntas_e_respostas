const RespostasModel = require('../model/Resposta.js');

exports.respostaId = (req, res) => {
    const corpo = req.body.corpo;
    const perguntaId = req.body.perguntaId;
    RespostasModel.create({
        corpo: corpo,
        perguntaId: perguntaId
    })
    .then(() => {
        res.redirect(`/perguntas/${perguntaId}`);
    });
};