const ProductMongo = require('./ProductMongoDB.js')


module.exports = class Product {

    add(name, description, image, price) {
        ProductMongo.create({name, description, image, price})
    }

    get(page = 1, limit = 30, skip = (page*limit)-limit)
    {
        return new Promise((resolve, rejected) => {
            // On recherche l'email
            ProductMongo.find().limit(limit).skip(skip).exec((err, products) => {
                if (err === null && products !== null) {
                    ProductMongo.countDocuments({}, (errCount, totalCount) => {
                        resolve({totalCount, limit, products})
                    })
                } else {
                    resolve(null);
                }
           })
       })
    }
}