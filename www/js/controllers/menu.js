angular.module('starter.controllers.menu', [])

    .controller('MenuCtrl', function ($scope, $state, $http, $window, $ionicModal, $ionicLoading, Balance, Conversions) {

        $scope.refreshData = function () {
            var getBalance = Balance.get();

            console.log('Get balance.');

            getBalance.success(
                function (res) {
                    $window.localStorage.setItem('myCurrency', JSON.stringify(res.data.currency));
                    $scope.balance = Conversions.from_cents(res.data.balance);
                    $scope.currency = res.data.currency;
                }
            );

            getBalance.catch(function (error) {

            });
        };

        $scope.refreshData();
    });

