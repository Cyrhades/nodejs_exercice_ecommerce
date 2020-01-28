const express = require('express')
const app = express()
const path = require("path")
const bodyParser = require('body-parser')
const chalk = require("chalk")
// chargement du fichier de config
const config = require("./app/config.js")


/**
 * Connexion à MongoDB
 */
const mongoose = require('mongoose')

mongoose.connect(
    config.mongodbConnectionString, 
    {connectTimeoutMS : 3000, socketTimeoutMS: 20000, useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.once('open', () =>  {
    console.log(
        chalk.yellow(`Connexion au serveur MongoDB : ${chalk.green(`OK`)}`)
    )
})

/**
 * Mise en place du midlleware bodyParser 
 * pour traiter les requetes http
 */
app.use(bodyParser.urlencoded({extended: false}))

/**
 * Mise en place du répertoire static (./public)
 */
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Mise en place du moteur de templating (PUG)
 */
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

/**
 * Les routes
 */
require("./app/routes.js")(app)

/**
 * Mise en écoute sur le port http
 */
app.listen(config.port, () => {
    console.log(
        chalk.red(`Le serveur est en écoute à l'adresse : ${chalk.blue(`http://127.0.0.1:${config.port}`)}`)
    )
})