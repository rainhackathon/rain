//Ionic Starter App

//angular.module is a global place for creating, registering and retrieving Angular modules
//'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
//the 2nd parameter is an array of 'requires'
//'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
    'ngMessages',
    'ionic.contrib.ui.tinderCards',
    'starter.controllers',
    'starter.controllers.accounts',
    'starter.controllers.transactions',
    'starter.controllers.menu',
    'starter.controllers.tips',
    'starter.controllers.deposits',
    'starter.services.accounts',
    'starter.services.transactions'])

    .constant('API', 'https://rehive.com/api/1')
    .constant('REFRESH_INTERVAL', 3000)

    .directive('noScroll', function ($document) {

        return {
            restrict: 'A',
            link: function ($scope, $element, $attr) {


                $document.on('touchmove', function (e) {
                    e.preventDefault();
                });
            }

        }
    })

    .config(function ($httpProvider, $ionicConfigProvider, $compileProvider) {
        'use strict';
        //Switch off caching:
        //$ionicConfigProvider.views.maxCache(0);
        //Force buttons to bottom of screen:
        $ionicConfigProvider.tabs.position('bottom');
        //Insert JWT token into all api requests:
        $httpProvider.interceptors.push('authInterceptor');
    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // Accounts
            .state('login', {
                url: '/login',
                templateUrl: 'templates/accounts/login.html',
                controller: 'LoginCtrl'
            })

            // Menu
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/elements/menu.html',
                controller: 'MenuCtrl'
            })

            // Transactions
            .state('app.transactions', {
                url: '/transactions',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/transactions/index.html',
                        controller: 'TransactionsCtrl'
                    }
                }
            })

            // Add Credit Card
            .state('app.add_credit_card', {
                url: '/add_credit_card',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/deposit/add_credit_card.html',
                        controller: 'AddCreditCardCtrl'
                    }
                }
            })

            // Choose Credit Card
            .state('app.choose_credit_card', {
                url: '/choose_credit_card',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/deposit/choose_credit_card.html',
                        controller: 'ChooseCreditCardCtrl'
                    }
                }
            })

            // Create deposit
            .state('app.create_deposit', {
                url: '/create_deposit',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/deposit/create_deposit.html',
                        controller: 'CreateDepositCtrl'
                    }
                },
                params: {
                    amount: null
                }
            })

            // Confirm deposit
            .state('app.confirm_deposit', {
                url: '/confirm_deposit',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/deposit/confirm_deposit.html',
                        controller: 'ConfirmDepositCtrl'
                    }
                },
                params: {
                    amount: null
                }
            })

            // Success deposit
            .state('app.success_deposit', {
                url: '/success_deposit',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/deposit/success_deposit.html',
                        controller: 'SuccessDepositCtrl'
                    }
                },
                params: {
                    amount: null
                }
            })

            // Scan Tip
            .state('app.scan_tip', {
                url: '/scan_tip',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tip/scan_tip.html',
                        controller: 'ScanTipCtrl'
                    }
                },
                params: {
                    email: null
                }
            })

            // Flip Tip
            .state('app.flip_tip', {
                url: '/flip_tip',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tip/flip_tip.html',
                        controller: 'FlipTipCtrl'
                    }
                },
                params: {
                    email: null
                }
            })

            .state('app.receive', {
                url: '/receive',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/MyQRCode.html',
                        controller: 'MyQRCodeCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/scan_tip');
    });
