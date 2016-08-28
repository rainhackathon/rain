angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('MyQRCodeCtrl', function($scope, User) {
	User.getInfo().then(function(res) {
		console.log(res.data.data.email)
		$scope.email = res.data.data.email
	})
});


