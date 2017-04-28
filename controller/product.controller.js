function ProductControllerFN($scope, $http, $routeParams) {
    $scope.products = [];
    var productId = $routeParams.productId
    $http
        .get("http://showroomercore.mybluemix.net/api/product",{
        headers:{
            "id" : productId
        }
    })       
        .then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
    })
    
}

app.controller("ProductController", ProductControllerFN);