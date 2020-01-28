const UserMongo = require('./UserMongoDB.js')
const bcrypt = require("bcryptjs")

module.exports = class User {

    add(civility, lastname, firstname, email, password) {
        let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        UserMongo.create({civility, lastname, firstname, email, password : hash})
    }
}
