exports.home = (req, res) => {
    res.render('home');
};

exports.perguntas = (req, res) => {
    res.render('perguntas');
};

exports.salvarPergunta = (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    res.status(200).send(`${titulo}, ${descricao}`);
}
