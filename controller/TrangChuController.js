window.TrangChuController = function ($scope, $http, $location) {
    var apiURL = "http://localhost:3000/test";
    $scope.getData = function () {
        $http.get(apiURL).then(function (response) {
            $scope.test = response.data
        })
    }
    $scope.getData();
    $scope.clear = function () {
        $scope.inputValue = {
            name: "",
            gender: "",
            address: "",
            city: "",
        }
        $scope.editID = 0
    }
    $scope.onAdd = function () {
        newItem = {
            name: $scope.inputValue.name,
            gender: $scope.inputValue.gender,
            address: $scope.inputValue.address,
            city: $scope.inputValue.city
        }
        $http.post(apiURL, newItem).then(function (response) {
            $location.path('')
            $scope.getData()
        })
        alert("Them thanh cong")
        $scope.clear();    
    }
    $scope.onDelete = function (deleteID) {
        var mess = window.confirm("Are you sure you want to delete")
        if (mess) {
            $http.delete(`${apiURL}/${deleteID}`).then(function (response) {
                if (response.status == 200) {
                    $location.path('')
                    $scope.getData()
                }
            })
        }
    }
    $scope.onEdit = function (editID) {
        $scope.editID = editID;
        $scope.inputValue = {
            name: "",
            city: "",
            address: "",
            gender: "",
        }
        $http.get(`${apiURL}/${editID}`).then(function (response) {
            if (response.status == 200) {
                $scope.inputValue = {
                    name: response.data.name,
                    gender: response.data.gender,
                    address: response.data.address,
                    city: response.data.city
                }
            }
        })
    }
    $scope.onUpdate = function(){
        var editID = $scope.editID;
        var updateNew = {
            name: $scope.inputValue.name,
            gender: $scope.inputValue.gender,
            address: $scope.inputValue.address,
            city: $scope.inputValue.city
        }
        $http.put( `${apiURL}/${editID}`, updateNew).then(function(response){
              if(response.status === 200){
                $location.path('')
                $scope.getData();
              }
        })
        $scope.clear();   
    }
}