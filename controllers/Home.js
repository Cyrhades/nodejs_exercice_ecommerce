const AbstractController = require('./AbstractController.js')

module.exports = class Home extends AbstractController {
 
    print() {
        this.response.render('index')
    }
}