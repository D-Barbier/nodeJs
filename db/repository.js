db = require('./index')

class Repository {
    /**
     * 
     * @param {sqlite3.Database} _db 
     */

    constructor(_db) {
        this.db = _db
    }

    /**
     * 
     * @param {String} sql la requête SQL à exécuter
     * @param {Array} params  le tableau des paramètre de la requête SQL
     * @returns {Promise} le resultat du traitement
     */

    getAll(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.error('Erreur SQL : ' + err)
                    reject(err)
                } else {
                    //console.log(rows)
                    resolve(rows)
                }
            })
        })
    }

    /**
    * 
    * @param {String} sql la requête SQL à exécuter
    * @param {Array} params  le tableau des paramètre de la requête SQL
    * @returns {Promise} le resultat du traitement
    */

    getOne(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, row) => {
                if (err) {
                    console.error('Erreur SQL : ' + err)
                    reject(err)
                } else {
                    //console.log(rows)
                    resolve(row)
                }
            })
        })
    }

    /**
    * 
    * @param {String} sql la requête SQL à exécuter
    * @param {Array} params  le tableau des paramètre de la requête SQL
    * @returns {Promise} le resultat du traitement
    */

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, (err, result) => {
                if (err) {
                    console.error('Erreur SQL : ' + err)
                    reject(false)
                } else {
                    resolve(true)
                }
            })
        })
    }
}



module.exports = new Repository(db);