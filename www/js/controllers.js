angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('MyQRCodeCtrl', function($scope, User) {
	User.getInfo().then(function(res) {
		$scope.email = res.data.data.email;

		var qrUrl = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='
			+ $scope.email
			+ '&choe=UTF-8';

		$scope.qrUrl = qrUrl;
	})
});

