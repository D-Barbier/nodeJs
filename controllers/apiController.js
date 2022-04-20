const repository = require('../db/candidatesRepository')

exports.index = async (req, res) => {

    try {
        let result = await repository.getAll()
        res.json(result)

    } catch(err) {
        console.error(err)
    }
}