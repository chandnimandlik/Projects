'use strict';

var app = angular.module('cbaApp', []);

app.controller('cbaCtrl', ['$scope', '$http',
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
