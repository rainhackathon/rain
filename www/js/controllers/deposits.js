angular.module('starter.controllers.deposits', [])

    .controller('AddCreditCardCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
    })

    .controller('ChooseCreditCardCtrl', function ($scope) {
        'use strict';
        $scope.data = {};
        $scope.items = [{'number': '6755'}, {'number': '3456'}];
    })

    .controller('CreateDepositCtrl', function ($scope, $state, $window, $stateParams) {
        'use strict';
        $scope.data = {};
        $scope.items = [{'amount': '10'}, {'amount': '20'}, {'amount': '50'}];
        $scope.amount = $stateParams.amount;
    })

    .controller('ConfirmDepositCtrl', function ($scope, $state, $window, $stateParams, $ionicPopup, $ionicLoading, Transaction, Conversions) {
        'use strict';
        $scope.data = {};
        $scope.amount = $stateParams.amount;
        $scope.note = "Testing rain.";
        $scope.to = "helghardt@gmail.com";

        $scope.submit = function (amount, note, to) {
            $ionicLoading.show({
                template: 'Sending...'
            });

            console.log("Executing deposit transaction.");

            Transaction.deposit(Conversions.to_cents(amount), note, to).then(function (res) {
                if (res.status === 201) {
                    $ionicLoading.hide();
                    $state.go('app.success_deposit', {
                        amount: amount,
                        reference: 'reference'
                    });
                } else {
                    $ionicLoading.hide();
                    $ionicPopup.alert({title: "Error", template: res.data.message});
                }
            }).catch(function (error) {
                $ionicPopup.alert({title: 'Authentication failed', template: error.message});
                $ionicLoading.hide();
            });
        };

    })

    .controller('SuccessDepositCtrl', function ($scope, $stateParams) {
        'use strict';
        $scope.data = {};
        $scope.amount = $stateParams.amount;
        $scope.note = $stateParams.note;
        $scope.to = $stateParams.to;

    });