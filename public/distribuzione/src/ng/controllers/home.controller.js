import _ from 'lodash'

homeController.$inject = ['$scope', '$document', 'dataService'];

export default function homeController($scope, $document, dataService) {
    $scope.needHelp = undefined;

    $scope.helpDetails = {
        'availability': 0,
        'radius': 0
    };

    $scope.userAvailability = [];

    $scope.sendAvailability = () => {
        dataService.setUserOrderAvailability(713, $scope.helpDetails.radius, $scope.helpDetails.availability).then(data => {
            console.log('OK')
        });
    }

    $scope.askAvailability = () => {
        dataService.orderAvailabilities(713).then(data => {
            $scope.userAvailability = _.map(data.disponibili, 'utente')
        });
    }

    var map;
    $document.ready(() => {
        setTimeout(function() {
            dataService.orderInfo(713).then(data => {
                let lat = data.supervisore.lat
                let lng = data.supervisore.lng
                initMap(lat, lng)
            })
        }, 500)
    });

    function initMap(lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat, lng },
            zoom: 9
        });

        var marker = new google.maps.Marker({position: { lat, lng }, map: map});
    }
};