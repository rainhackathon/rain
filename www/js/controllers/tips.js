angular.module('starter.controllers.tips', [])

    .controller('ScanTipCtrl', function ($scope, $state) {
        'use strict';
        $scope.data = {};

        $scope.scanQr = function () {
            cordova.plugins.barcodeScanner.scan(
                function (result) {

                    console.log(result);

                    $state.go('app.create_tip', {
                        email: 'helghardt@gmail.com'
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

    .controller('CreateTipCtrl', function ($scope, $stateParams) {
        'use strict';
        $scope.data = {};
        $scope.email = $stateParams.email;
    })

    .controller('ConfirmTipCtrl', function ($scope) {
        'use strict';
    });