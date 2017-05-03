angular.module("showroomer", ["ngRoute", "ngResource","ngMap",'ngMaterial', 'ngMessages', 'material.svgAssetsCache','rzModule', "dropstore-ng"]);

var app = angular.module("showroomer");
function configFN($routeProvider) {
    $routeProvider
        .when('/home2', {
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
        .when('/becomeShowroomer/:buyerId', {
            controller: "BecomeShowroomerController",
            templateUrl: "views/becomeShowroomer.view.html"
        })
        .when('/categorySports', {
            controller: "SearchController",
            templateUrl: "views/categorySports.view.html"
        })
         .when('/categoryTechnologies', {
            controller: "SearchController",
            templateUrl: "views/categoryTechnologies.view.html"
        })
        .when('/categoryMusic', {
            controller: "SearchController",
            templateUrl: "views/categoryMusic.view.html"
        })
        .when('/categoryAccessories', {
            controller: "SearchController",
            templateUrl: "views/categoryAccessories.view.html"
        })
        .when('/categoryClothes', {
            controller: "SearchController",
            templateUrl: "views/categoryClothes.view.html"
        })
        .when('/categoryTools', {
            controller: "SearchController",
            templateUrl: "views/categoryTools.view.html"
        })
        .when('/cart', {
            controller: "CartController",
            templateUrl: "views/cart.view.html"
        })
        .when('/empty', {
            templateUrl: "views/empty.view.html"
        })
        .when('/checkout', {
            controller: "CartController",
            templateUrl: "views/checkout.view.html"
        })
        .when('/drop', {
            controller: "dropController",
            templateUrl: "views/drop.view.html"
        })
        .otherwise({
            redirectTo: '/home'
        });

}
configFN.$inject = ['$routeProvider'];
app.config(configFN);

