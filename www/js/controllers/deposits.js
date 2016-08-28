angular.module('starter.controllers.deposits', [])

    .controller('AddCreditCardCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.actions = "Add Credit Card";
    })

    .controller('CreateDepositCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.actions = "Create Deposit";
    })

    .controller('ConfirmDepositCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.actions = "Confirm Deposit";
    });