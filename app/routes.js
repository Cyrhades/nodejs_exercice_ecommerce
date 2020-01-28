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
}