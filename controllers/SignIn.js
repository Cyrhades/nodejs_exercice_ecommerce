const AbstractController = require('./AbstractController.js')

module.exports = class SignIn extends AbstractController {
   
    constructor(request, response) {
        super(request, response)
        this.isConnectedRedirect();
    }
    
    printForm()
    {
        this.response.render('signin')
    }


    async process()
    {
        let UserModel = require('../models/User.js')
        let User = new UserModel()

        let user = await User.connect(this.request.body.email, this.request.body.password);
        if(user) {
            this.request.session.user = user
            this.request.session.user.connected = true
            this.response.redirect('/')
            return;
        }
        this.response.redirect('/connexion')
    }
}