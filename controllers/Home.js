const AbstractController = require('./AbstractController.js')

module.exports = class Home extends AbstractController {
 
    print() {        
        let ProductModel = require('../models/Product.js')
        new ProductModel().get(this.request.query.page||1).then((data) => {
            this.response.render('index', {
                data
            })
        })
    }
}