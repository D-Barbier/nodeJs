const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')
const apiController = require('../controllers/apiController')

// en attente d'une reponse 
// req = request && res = response 
router.get('/' , homeController.index)

router.get('/about' , homeController.about)

//marqueur :variable && stocker dans params
router.get('/hello/:name?', homeController.sayHello)

router.get('/api', apiController.index)

router.all('*', (req,res)=>{
    res.status(404).send('Erreur 404 : page non trouvée')
})
//attribut exports 
module.exports = router
