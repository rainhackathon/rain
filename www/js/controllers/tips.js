angular.module('starter.controllers.tips', [])

    .controller('ScanTipCtrl', function ($scope, $state) {
        'use strict';
        $scope.data = {};

        $scope.scanQr = function () {

            $state.go('app.flip_tip', {
                        email: 'helghardt@gmail.com'
                    });

            //cordova.plugins.barcodeScanner.scan(
            //    function (result) {
            //
            //        console.log(result);
            //
            //        $state.go('app.flip_tip', {
            //            email: 'helghardt@gmail.com'
            //        });
            //
            //        //alert("We got a barcode\n" +
            //        //    "Result: " + result.text + "\n" +
            //        //    "Format: " + result.format + "\n" +
            //        //    "Cancelled: " + result.cancelled);
            //    },
            //    function (error) {
            //        alert("Scanning failed: " + error);
            //    }
            //);
        }
    })

    .controller('FlipTipCtrl', function ($scope, $state, $stateParams, TDCardDelegate, Transaction) {
        console.log('CARDS CTRL');
        $scope.email = $stateParams.email;

        if ($scope.email === null) {
            console.log('Redirect to scan.');
            $state.go('app.scan_tip');
        }

        var cardTypes = [
            {image: 'img/dollar.jpg'},
            {image: 'img/dollar.jpg'},
            {image: 'img/dollar.jpg'},
            {image: 'img/dollar.jpg'}
        ];

        $scope.cards = Array.prototype.slice.call(cardTypes, 0);

        $scope.addCard = function () {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        };

        $scope.cardDestroyed = function (index) {
            var metadata = {'type': 'tip'};
            //Transaction.send(25, $scope.email, '', metadata);
            $scope.addCard()
        };
    })

    .controller('CardCtrl', function ($scope, TDCardDelegate) {
        $scope.cardSwipedLeft = function (index) {
            console.log('LEFT SWIPE');
            $scope.addCard();
        };
        $scope.cardSwipedRight = function (index) {
            console.log('RIGHT SWIPE');
            $scope.addCard();
        };
    });