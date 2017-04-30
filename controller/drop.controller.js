function dropControllerFN($scope,dropstoreClient) {
    $scope.tasks = [];
    dropstoreClient.create({
            key: 'gj3969ha2lxpdoo'
        })
        .authenticate({
            interactive: true
        })
        .then(function (datastoreManager) {
            console.log('completed authentication');
            return datastoreManager.openDefaultDatastore();
        });
}
app.controller("dropController", ['dropstoreClient', dropControllerFN]);
