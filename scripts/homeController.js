angular.module("home.Ctrl",['ionic'])

.controller("homeCtrl",function($scope){
	var employee = [
		{
			id : 201,
			url : "../images/home_main1_1.jpg"
		},
		{
			id : 002,
			url : '../images/home_main1_2.jpg'
		},
		{
			id : 003,
			url : '../images/home_main1_3.jpg'
		}
	];
	$scope.employee = employee;
	$scope.myActiveSlide = 1;
})