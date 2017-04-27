angular.module("showroomer", ["ngRoute", "ngResource"]);
var app = angular.module("showroomer");

function configFN($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: "CloudController",
            templateUrl: "views/cloud.view.html"
        })
        .when('/home', {
            controller: "SearchController",
            templateUrl: "views/cloud.view.html"
        })

    .otherwise({
        redirectTo: '/home'
    });
}
configFN.$inject = ['$routeProvider'];
app.config(configFN);