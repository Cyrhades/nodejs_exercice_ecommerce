module.exports = class SignIn {


    printForm(request, response)
    {
        response.render('signin')
    }


    async process(request, response)
    {
        let UserModel = require('../models/User.js')
        let User = new UserModel()

        let user = await User.connect(request.body.email, request.body.password);
        if(user) {
            response.redirect('/')
        }
        response.redirect('/connexion')
    }
}