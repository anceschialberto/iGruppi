dataService.$inject = ['Restangular', 'localStorageService']

export default function dataService(Restangular, localStorageService) {
    return {
        loginUser
    }

    function loginUser(email, password) {
        console.log('loginUser')
        return Restangular.one('login').get({ 'email': email, 'password': password })
            .then(data => data.plain())
            .catch(e => console.error(e))
    }
}
