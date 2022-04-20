const repository = require('../db/candidatesRepository')

exports.index = async (req, res) => {

    try {
        let result = await repository.getAll()
        res.json(result)

    } catch(err) {
        console.error(err)
        res.status(500).end()
    }
}

exports.getById = async (req, res) => {

    try {
        const id = req.params.id
        //const { id } = req.params
        let result = await repository.getById(id)

        if(result === undefined) {
            res.status(404).json({error: "404"})
        }

        res.json(result)
    } catch(err) {
        console.error(err)
        res.status(500).end()
    }
}

exports.add =  async (req, res) => {
    console.log(req.body)
    // controle de saisie dans l'objet req.body
    const model = req.body
    let result = await repository.create(model)
    res.json(result)
}

exports.remove = async(req, res) =>{
    let { id  } = req.params
    let result = await repository.delete(id)
    res.status(404).end()
}

exports.maj = async(req, res) => {

    let { id  } = req.params
    const model = req.body
    let result = await repository.update(model,id)

    res.json(result)
}

