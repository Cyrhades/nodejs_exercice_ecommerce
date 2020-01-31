module.exports = class AbstractController {

    constructor(request, response) {

        if (this.constructor === AbstractController) {
            throw new TypeError('Abstract class "AbstractController" cannot be instantiated directly');
        }

        this.request = request
        this.response = response 
    }

    isConnectedRedirect() {
        if(this.request.session.user && this.request.session.user.connected === true) {
            this.response.redirect('/')
            return true;
        }
        return false;
    }
}