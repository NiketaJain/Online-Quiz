
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$rootScope)
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
    $scope.edit=function(x)
    {
    	$rootScope.x=x;
    	alert(x);
    }
		
	});