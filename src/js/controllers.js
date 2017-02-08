'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);


/* Config */
phonecatApp.config([
    '$routeProvider', '$locationProvider',
    function ($routeProvide, $locationProvider) {
        $routeProvide
            .when('/home', {
                templateUrl: 'src/templates/home.html',
                controller: 'PhoneListCtrl'
            })
            .when('/', {
                templateUrl: 'src/templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'src/templates/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'src/templates/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/phones/:phoneId', {
                templateUrl: 'src/templates/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
phonecatApp.filter('checkmark',function(){
    return function(input){

    }
})
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.title = 'Телефоны';

    $http.get('src/phones/phones.json').success(function (data, status, headers, config) {
        /*console.log('This is Data:', data, '\n\nThis is Status:', status, '\n\nThis is Headers:', headers, '\n\nThis is config:', config);*/
        $scope.phones = data;
    });

}]);
phonecatApp.controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);

phonecatApp.controller('AboutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
phonecatApp.controller('ContactCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    var url = 'src/phones/about/' + $routeParams.phoneId + '.json';
    $http.get(url).success(function (data, status, headers, config) {
        /*console.log('This is Data:', data, '\n\nThis is Status:', status, '\n\nThis is Headers:', headers, '\n\nThis is config:', config);*/
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);