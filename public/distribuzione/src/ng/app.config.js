routing.$inject = ['$routeProvider']
location.$inject = ['$locationProvider']
restangular.$inject = ['RestangularProvider']
localStorage.$inject = ['localStorageServiceProvider']

export function routing($routeProvider) {
    $routeProvider
        .when('/signin', {
            template: require('./pages/signin.html'),
            controller: 'SigninController'
        })
        .when('/home', {
            template: require('./pages/home.html'),
            controller: 'HomeController'
        })
        .otherwise({ redirectTo: '/signin' })
}

export function location($locationProvider) {
    $locationProvider
        .html5Mode(false)
        .hashPrefix('')
}

export function restangular(RestangularProvider) {
    RestangularProvider
        .setBaseUrl('api/1')
        .setRequestSuffix('/')
}

export function localStorage(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('igruppi')
        .setStorageType('sessionStorage')
        .setDefaultToCookie(false)
        .setNotify(true, true)
}