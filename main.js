angular.module("QuizApp",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	.when("/",{
		
	})
	.when("/create",{
		templateUrl:"create.html"
	});
});