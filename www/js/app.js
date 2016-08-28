//Ionic Starter App

//angular.module is a global place for creating, registering and retrieving Angular modules
//'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
//the 2nd parameter is an array of 'requires'
//'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
                           'ngMessages',
                           'starter.controllers',
                           'starter.controllers.accounts',
                           'starter.controllers.transactions',
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

                        	   // Home
                        	   .state('app.home', {
                        		   url: '/home',
                        		   views: {
                        			   'menuContent': {
                        				   templateUrl: 'templates/home/index.html',
                        				   controller: 'TransactionsCtrl'
                        			   }
                        		   }
                        	   })

                        	   .state('app', {
                        		   url: '/app',
                        		   abstract: true,
                        		   templateUrl: 'templates/menu.html',
                        		   controller: 'AppCtrl'
                        	   })

//                        	   .state('app.MyQRCode', {
//                        		   url: '/MyQRCode',
//                        		   views: {
//                        			   'menuContent': {
//                        				   templateUrl: 'templates/MyQRCode.html',
//                        				   controller: 'MyQRCodeCtrl'
//                        			   }
//                        		   }
//                        	   })

                        	   ;
                        	   // if none of the above states are matched, use this as the fallback
                        	   $urlRouterProvider.otherwise('/app/home');
                           });
