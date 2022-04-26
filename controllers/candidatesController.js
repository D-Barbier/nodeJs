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

    async getById(req, res) {
        try {
            let result = await repository.getById(req.params.id)
            if(result === undefined) 
            {
                res.status(404).json({error: "404"})
            }
            res.render('candidate', { model : result, title: 'Fiche candidat' })
        } catch (err) {
            res.status(500).end()
        }  
    },

    async add(req,res){
        res.render('candidate_add')
    },

    async add_post(req,res){
        
        const model = req.body
        console.log(model)
            
        let result = await repository.create(model)
        res.redirect('/candidates')
    
    },

    async update(req,res){
        let result = await repository.getById(req.params.id)
        res.render('candidate_edit', { model : result })
    },

    async update_post(req,res){
        const model = req.body
        // console.log(model)
        //unary operator
        //NPUI je dois vérifier les données fournies par l'utilisateur
        model.id = +req.params.id
        //console.error( typeof model.id)
        let result = await repository.update(model)
        res.redirect('/candidates')
    },

    async remove(req,res){
        let result = await repository.getById(req.params.id)
        res.render('candidate_delete', { model : result })
    },

    async remove_post(req,res){
        let { id  } = req.params
        console.log(req.params.id)
        let result = await repository.delete(id)
        
        res.redirect('/candidates')
    },
}


