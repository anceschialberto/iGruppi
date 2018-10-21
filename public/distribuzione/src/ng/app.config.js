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
        .setBaseUrl('/api')
        .setDefaultHeaders({
            'token': getCookie('token')
        })
        .setDefaultRequestParams(['get', 'post'], { token: getCookie('token') })
        .setRequestSuffix('')
}

export function localStorage(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('igruppi')
        .setStorageType('sessionStorage')
        .setDefaultToCookie(false)
        .setNotify(true, true)
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}