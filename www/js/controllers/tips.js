angular.module('starter.controllers.tips', [])

    .controller('ScanTipCtrl', function ($scope) {
        'use strict';
        $scope.data = {};

        $scope.scanQr = function () {
            cordova.plugins.barcodeScanner.scan(
                function (result) {

                    console.log(result);

                    $state.go('app.create_tip', {
                        email: result.text
                    });

                    //alert("We got a barcode\n" +
                    //    "Result: " + result.text + "\n" +
                    //    "Format: " + result.format + "\n" +
                    //    "Cancelled: " + result.cancelled);
                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        }
    })

    .controller('CreateTipCtrl', function ($scope) {
        'use strict';
        $scope.data = {};


    })

    .controller('ConfirmTipCtrl', function ($scope) {
        'use strict';
        $scope.email = $stateParams.email;

    });