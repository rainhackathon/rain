angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('MyQRCodeCtrl', function($scope, User) {
	User.getInfo().then(function(res) {
		$scope.email = res.data.data.email

		var qrUrl = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='
			+ $scope.email
			+ '&choe=UTF-8';

		$scope.qrUrl = qrUrl;
	})
})

.controller('CardsCtrl', function($scope, TDCardDelegate, Transaction) {
  console.log('CARDS CTRL');
  $scope.email = $stateParams.email;
  var cardTypes = [
    { image: 'img/dollar.jpg' },
    { image: 'img/dollar.jpg' },
    { image: 'img/dollar.jpg' },
    { image: 'img/dollar.jpg' }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

    $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    console.log('Hello');
    var metadata = {'type': 'tip'};
    Transaction.send(25, $scope.email, '', metadata);
    $scope.addCard()
  };
})

  .controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
});


