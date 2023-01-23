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


        // -------------------people--------------------
        .state('verpeople', {
            url: '/people',
            templateUrl: '/views/people.html',
            controller: 'peopleController'
        })

        //Atores
        .state('createator', {
            url: '/createator',
            templateUrl: '/views/createator.html',
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
        // ----------------------------------------------

       .state("login", {
            url: "/login",
            templateUrl: "/views/login.html"
        });

}).constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
});