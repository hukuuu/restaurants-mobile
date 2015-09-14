angular.module('starter.controllers')
  .controller('RestaurantDetailsCtrl', function($scope, $stateParams, $ionicLoading, $timeout, $ionicModal, CartService, RestaurantsService, HistoryService) {

    $scope.time = 'Not set'
    $scope.seats = 4
    $scope.timePickerObject = {
      inputEpochTime: ((new Date())
        .getHours() * 60 * 60), //Optional
      step: 15, //Optional
      // format: 12, //Optional
      titleLabel: 'Set time', //Optional
      setLabel: 'Set', //Optional
      closeLabel: 'Close', //Optional
      setButtonType: 'button-positive', //Optional
      closeButtonType: 'button-stable', //Optional
      callback: function(val) { //Mandatory
        if (typeof (val) === 'undefined') {
           console.log('Time not selected');
         } else {
           var selectedTime = new Date(val * 1000);
           console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
           $scope.time = selectedTime.getUTCHours() + ':' + (selectedTime.getUTCMinutes() == 0 ? '00' : selectedTime.getUTCMinutes())
         }
      }
    };

    $ionicModal.fromTemplateUrl('templates/order.html', {
        scope: $scope,
        animation: 'slide-in-up'
      })
      .then(function(modal) {
        $scope.modal = modal
      })

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    })

    $scope.viewOrder = function() {
      console.log('view order');
      $scope.modal.show();
    }


    var res = RestaurantsService.findById($stateParams.id)
    $scope.res = res
    var groups = [{
      name: 'soups',
      items: []
    }, {
      name: 'salads',
      items: []
    }, {
      name: 'main',
      items: []
    }, {
      name: 'desserts',
      items: []
    }, {
      name: 'drinks',
      items: []
    }]
    res.menu.forEach(function(item) {
      var group = groups.filter(function(g) {
        return g.name === item.category
      })[0]
      group.items.push(item)
    })

    $scope.groups = window.groups = groups

    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };

    $scope.addItemToCart = function(item, count) {
      console.log(item, count);
      item.count = count
      CartService.addItem(item)
      message('item added')
    };

    $scope.removeItemFromCart = function(id) {
      CartService.removeItem(id)
      message('item removed')
    }

    $scope.getAllItems = function() {
      return CartService.getAllItems();
    }

    $scope.hideModal = function() {
      $scope.modal.hide();
    }

    $scope.finishOrder = function() {
      message('order is finished')
      CartService.getAllItems();
      HistoryService.addItem({
        time: new Date()
          .getTime(),
        restaurant: res,
        items: CartService.getAllItems(),
        hours: $scope.time,
        seats: $scope.seats
      })
      $scope.seats = 4;
      $scope.time = "Not set";
      CartService.clearAllItems()
    }

    $scope.getTotalOrderPrice = function() {
      return CartService.getAllItems()
        .reduce(function(acc, current) {
          return acc + current.price * current.count
        }, 0)
    }

    $scope.getTotalOrderCount = function() {
      return CartService.getAllItems()
        .length
    }

    $scope.clearOrder = function() {
      CartService.clearAllItems();
      message('order cleared')
    }

    function message(m, timeout) {
      $ionicLoading.show({
        template: m
      })
      $timeout($ionicLoading.hide, timeout || 650)
    }


    window.cart = CartService
  })
