function CloudControllerFN($scope, $http) {
    $scope.products = [];
    $http.get("http://showroomercore.mybluemix.net/api/product").then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
    })
    
}

app.controller("CloudController", CloudControllerFN);