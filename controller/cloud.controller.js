function CloudControllerFN($scope, $http,$location) {
    $scope.products = [];
    $http.get("https://showroomercore.mybluemix.net/api/product/getall").then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
    })
   
}

app.controller("CloudController", CloudControllerFN);