dataService.$inject = ['Restangular', 'localStorageService']

export default function dataService(Restangular, localStorageService) {
    return {
        loginUser
    }

    function loginUser() {
        console.log('loginUser')
        debugger;
        return Restangular.all('user_profiles')
            .getList()
            .then(data => data.plain())
            .catch(e => console.error(e))
    }
}
