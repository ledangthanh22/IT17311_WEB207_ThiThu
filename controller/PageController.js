window.PageController = function ($scope, $http,$location) {
    var apiURL = "http://localhost:3000/test";
    $scope.getData = function () {
        $http.get(apiURL).then(function (response) {
            $scope.test = response.data;
        });
    }
    $scope.getData();
}