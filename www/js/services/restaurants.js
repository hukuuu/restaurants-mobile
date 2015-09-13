angular.module('starter.services')
  .factory('RestaurantsService', function() {

    var restaurants = [{
      "menu": [{
        "price": 2.00,
        "name": "Cream soup",
        "category": "soups"
      }, {
        "price": 4.99,
        "name": "Borshch",
        "category": "soups"
      }, {
        "price": 3.50,
        "name": "Chicken soup",
        "category": "soups"
      }, {
        "price": 1.50,
        "name": "Tarator",
        "category": "soups"
      }, {
        "price": 2.00,
        "name": "Water",
        "category": "drinks"
      }, {
        "price": 2.50,
        "name": "Coca Cola",
        "category": "drinks"
      }, {
        "price": 2.50,
        "name": "Sprite",
        "category": "drinks"
      }, {
        "price": 6.50,
        "name": "Shopska",
        "category": "salads"
      }, {
        "price": 7.50,
        "name": "Ovcharska",
        "category": "salads"
      }, {
        "price": 7.50,
        "name": "Grucka",
        "category": "salads"
      }, {
        "price": 2.50,
        "name": "7up",
        "category": "drinks"
      }, {
        "price": 8,
        "name": "Musaka",
        "category": "main"
      }, {
        "price": 6.40,
        "name": "Sarma",
        "category": "main"
      }, {
        "price": 100,
        "name": "Kobe beef",
        "category": "main"
      }, {
        "price": 3.00,
        "name": "Creme Caramelle",
        "category": "desserts"
      }, {
        "price": 4.90,
        "name": "Tiramisu",
        "category": "desserts"
      }],
      "openHours": "09:00 - 01:00",
      "phone": "+359 (843) 490-3254",
      "category": "cafe",
      "address": "bul. Akademik Georgi Bonchev 31",
      "longitude": 23.369,
      "latitude": 42.675,
      "name": "Happy",
      "id": "55832661fce3411529090110"
    }, {
      "menu": [{
        "price": 15.7,
        "name": "quis",
        "category": "drinks"
      }, {
        "price": 16.98,
        "name": "ex",
        "category": "salads"
      }, {
        "price": 11.28,
        "name": "elit",
        "category": "main"
      }, {
        "price": 4.57,
        "name": "pariatur",
        "category": "main"
      }, {
        "price": 19.37,
        "name": "duis",
        "category": "soups"
      }, {
        "price": 18.64,
        "name": "ex",
        "category": "drinks"
      }, {
        "price": 14.06,
        "name": "in",
        "category": "main"
      }, {
        "price": 16.56,
        "name": "eu",
        "category": "soups"
      }, {
        "price": 15.68,
        "name": "ex",
        "category": "soups"
      }, {
        "price": 13.6,
        "name": "sit",
        "category": "soups"
      }, {
        "price": 11.57,
        "name": "cupidatat",
        "category": "salads"
      }, {
        "price": 4.88,
        "name": "adipisicing",
        "category": "desserts"
      }, {
        "price": 16.83,
        "name": "occaecat",
        "category": "desserts"
      }, {
        "price": 4.86,
        "name": "fugiat",
        "category": "drinks"
      }, {
        "price": 18.6,
        "name": "incididunt",
        "category": "drinks"
      }, {
        "price": 12.54,
        "name": "in",
        "category": "salads"
      }, {
        "price": 18.8,
        "name": "aliqua",
        "category": "salads"
      }, {
        "price": 6.3,
        "name": "exercitation",
        "category": "desserts"
      }, {
        "price": 5.17,
        "name": "ut",
        "category": "desserts"
      }, {
        "price": 9.67,
        "name": "et",
        "category": "desserts"
      }, {
        "price": 16.05,
        "name": "aliquip",
        "category": "salads"
      }, {
        "price": 1.13,
        "name": "Lorem",
        "category": "salads"
      }, {
        "price": 2.24,
        "name": "magna",
        "category": "drinks"
      }, {
        "price": 4.75,
        "name": "nisi",
        "category": "salads"
      }, {
        "price": 15.32,
        "name": "velit",
        "category": "soups"
      }, {
        "price": 18.2,
        "name": "adipisicing",
        "category": "drinks"
      }, {
        "price": 18.21,
        "name": "mollit",
        "category": "desserts"
      }, {
        "price": 5.84,
        "name": "et",
        "category": "main"
      }, {
        "price": 10.79,
        "name": "veniam",
        "category": "desserts"
      }],
      "openHours": "07:00 - 24:00",
      "phone": "+359 (878) 513-2549",
      "category": "dinner",
      "address": "968 Stone Avenue, Ruffin, Missouri",
      "longitude": 23.36,
      "latitude": 42.677,
      "name": "Victoria",
      "id": "5583266172f9174d53651d2b"
    }, {
      "menu": [{
        "price": 6.62,
        "name": "minim",
        "category": "salads"
      }, {
        "price": 6.31,
        "name": "elit",
        "category": "desserts"
      }, {
        "price": 10.75,
        "name": "exercitation",
        "category": "main"
      }, {
        "price": 5.24,
        "name": "est",
        "category": "salads"
      }, {
        "price": 11.15,
        "name": "cupidatat",
        "category": "salads"
      }, {
        "price": 18.82,
        "name": "veniam",
        "category": "drinks"
      }, {
        "price": 18.93,
        "name": "cillum",
        "category": "main"
      }, {
        "price": 8.25,
        "name": "sint",
        "category": "soups"
      }, {
        "price": 5.28,
        "name": "laboris",
        "category": "main"
      }, {
        "price": 15.82,
        "name": "ipsum",
        "category": "drinks"
      }, {
        "price": 13.73,
        "name": "velit",
        "category": "salads"
      }, {
        "price": 2.15,
        "name": "laborum",
        "category": "main"
      }, {
        "price": 5.86,
        "name": "id",
        "category": "soups"
      }, {
        "price": 13.52,
        "name": "deserunt",
        "category": "drinks"
      }, {
        "price": 9.51,
        "name": "exercitation",
        "category": "main"
      }, {
        "price": 11.08,
        "name": "aute",
        "category": "main"
      }, {
        "price": 16.45,
        "name": "non",
        "category": "main"
      }, {
        "price": 12.03,
        "name": "veniam",
        "category": "drinks"
      }, {
        "price": 5.13,
        "name": "qui",
        "category": "main"
      }, {
        "price": 17.77,
        "name": "commodo",
        "category": "salads"
      }, {
        "price": 11.41,
        "name": "Lorem",
        "category": "salads"
      }, {
        "price": 8.56,
        "name": "Lorem",
        "category": "main"
      }, {
        "price": 1.32,
        "name": "eu",
        "category": "salads"
      }, {
        "price": 5.48,
        "name": "anim",
        "category": "salads"
      }, {
        "price": 7.87,
        "name": "ipsum",
        "category": "main"
      }, {
        "price": 9.49,
        "name": "sint",
        "category": "main"
      }, {
        "price": 13.52,
        "name": "labore",
        "category": "desserts"
      }, {
        "price": 10.14,
        "name": "Lorem",
        "category": "main"
      }, {
        "price": 14.59,
        "name": "consequat",
        "category": "drinks"
      }, {
        "price": 14.69,
        "name": "amet",
        "category": "desserts"
      }],
      "openHours": "08:00 - 24:00",
      "phone": "+359 (881) 463-2768",
      "category": "dinner",
      "address": "156 Troutman Street, Camino, New York",
      "longitude": 23.366,
      "latitude": 42.675,
      "name": "Regal",
      "id": "5583266189aca04e95f7f3dd"
    }]


    var api = {
      findAll: function() {
        return restaurants
      },
      findById: function(id) {
        return restaurants.filter(function(res) {
          return res.id === id
        })[0]
      }
    }
    window.RestaurantsService = api
    return api
  })
