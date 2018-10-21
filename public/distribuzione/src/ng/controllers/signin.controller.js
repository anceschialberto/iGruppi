signinController.$inject = ['$scope', 'dataService'];

export default function signinController($scope, dataService) {
    $scope.userEmail;
    $scope.userPasswd;

    $scope.signin = function() {
        $scope.userEmail;
        debugger;
    };
};