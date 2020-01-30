module.exports = (app) => {

    app.get('/', (req, res) => {
        let Controller = require("../controllers/Home.js")
        let Home = new Controller()
        Home.print(req, res)
    })
    
    app.get('/inscription', (req, res) => {
        let Controller = require("../controllers/Register.js")
        let Register = new Controller()
        Register.printForm(req, res)
    })
    
    app.post('/inscription', (req, res) => {
        let Controller = require("../controllers/Register.js")
        let Register = new Controller()
        Register.process(req, res)
    })


        
    app.get('/connexion', (req, res) => {
        let Controller = require("../controllers/SignIn.js")
        let SignIn = new Controller()
        SignIn.printForm(req, res)
    })
    
    app.post('/connexion', (req, res) => {
        let Controller = require("../controllers/SignIn.js")
        let SignIn = new Controller()
        SignIn.process(req, res)
    })
}