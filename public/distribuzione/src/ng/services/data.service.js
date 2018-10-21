dataService.$inject = ['Restangular', 'localStorageService']

export default function dataService(Restangular, localStorageService) {
    return {
        loginUser,
        orderInfo,
        setCookie,
        getCookie
    }

    function loginUser(email, password) {
        console.log('loginUser')
        return Restangular.one('login').get({ 'email': email, 'passwd': password })
            .then(data => data.plain())
            .catch(e => console.error(e))
    }

    function orderInfo(idOrdine) {
        console.log('orderInfo')
        return Restangular.one('orderInfo').get({ 'idordine': idOrdine })
            .then(data => data.plain().data)
            .catch(e => console.error(e))
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
}
