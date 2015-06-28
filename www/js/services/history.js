angular.module('starter.services')
  .factory('HistoryService', function() {
    var statuses = {
      pending: 'pending'
    }
    var items = [{
      "id": 0,
      "status": "pending",
      "time": 1435491698801,
      "restaurant": {
        "menu": [],
        "openHours": "08:30 - 21:00",
        "phone": "+359 (898) 404-2724",
        "category": "dinner",
        "address": "933 Bayview Avenue, Belvoir, Ohio",
        "longitude": 23.361,
        "latitude": 42.673,
        "name": "ZIDOX",
        "id": "55832661883d17636d6bd8a1"
      },
      "items": [{
        "price": 6.91,
        "name": "mollit",
        "category": "desserts",
        "count": 1,
        "id": 0
      }],
    }, {
      "id": 1,
      "status": "pending",
      "time": 1435491728940,
      "restaurant": {
        "menu": [],
        "openHours": "09:00 - 23:00",
        "phone": "+359 (828) 478-3506",
        "category": "bar",
        "address": "488 Alice Court, Herlong, Virgin Islands",
        "longitude": 23.365,
        "latitude": 42.671,
        "name": "COMSTAR",
        "id": "558326614f7673a1c88b5361"
      },
      "items": [{
        "price": 14.67,
        "name": "consectetur",
        "category": "main",
        "count": 1,
        "id": 1
      }, {
        "price": 14.65,
        "name": "do",
        "category": "main",
        "count": 2,
        "id": 2
      }, {
        "price": 3.13,
        "name": "pariatur",
        "category": "main",
        "count": 1,
        "id": 3
      }],
    }, {
      "id": 2,
      "status": "pending",
      "time": 1435491750557,
      "restaurant": {
        "menu": [],
        "openHours": "09:00 - 23:00",
        "phone": "+359 (828) 478-3506",
        "category": "bar",
        "address": "488 Alice Court, Herlong, Virgin Islands",
        "longitude": 23.365,
        "latitude": 42.671,
        "name": "COMSTAR",
        "id": "558326614f7673a1c88b5361"
      },
      "items": [{
        "price": 3.94,
        "name": "occaecat",
        "category": "salads",
        "count": 1,
        "id": 4
      }, {
        "price": 16.44,
        "name": "dolor",
        "category": "salads",
        "count": 2,
        "id": 5
      }, {
        "price": 2.93,
        "name": "consequat",
        "category": "salads",
        "count": 1,
        "id": 6
      }]
    }]
    var i = items.length;

    var service = {
      addItem: function(item) {
        var it = angular.extend({
          id: i++,
          status: statuses.pending
        }, item)
        items.push(it)
      },
      findById: function(id) {
        return items.filter(function(i) {
          return i.id === id
        })[0]
      },
      getAllItems: function() {
        return items.sort(function (a,b) {
          return a.time - b.time
        })
      }
    }

    window.historyService = service
    return service

  })
