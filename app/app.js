//app.js

var routerApp = angular.module('routerApp', ['ui.router']);


routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/filmes');

    $stateProvider
        //Filmes
        .state('create', {
            url: '/create',
            templateUrl: '/views/create.html',
            controller: 'filmeController'
        }).state('verfilmes', {
            url: '/filmes',
            templateUrl: '/views/filmes.html',
            controller: 'filmeController'
        }).state("edit", {
            url: "/edit/:_id",
            templateUrl: "/views/create.html",
            controller: "filmeController"
        })

        //Atores
        .state('createator', {
            url: '/createator',
            templateUrl: '/views/createator.html',
            controller: 'peopleController'
        }).state('verpeople', {
            url: '/people',
            templateUrl: '/views/people.html',
            controller: 'peopleController'
        }).state("editator", {
            url: "/editator/:_id",
            templateUrl: "/views/createator.html",
            controller: "peopleController"
        })


        //Diretor
        .state('creatediretor', {
            url: '/creatediretor',
            templateUrl: '/views/creatediretor.html',
            controller: 'peopleController'
        }).state("editdiretor", {
            url: "/editdiretor/:_id",
            templateUrl: "/views/creatediretor.html",
            controller: "peopleController"
        })




       .state("contact", {
            url: "/contact",
            templateUrl: "/views/contact.html"
        });

}).constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
});