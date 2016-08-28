angular.module('starter.controllers.menu', [])

    .controller('MenuCtrl', function ($scope, $state, $http, $window, $ionicModal, $ionicLoading, Auth, Balance, Conversions) {

        $scope.refreshBalance = function () {

            var getBalance = Balance.get();
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
        console.log('Update balance.');
        $scope.refreshBalance();

        $scope.logOut = function (user) {
            //$ionicPopup.alert({title: 'Logging out, goodbye'});
            Auth.logout();
            console.log('Logout');
            $state.go('login');
        };
    });

