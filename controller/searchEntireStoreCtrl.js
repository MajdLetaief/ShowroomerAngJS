

    app.controller('DemoCtrl', ['$scope','$http',"$location","$timeout", "$q", "$log", function($scope,$http,$location) {
        var self = this;
        self.simulateQuery = false;
        self.isDisabled    = false;

        // list of `state` value/display objects
        self.states        = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        self.newState = newState;

        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.

        function querySearch (query) {
            console.log(query);
            var results = self.states.$$state.value.filter( function(){
                    var arr = [];
                    angular.forEach(self.states.$$state.value, function(v){
                        if(v.name.toLowerCase() === query.toLowerCase()){
                            console.log("add to tabel");
                            arr.push(v);
                        }
                    });

                    console.log(arr);
                    return arr;

            });
            console.log(results);
            return results;
        } */
        function querySearch (query) {
            var results = query ? self.states.$$state.value.filter( createFilterFor(query) ) : self.states.$$state.value,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
           //todo
        }

        function selectedItemChange(item) {
            console.log( JSON.stringify(item.productId));
            $location.path("/product/"+item.productId);

        }

        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
           return $http.get("http://showroomercore.mybluemix.net/api/product/getall").then(function (response) {
               var productsName;
               $scope.products = response.data;
               return $scope.products;

           });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (angular.lowercase(state.name).indexOf(lowercaseQuery) === 0);
            };

        }


    }]);