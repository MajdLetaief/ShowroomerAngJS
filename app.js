
angular.module("showroomer", ["ngRoute", "ngResource","ngMap",'ngMaterial', 'ngMessages', 'material.svgAssetsCache','rzModule']);

var app = angular.module("showroomer");

function configFN($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: "CloudController",
            templateUrl: "views/home.view.html"
        })
        .when('/home', {
            controller: "StatsController",
            templateUrl: "views/home.view.html"
        })

        .when('/product/:productId', {
            controller: "ProductController",
            templateUrl: "views/product.view.html"
        })
        .when('/category', {
                controller: "SearchController",
                templateUrl: "views/category.view.html"
            })
    .otherwise({
        redirectTo: '/home'
    });
}
configFN.$inject = ['$routeProvider'];
app.config(configFN);