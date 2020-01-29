module.exports = class Register {

    printForm(request, response) {
        response.render('user_register', {form : request.body})        
    }

    async process(request, response) {

        let UserModel = require('../models/User.js')
        let User = new UserModel()

        let formError = null
        // On vérifie la confirmation du mot de passe
        if(request.body.password != request.body.cpassword) {
            formError = `La confirmation de votre mot de passe n'est pas correcte !`  
        }

        let emailExists = await User.emailExists(request.body.email);
        if(emailExists) {
            formError = `Cette email est déjà enregistré dans notre base de données !`
        }
        
        // Si il y a eut une erreur on stop
        if(formError !== null) {
            response.render('user_register', {
                form : request.body,
                error : formError
            })
            return;
        }

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