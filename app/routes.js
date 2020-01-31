const passport = require("passport")

module.exports = (app) => {

    app.get('/', (req, res) => {
        let Controller = require("../controllers/Home.js")
        let Home = new Controller(req, res)
        Home.print()
    })
    
    app.get('/inscription', (req, res) => {
        let Controller = require("../controllers/SignUp.js")
        let SignUp = new Controller(req, res)
        SignUp.printForm()
    })
    
    app.post('/inscription', (req, res) => {
        let Controller = require("../controllers/SignUp.js")
        let SignUp = new Controller(req, res)
        SignUp.process()
    })


        
    app.get('/connexion', (req, res) => {
        let Controller = require("../controllers/SignIn.js")
        let SignIn = new Controller(req, res)
        SignIn.printForm()
    })
    
    app.post('/connexion', (req, res) => {
        let Controller = require("../controllers/SignIn.js")
        let SignIn = new Controller(req, res)
        SignIn.process()
    })


    // la connexion google avec Passport
    app.get('/connexion/github', 
        passport.authenticate('github', { scope: ['profile'] })
    )
    
    // la page de callback
    app.get('/connexion/github/callback', 
        passport.authenticate('github', { 
            successRedirect: '/', 
            failureRedirect: '/connexion' 
        })
    )


    // la connexion google avec Passport
    app.get('/connexion/google', 
        passport.authenticate('google', { scope: ['profile'] })
    )
    // la page de callback
    app.get('/connexion/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/connexion' }));



    // la connexion google avec Passport
    app.get('/connexion/github', 
        passport.authenticate('github', { scope: ['profile'] })
    )
    // la page de callback
    app.get('/connexion/github/callback', 
        passport.authenticate('github', { 
            successRedirect: '/', 
            failureRedirect: '/connexion' 
        })
    );


    app.get('/deconnexion', (req, res) => {
        let Controller = require("../controllers/SignOut.js")
        let SignOut = new Controller(req, res)
        SignOut.process()
    })
}