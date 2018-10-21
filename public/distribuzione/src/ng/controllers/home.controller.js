homeController.$inject = ['$scope', '$document', 'dataService'];

export default function homeController($scope, $document, dataService) {
    $scope.needHelp = undefined;

    var map;
    $document.ready(() => {
        dataService.orderInfo(713).then(data => {
            let lat = data.supervisore.lat
            let lng = data.supervisore.lng
            initMap(lat, lng)
        })
    });

    function initMap(lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat, lng },
            zoom: 9
        });

        var marker = new google.maps.Marker({position: { lat, lng }, map: map});
    }
};