angular.module('starter.controllers')
  .controller('HistoryCtrl', function($scope, HistoryService) {
    $scope.history = HistoryService.getAllItems()

    $scope.getPrice = function (order) {
      return order.items.reduce(function (a,b) {
        return a + b.price
      },0)
    }
  })
