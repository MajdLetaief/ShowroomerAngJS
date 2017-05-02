function StatsFunctions($scope, $http, $location) {
    $scope.productsMostQuantity = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductsByMostQuantity").then(function (response) {

        $scope.productsMostQuantity = response.data;
        console.log($scope.productsMostQuantity);
    })
    $scope.productsBestOffer = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductBestOffer").then(function (response) {
        $scope.productsBestOffer = response.data;
        console.log($scope.productsBestOffer);
    })
    $scope.sumOfRates = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/sumOfRates").then(function (response) {
        $scope.sumOfRates = response.data;
        console.log($scope.sumOfRates);
    })
    $scope.sumOfRatesPerUser = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/sumOfRatesPerUser").then(function (response) {
        $scope.sumOfRatesPerUser = response.data;
        console.log($scope.sumOfRatesPerUser);
    })
    $scope.sumOfRatesPerProduct = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/sumOfRatesPerProduct", {
        headers: {
            "id": $scope.productId
        }
    }).then(function (response) {
        $scope.sumOfRatesPerProduct = response.data;
        console.log($scope.sumOfRatesPerProduct);
    })
    $scope.ProductsByMinQuantity = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductsByMinQuantity").then(function (response) {
        $scope.ProductsByMinQuantity = response.data;
        console.log($scope.ProductsByMinQuantity);
    })
    $scope.ProductsByMaxPrice = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductsByMaxPrice").then(function (response) {
        $scope.ProductsByMaxPrice = response.data;
        console.log($scope.ProductsByMaxPrice);
    })
    $scope.ProductsByMinPrice = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductsByMinPrice").then(function (response) {
        $scope.ProductsByMinPrice = response.data;
        console.log($scope.ProductsByMinPrice);
    })
    $scope.ProductsByMaxInteraction = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductsByMaxInteraction").then(function (response) {
        $scope.ProductsByMaxInteraction = response.data;
        console.log($scope.ProductsByMaxInteraction);
    })
    $scope.SumOfPurchases = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/SumOfPurchases").then(function (response) {
        $scope.SumOfPurchases = response.data;
        console.log($scope.SumOfPurchases);
    })
    $scope.allProduct = [];
    $http.get("https://showroomercore.mybluemix.net/api/product/getall")
        .then(function (response) {
            $scope.allProduct = response.data;
            console.log($scope.allProduct);
        })
    $scope.averageRate = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/averageRate", {
        headers: {
            "id": $scope.productId
        }
    }).then(function (response) {
        $scope.averageRate = response.data;
        console.log($scope.averageRate);
    })

    $scope.getProductById = function (input) {
        $location.path('/product/' + input);
    }

}
app.controller("StatsController", StatsFunctions);
