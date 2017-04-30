function CartControllerFN($scope, $http, $routeParams, $location) {
    $scope.getTotal = function () {
        $scope.total = 0;
        for (var i = 0; i < $scope.orders.length; i++) {
            var product = $scope.orders[i].product;
            $scope.total += (product.price * $scope.orders[i].quantity);
        }
        return $scope.total;
    }
var x= "0";
    $http.get("https://showroomercore.mybluemix.net/api/order/getorder", {
            headers: {
                "id": 1
            }
        })
        .then(function (response) {
            $scope.orders = response.data;
        x=$scope.orders[0].purchaseId;
            $http.get("https://showroomercore.mybluemix.net/api/buyer/getuser", {
                headers: {
                    "id": $scope.orders[0].userId
                }
            }).then(function (rep) {
                $scope.user = rep.data
            })
        })

    $scope.deleteorder = function (input) {
        $http.delete("https://showroomercore.mybluemix.net/api/order", {
                headers: {
                    "id": input
                }
            })
            .then(function (response) {
                $scope.orders = response.data;
                console.log($scope.orders);
            })
    }
    $scope.clearall = function () {

        $http.delete("http://showroomercore.mybluemix.net/api/order/clearall", {
            headers: {
                "id": 1
            }
        }).then(function (response) {
            $location.path('/empty');
        })
    }
    $scope.checkout = function () {
        console.log(x);
        $http.put("http://showroomercore.mybluemix.net/api/order/checkout", {
            headers: {
                "id": x
            }
        }).success(function (response) {
            $location.path('/checkout');
        })
    }
    
}
app.controller("CartController", CartControllerFN);
