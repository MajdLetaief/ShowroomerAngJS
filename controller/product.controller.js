function ProductControllerFN($scope, $http, $routeParams, $location) {
    $scope.products = [];
    $scope.showroomers = [];
    var productId = $routeParams.productId
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
        console.log("im in");
        var data = {
            userId: 1,
            productId: $scope.products.productId,
            quantity: $scope.productQuantity,
            orderId: 25

        };
        console.log(data);
        $http.post('https://showroomercore.mybluemix.net/api/order/', data).success(function (data, status) {
            console.log(status);
        });
        $location.path('/cart');
    }

    $http.get("https://showroomercore.mybluemix.net/api/showroomer/getall").then(function (response) {
        $scope.showroomers = response.data;
        console.log($scope.showroomers);
    })
    
   





}

app.controller("ProductController", ProductControllerFN);
