exports.index = (req, res) => {
    res.send('Accueil du contrôleur')
}

exports.about = (req, res) => {
    res.send('A Propos')
}

exports.sayHello = (req, res) => {
    let name = req.params.name ?? 'dada'
    console.log(req.params)
    res.send(`Bonjour ${name}`)
}