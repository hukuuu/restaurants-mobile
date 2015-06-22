angular.module('starter.services')
.factory('CartService', function () {
  var cart = []
  var i = 0

  return {
    addItem: function (item) {
      var c = angular.copy(item)
      c.id = i++
      cart.push(c)
    },
    removeItem: function (id) {
      cart = cart.filter(function (item) {
        return item.id !== id
      })
    },
    getAllItems: function () {
      return cart
    },
    clearAllItems: function () {
      cart = []
    }
  }
})
