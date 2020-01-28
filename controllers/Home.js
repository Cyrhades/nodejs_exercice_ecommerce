module.exports = class Home {
    print(request, response) {
        response.render('index')
    }
}