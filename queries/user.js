const database = require('../database.js')
const db = database.db
const pgp = database.pgp

const getUser = () => new Promise((resolve, reject) => {
    const query = `SELECT id,name,alias,email FROM users`
    return db.any(query)
    .then(data => resolve(data))
    .catch(err => reject(err))
})

module.exports = getUser
