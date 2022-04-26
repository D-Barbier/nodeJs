const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')
const apiController = require('../controllers/apiController')
const candidatesController = require('../controllers/candidatesController')

// en attente d'une reponse 
// req = request && res = response 

//marqueur :variable && stocker dans params
router.get('/hello/:name?', homeController.sayHello)

router.get('/about' , homeController.about)

router.get('/' , homeController.index)

/* API CONTROLLER */

router.get('/api/:id', apiController.getById) 

router.put('/api/:id', apiController.update)

router.delete('/api/:id', apiController.remove)

router.get('/api', apiController.index)

router.post('/api', apiController.add)

/* Candidates controller */ 
router.get('/candidates/delete/:id/confirme', candidatesController.remove_post)

router.get('/candidates/edit/:id', candidatesController.update)
router.get('/candidates/delete/:id', candidatesController.remove)
router.get('/candidates/add', candidatesController.add)
router.get('/candidates/:id', candidatesController.getById)
router.get('/candidates', candidatesController.index)

router.post('/candidates/add',candidatesController.add_post)
router.post('/candidates/edit/:id', candidatesController.update_post)




/* Routes par defaut & erreurs */

router.all('*', (req,res)=>{
    res.status(404).send('Erreur 404 : page non trouvée')
})

//attribut exports 
module.exports = router
