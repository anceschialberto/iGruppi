signinController.$inject = ['$scope', 'dataService'];

export default function signinController($scope, dataService) {
    $scope.userEmail;
    $scope.userPasswd;

    $scope.signin = () => {
        dataService.loginUser($scope.userEmail, $scope.userPasswd).then(data => {
            debugger;
        });
    };
};