'use strict';

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http',
    function($scope, $http) {

        // Gets JSON data
        var profile = this;
        $http.get('data/articles.json').success(function(data) {
            $scope.profile.data = data;
        });

        // Adds Active class
        $scope.selected = 0;
        $scope.select= function(index) {
           $scope.selected = index;
        };
    }
]);
