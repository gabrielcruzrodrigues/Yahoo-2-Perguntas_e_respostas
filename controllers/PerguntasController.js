exports.home = (req, res) => {
    res.render('home');
};

exports.perguntas = (req, res) => {
    res.render('perguntas');
};

exports.salvarPergunta = (req, res) => {
    res.send('Formulario enviado');
}
