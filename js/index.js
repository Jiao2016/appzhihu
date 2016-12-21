var app=angular.module("app",['ngRoute','ctrl'])
app.config(['$routeProvider',function($r){
    $r.when('/',{
        templateUrl:"tpls/list.html",
        controller:"home",
    }).when('/show/:id',{
        templateUrl:"tpls/show.html",
        controller:"show",
    }).when('/item/:id',{
        templateUrl:"tpls/item.html",
        controller:"showlist",
    })
}])



