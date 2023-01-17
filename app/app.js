//app.js

var routerApp = angular.module('routerApp', ['ui.router']);


routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
		.state('create', {
            url: '/create',
			templateUrl: '/views/create.html',
            controller: 'filmeController'
        }).state('home', {
            url: '/home',
            templateUrl: '/views/index.html'
        }).state('filmes', {
            url: '/filmes',
            templateUrl: '/views/filmes.html',
            controller: 'filmeController'
        }).state("edit", {
            url: "/edit/:_id",
            templateUrl: "/views/create.html",
            controller: "filmeController"
        }).state("contact", {
            url: "/contact",
            templateUrl: "/views/contact.html",
        });
        
}).constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
});