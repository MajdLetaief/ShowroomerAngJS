function StatsFunctions($scope, $http,$location) {
    $scope.productsMostQuantity = [];
    $http.get("https://mylabsing.mybluemix.net/api/stats/ProductsByMostQuantity").then(function (response) {
        $scope.productsMostQuantity = response.data;
        console.log($scope.productsMostQuantity);
        $scope.productsBestOffer = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/ProductBestOffer").then(function (response) {
            $scope.productsBestOffer = response.data;
            console.log($scope.productsBestOffer);
        })
        $scope.sumOfRates = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/sumOfRates").then(function (response) {
            $scope.sumOfRates = response.data;
            console.log($scope.sumOfRates);
        })
        $scope.averageRate = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/averageRate").then(function (response) {
            $scope.averageRate = response.data;
            console.log($scope.averageRate);
        })
        $scope.sumOfRatesPerUser = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/sumOfRatesPerUser").then(function (response) {
            $scope.sumOfRatesPerUser = response.data;
            console.log($scope.sumOfRatesPerUser);
        })
        $scope.sumOfRatesPerProduct = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/sumOfRatesPerProduct").then(function (response) {
            $scope.sumOfRatesPerProduct = response.data;
            console.log($scope.sumOfRatesPerProduct);
        })
        $scope.ProductsByMinQuantity = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/ProductsByMinQuantity").then(function (response) {
            $scope.ProductsByMinQuantity = response.data;
            console.log($scope.ProductsByMinQuantity);
        })
        $scope.ProductsByMaxPrice = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/ProductsByMaxPrice").then(function (response) {
            $scope.ProductsByMaxPrice = response.data;
            console.log($scope.ProductsByMaxPrice);
        })
        $scope.ProductsByMinPrice = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/ProductsByMinPrice").then(function (response) {
            $scope.ProductsByMinPrice = response.data;
            console.log($scope.ProductsByMinPrice);
        })
        $scope.ProductsByMaxInteraction = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/ProductsByMaxInteraction").then(function (response) {
            $scope.ProductsByMaxInteraction = response.data;
            console.log($scope.ProductsByMaxInteraction);
        })
        $scope.SumOfPurchases = [];
        $http.get("http://mylabsing.mybluemix.net/api/stats/SumOfPurchases").then(function (response) {
            $scope.SumOfPurchases = response.data;
            console.log($scope.SumOfPurchases);
        })

    })
    
    $scope.getProductById=function(input){
        $location.path('/product/'+input);
    }
}
app.controller("StatsController",StatsFunctions);