function SearchControllerFN($scope, $http) {
    $scope.products = [];
    $http.get("https://showroomercore.mybluemix.net/api/product/getall").then(function (response) {
        $scope.products = response.data;




        $scope.slider = {
            minValue: 0,
            maxValue: 5000,
            options: {
                floor: 0,
                ceil: 5000,
                translate: function(value, sliderId, label) {
                    switch (label) {
                        case 'model':
                            return '<b>Min price:</b> $' + value;
                        case 'high':
                            return '<b>Max price:</b> $' + value;
                        default:
                            return '$' + value
                    }
                }
            }
        };

    });
}

app.controller("SearchController", SearchControllerFN);