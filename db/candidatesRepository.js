const db = require('./index')

exports.getAll =() =>{
    return new Promise((resolve,reject)=>{
        db.all("SELECT id, lastname, firstname, slogan FROM candidates", [],(err,rows)=>{
            if(err){
                console.error("Erreur SQL"+err)
                reject(err)
            }else{
                resolve(rows)
            }
        })
    })
}

exports.getById =(id) =>{

}

exports.create =(model) =>  {

}

exports.update =(model) => {

}

exports.delete = (id) => {

}

