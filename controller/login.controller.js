app.controller('LoginController',['$scope',function($scope){
    $scope.gmail = {
        username : "",
        email : ""
    };
    $scope.onGoogleLogin = function(){
        var params ={
            'clientid' : '581080495356-si00kv6qmjpsot2atb3udmri7c083h1k.apps.googleusercontent.com',
            'cookiepolicy' : 'single_host_origin',
            'callback' : function(result){
                
            },
            'approvalprompt' : 'force',
            'scope' : 'https:://www.googleapis.com/auth/plus.login https:://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(params);
    }
}]);