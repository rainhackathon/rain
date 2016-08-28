// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
    'ngMessages',
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

    .config(function ($httpProvider, $ionicConfigProvider, $compileProvider) {
        'use strict';
        //Switch off caching:
        $ionicConfigProvider.views.maxCache(0);
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
                templateUrl: 'templates/menu.html',
                controller: 'MenuCtrl'
            })

            // Scan Tip
            .state('app.scan_tip', {
                url: '/scan_tip',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tip/scan_tip.html',
                        controller: 'ScanTipCtrl'
                    }
                }
            })

            // Create Tip
            .state('app.create_tip', {
                url: '/create_tip',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tip/create_tip.html',
                        controller: 'CreateTipCtrl'
                    }
                }
            })

            // Create Tip
            .state('app.confirm_tip', {
                url: '/confirm_tip',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tip/confirm_tip.html',
                        controller: 'ConfirmTipCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/scan_tip');
    });
