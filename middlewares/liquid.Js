const { Liquid }  = require('liquidjs')
const path = require('path')

module.exports = (app) => {
    const viewEngine = new Liquid({
        //Racine 
        root: path.join(__dirname,'../','views'),
        //extension //.html pour la coloration syntaxique
        extname: '.html'
    })
    //contient le format des fichiers
    app.engine('html',viewEngine.express())
    //précise le type de moteur qui est pris par default
    app.set('view engine', 'html')
}

