const AbstractController = require('./AbstractController.js')

module.exports = class SignOut  extends AbstractController {

    process() {
        this.request.session.user = null
        this.response.redirect('/')
    }
}