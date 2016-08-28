angular.module('starter.controllers.tips', [])

    .controller('ScanTipCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.actions = "Scan QR";
    })

    .controller('CreateTipCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.actions = "Create Tip";
    })

    .controller('ConfirmTipCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.actions = "Confirm Tip";
    });