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
        .when('/category', {
            controller: "SearchController",
            templateUrl: "views/category.view.html"
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

