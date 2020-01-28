const express = require('express')
const app = express()
const path = require("path")
const config = require("./app/config.js")

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(config.port, () => {
    console.log(`Le serveur est en écoute à l'adresse : http://127.0.0.1:${config.port}`)
})