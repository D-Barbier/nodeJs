//import d'express
const express = require('express')

// application express
const app = express()

// est executé à chaque fois 
app.use((req, res, next)=>{
    let method = req.method;
    let path = req.originalUrl;
    console.log(`${method} ${path}`)
    next()
});

app.use('/public', express.static(__dirname + '/public'))

//router = middle
const router = require('./routes')

//connecte les routes à l'app 
app.use('/', router);

//ctrl c pour arreter l'instruction
app.listen(80, ()=>{
    console.log("Serveur prêt (http://localhost)")
})