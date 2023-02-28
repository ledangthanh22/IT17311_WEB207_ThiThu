angular.module("myApp",["ngRoute"]).config(function($routeProvider){
$routeProvider.when("/",{
    templateUrl: 'views/TrangChu.html',
    controller: TrangChuController
}).when("/page",{
    templateUrl: 'views/Page.html',
    controller: PageController
})
})