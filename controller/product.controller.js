function ProductControllerFN($scope, $http, $routeParams, $location) {
    $scope.products = [];
    $scope.showroomers = [];
    var productId = $routeParams.productId;

    $http.get("https://showroomercore.mybluemix.net/api/product", {
            headers: {
                "id": productId
            }
        })
        .then(function (response) {

            $scope.products = response.data;
            console.log($scope.products);
        })

    $scope.addToCart = function () {
        if ($scope.productQuantity<$scope.products.quantity) {
            console.log("im in");
            var data = {
                userId: 1,
                productId: $scope.products.productId,
                quantity: $scope.productQuantity
            };
            console.log(data);
            $http.post('https://showroomercore.mybluemix.net/api/order/', data).success(function (data, status) {
                console.log(status);
            });
            $location.path('/cart');
        }else{
            alert("Quantity is more than the avaible in store,please select other quantity");
        }

    }

    $http.get("https://showroomercore.mybluemix.net/api/showroomer/getall").then(function (response) {
        $scope.showroomers = response.data;
        console.log($scope.showroomers);
    })

}

app.controller("ProductController", ProductControllerFN);
