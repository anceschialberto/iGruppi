signinController.$inject = ['$scope', '$location', 'dataService'];

export default function signinController($scope, $location, dataService) {
    $scope.userEmail;
    $scope.userPasswd;

    $scope.signin = () => {
        dataService.loginUser($scope.userEmail, $scope.userPasswd).then(data => {
            let token = data.token
            dataService.setCookie('token', token, 1)
            $location.path(`/home`)
        });
    };
};