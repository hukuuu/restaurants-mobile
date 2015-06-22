angular.module('starter.controllers')
  .controller('HomeCtrl', function($scope, $state, RestaurantsService, uiGmapGoogleMapApi) {


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
      navigator.geolocation.getCurrentPosition(function(geolocation) {
        $scope.map = {
          center: {
            latitude: geolocation.coords.latitude,
            longitude: geolocation.coords.longitude
          },
          zoom: 16
        };

        $scope.foo = function(_, _, marker) {
          console.log(marker);
          $state.go('tab.restaurant', {
            id: marker.res.id
          })
        }

        $scope.markers = RestaurantsService.findAll()
          .map(function(res, i) {
            return {
              id: i,
              latitude: res.latitude,
              longitude: res.longitude,
              icon: 'img/' + ['carrot','burger','meet','pizza'][Math.round(
                Math.random() * 3
              )] + '.png',
              labelVisibleOnInfo: false,
              template: 'templates/infoWindow.html',
              res: res,
              options: {
                click: $scope.foo,
                labelContent: res.name //,
                  // labelAnchor: new google.maps.Point(25, 0)
              }
            }
          })

      })
    });

  })
