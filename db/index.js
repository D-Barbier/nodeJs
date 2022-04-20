const sqlite3 = require('sqlite3')
const path = require('path')

// permet de rassembler different chemin 
const dbpath = path.join(__dirname,"data","vote.db")

const db = new sqlite3.Database(dbpath,(err)=> {
    if(err){
        return console.error("Erreur SQL :"+err)
    }
    console.log("Base de données connectée")
})

module.exports = db