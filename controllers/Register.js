module.exports = class Register {

    printForm(request, response) {
        response.render('user_register')        
    }

    process(request, response) {

        let UserModel = require('../models/User.js')
        let User = new UserModel()
        User.add(
            request.body.civility, 
            request.body.lastname, 
            request.body.firstname, 
            request.body.email, 
            request.body.password
        )        
        response.redirect('/')
    }
}