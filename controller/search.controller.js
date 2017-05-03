function SearchControllerFN($scope, $http, $routeParams) {
    $scope.products = [];
    $http.get("https://showroomercore.mybluemix.net/api/product/getall").then(function (response) {
        $scope.products = response.data;
    var category = $routeParams.category;
        $scope.category = category;

    });
     
}

app.controller("SearchController", SearchControllerFN);