/**
 * ctrl +c pour arreter l'instruction
 * utrl - trim bonus - supprime les espaces avant et apres
 * ; non obligatoire
 */


//import d'express
const express = require('express')
const bodyParser = require('body-parser')


// application express
const app = express()


//test
const { body, validationResult } = require('express-validator');

app.post(
    '/user',
    body('lastname').isLength({ min: 5 }).withMessage('trop petit'),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      res.json('erreur')
    },
  );


//body parser
app.use(bodyParser.urlencoded())
//app.use(bodyParser.urlencoded({​​ extended: false }​​));

// est executé à chaque fois // middleware
app.use((req, res, next)=>{
    let method = req.method
    let path = req.originalUrl
    console.log(`${method} ${path}`)
    next()
})

//gestion des fichiers static
app.use('/public', express.static(__dirname + '/public'))


require('./middlewares/liquid')(app)



//router = import des routes
const router = require('./routes')

//connecte les routes à l'app 
app.use('/', router)

//démarrage du serveur
app.listen(80, ()=>{
    console.log("Serveur prêt (http://localhost)")
})