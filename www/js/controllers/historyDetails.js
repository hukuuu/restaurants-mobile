angular.module('starter.controllers')
.controller('HistoryDetailsCtrl', function ($scope, $stateParams, HistoryService) {
  console.log($stateParams.id);
  $scope.order = HistoryService.findById(parseInt($stateParams.id))
  console.log($scope.order);

  $scope.getTotalOrderPrice = function () {
    return $scope.order.items.reduce(function (a,b) {
      return a + b.price
    },0)
  }
})
