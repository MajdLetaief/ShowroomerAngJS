function SearchControllerFN($scope, $http) {
    $scope.products = [];
    $http.get("http://showroomercore.mybluemix.net/api/product/getall").then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
    })
    $scope.slider = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1
    }
};
}

app.controller("SearchController", SearchControllerFN);