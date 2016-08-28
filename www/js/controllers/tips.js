angular.module('starter.controllers.tips', [])

    .controller('ScanTipCtrl', function ($scope, $state) {
        'use strict';
        $scope.data = {};

        $scope.scanQr = function () {

            cordova.plugins.barcodeScanner.scan(
                function (result) {

                    console.log(result);

                    $state.go('app.flip_tip', {
                        email: result.text
                    });

                    if (result.cancelled == 1) {
                         $state.go('app.scan_tip')
                    }

                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        }

        $scope.blurb = function () {

            var audio = new Audio('audio/takemymoney.mp3');
            audio.play();
        };
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
            var metadata = {'type': 'tip', 'description': 'Tip'};
            Transaction.send(25, $scope.email, '', metadata);
            console.log('SENT!!!!');
            $scope.addCard();

            var audio = new Audio('audio/money.mp3');
            audio.play();

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