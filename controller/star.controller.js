app.controller('StarCtrl', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
    var productId = $routeParams.productId
    $scope.rating = 0;
    $scope.ratings = [ {
        current: 3,
        max: 5
    }];
    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }
    $scope.sendRate = function(){
        alert("Thanks for your rates!\n\nFirst Rate: " + $scope.ratings[0].current+"/"+$scope.ratings[0].max
            +"\n"+"Second rate: "+ $scope.ratings[1].current+"/"+$scope.ratings[0].max)
    }
    $scope.addRate = function () {
        console.log("rated");
        var data = {
            userId: 1,
            productId: $scope.products.productId,
            mark: $scope.ratings[0].current
        };
        console.log(data);
        $http.post('http://showroomercore.mybluemix.net/api/rate', data).success(function (data, status) {
            console.log(status,$scope.av);
        });
        $scope.averageRatePerProduct = [];
        $http.get("https://mylabsing.mybluemix.net/api/stats/averageRatePerProduct", {
            headers: {
                "id": productId
            }

        }).then(function (response) {
            $scope.averageRatePerProduct = response.data;
            $scope.av = parseInt( $scope.averageRatePerProduct.avg_rate_product)
            console.log($scope.averageRatePerProduct,$scope.av);

        })
    }
}]);
app.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
    scope: {

            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});
app.directive('loading', function () {
    return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
    }
})
