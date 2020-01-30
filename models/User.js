const UserMongo = require('./UserMongoDB.js')
const bcrypt = require("bcryptjs")

module.exports = class User {

    add(civility, lastname, firstname, email, password) {
        let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        UserMongo.create({civility, lastname, firstname, email, password : hash})
    }

    emailExists(email) {
        return new Promise((resolve, rejected) => {
             // On recherche l'email
            UserMongo.findOne({ email }).exec((err, user) => {
                // Si il y a une erreur (pas de résultat)
                if (err !== null || user === null) resolve(false);
                resolve(true);
            })
        })
    }

    connect(email, password) {
        return new Promise((resolve, rejected) => {
            // On recherche l'email
           UserMongo.findOne({ email }).exec((err, user) => {

                if ( (err !== null || user === null) === false) {
                    if(bcrypt.compareSync(password, user.password)) {
                        resolve(user)
                    }
                }

               resolve(false);
           })
       })
    }
}
