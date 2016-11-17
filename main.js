
var app=angular.module('myApp',['ngRoute']);
app.controller('myCtrl',function($scope)
	{
		$scope.products=[];
		$scope.addItem=function(){
			$scope.errortext="";
			 if (!$scope.addMe) {return;}        
        	if ($scope.products.indexOf($scope.addMe) == -1) {
            	$scope.products.push($scope.addMe);
       		 } else {
            	$scope.errortext = "Answer is already in list";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
    
		
	})
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        
    })
    .when("/create",{
        templateUrl:"createquiz.html"
    });
});


