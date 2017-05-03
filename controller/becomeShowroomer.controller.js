function BecomeShowroomerControllerFN($scope, $http, $routeParams,$location) {
    $scope.buyer = [];

    var lat =angular.element( document.getElementById('lat') );
    var long =angular.element( document.getElementById('long') );

    $scope.$watch(function () {
        $scope.lat =lat[0].innerHTML;
        $scope.long= long[0].innerHTML;
    })

    var buyerId = $routeParams.buyerId
    $http.get("https://showroomercore.mybluemix.net/api/buyer", {
            headers: {
                "id": buyerId
            }
        })
        .then(function (response) {

            $scope.buyer = response.data;
            console.log($scope.buyer);
        })
    $scope.becomeShow = function () {
        console.log("Showrommer !!!");
        var data = {
            username: $scope.buyer.username,
            city:  $scope.buyer.city,
            street: $scope.buyer.street,
            zipCode: $scope.buyer.zipCode,
            latitude: $scope.lat,
            longitude: $scope.long

        };
        console.log(data);
        $http.post('https://showroomercore.mybluemix.net/api/showroomer/', data).success(function (data, status) {
            console.log(status);
        });
        $http.delete("https://showroomercore.mybluemix.net/api/buyer", {
            headers: {
                "id": buyerId
            }
        })
        $location.path('/checkout');
    }
}


app.controller("BecomeShowroomerController", BecomeShowroomerControllerFN);