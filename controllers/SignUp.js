const AbstractController = require('./AbstractController.js')

module.exports = class SignUp extends AbstractController {
   
    constructor(request, response) {
        super(request, response)
        this.isConnectedRedirect();
    }

    printForm() {
        this.response.render('user_register', {form : this.request.body})        
    }

    async process() {

        let UserModel = require('../models/User.js')
        let User = new UserModel()

        let formError = null
        // On vérifie la confirmation du mot de passe
        if(this.request.body.password != this.request.body.cpassword) {
            formError = `La confirmation de votre mot de passe n'est pas correcte !`  
        }

        let emailExists = await User.emailExists(this.request.body.email);
        if(emailExists) {
            formError = `Cette email est déjà enregistré dans notre base de données !`
        }
        
        // Si il y a eut une erreur on stop
        if(formError !== null) {
            this.response.render('user_register', {
                form : this.request.body,
                error : formError
            })
            return;
        }

        User.add(
            this.request.body.civility, 
            this.request.body.lastname, 
            this.request.body.firstname, 
            this.request.body.email, 
            this.request.body.password
        )        
        this.response.redirect('/')
    }
}