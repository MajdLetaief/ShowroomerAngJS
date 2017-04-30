function ProductControllerFN($scope, $http, $routeParams) {
    $scope.products = [];
    $scope.showroomers = [];
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
    });
     $http.get("http://showroomercore.mybluemix.net/api/showroomer/getall").then(function (response) {
        $scope.showroomers = response.data;
        console.log($scope.showroomers);
    })
  
    

   
}

app.controller("ProductController", ProductControllerFN);