'use strict';

// Angular app declaration
var app = angular.module('myApp', []);

// Controller for index page
app.controller('myCtrl', ['$scope',
    function($scope) {

        // Change background color function
        $scope.saveBgColor = function() {

            // Local variable declaration
            var colorvalue = $scope.radiumoneCtrl.bgcolorvalue;

            // Set the background color from input
            $scope.bgcolor = colorvalue;

            // Clear the input field (better UX)
            $scope.radiumoneCtrl.bgcolorvalue = '';
        };
    }
]);
