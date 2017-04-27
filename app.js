angular.module("showroomer", ["ngRoute", "ngResource"]);
var app = angular.module("showroomer");

function configFN($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: "CloudController",
            templateUrl: "views/home.view.html"
        })
    
        .when('/product', {
            controller: "CloudController",
            templateUrl: "views/product.view.html"
        })
    
        .when('/category', {
                controller: "CloudController",
                templateUrl: "views/category.view.html"
            })

    .otherwise({
        redirectTo: '/home'
    });
}
configFN.$inject = ['$routeProvider'];
app.config(configFN);