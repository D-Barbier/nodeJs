/*
index    Lister les candidats (accueil du controlleur)
getById    Afficher les détails d'un candidat
add    Ajouter un nouveau candidat
update    Modifier un candidat existant
remove    Supprimer un candidat existant 
*/

const repository = require('../db/candidatesRepository')

module.exports ={
    async index(req,res){
        try{
            let result = await repository.getAll()
            res.render('index', {model :result, title: 'liste des candidats'})
        }catch(err){
            res.status(500).end()
        }
    },

    async getById(req,res){
        try{
            const { id } = req.params
            let result = await repository.getById(id)

            if(result === undefined) {
                res.status(404).json({error: "404"})
            }
            console.log(result)
            res.render('singleCandidate', { model :result })


        }catch(err){
            res.status(500).end()
        }
    },

    async add(req,res){
        const model = { lastname: a, firstname: b, slogan: c }
        let result = await repository.create(model)
        res.render('index-add',{ model :result })
    },

    update(req,res){

    },

    remove(req,res){

    },
}


