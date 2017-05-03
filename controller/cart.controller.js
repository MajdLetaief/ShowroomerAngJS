function CartControllerFN($scope, $http, $routeParams, $location) {
$scope.checkout2=false;
    $scope.getTotal = function () {
        $scope.total = 0;
        for (var i = 0; i < $scope.orders.length; i++) {
            var product = $scope.orders[i].product;
            $scope.total += (product.price * $scope.orders[i].quantity);
        }
        return $scope.total;
    }
    var x = "0";
    $http.get("https://showroomercore.mybluemix.net/api/order/getorder", {
            headers: {
                "id": 1
            }
        })
        .then(function (response) {
            $scope.orders = response.data;
            x = $scope.orders[0].purchaseId;
            $http.get("https://showroomercore.mybluemix.net/api/buyer/getuser", {
                headers: {
                    "id": $scope.orders[0].userId
                }
            }).then(function (rep) {
                $scope.user = rep.data
            })
        })

    $scope.deleteorder = function (input, $index) {
        $http.delete("https://showroomercore.mybluemix.net/api/order", {
                headers: {
                    "id": input
                }
            })
            .then(function (response) {
                $scope.orders.splice($index, 1);
            })
    }
    $scope.clearall = function () {

        $http.delete("https://showroomercore.mybluemix.net/api/order/clearall", {
            headers: {
                "id": 1
            }
        }).then(function (response) {
            $location.path('/empty');
        })
    }
    $scope.checkout = function () {
        if (confirm("Become showroomer?")) {
            alert("deleted" );
        } else {
           
                $location.path('/checkout');
        }

    }
    $scope.finalCheckout=function(){
        console.log(x);
            var data ={};
            $http.put("https://showroomercore.mybluemix.net/api/order/checkout",data, {
                headers: {
                    "id": x
                }
            }).success(function (response) {
                $scope.checkout2=true;
            })
    }

}
app.controller("CartController", CartControllerFN);
