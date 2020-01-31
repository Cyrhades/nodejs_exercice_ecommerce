// chargement du fichier de config
const config = require("./app/config.js")

// Connexion à MongoDB
const mongoose = require('mongoose')
mongoose.connect(
    config.mongodbConnectionString, 
    {connectTimeoutMS : 3000, socketTimeoutMS: 20000, useNewUrlParser: true, useUnifiedTopology: true }
)

// Faker
const faker = require('faker');


let product = {};
const Product = require('./models/Product.js')
var oProduct = new Product();

for(let i = 1; i <= 1000; i++) {
    let randomNumber = Math.floor(Math.random() * Math.floor(300))
    product.name = faker.commerce.productName()
    product.description = `${product.name} est un produit ${faker.lorem.paragraph()}`
    product.image = `https://i.picsum.photos/id/${randomNumber}/200/300.jpg`
    product.price = faker.commerce.price()

    // Création du produit
    oProduct.add(product.name, product.description, product.image, product.price)
}