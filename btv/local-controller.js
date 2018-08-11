myApp.controller('DemoCtrl', function($scope)
{	
	$scope.getAction = function(){
		$scope.email = "Dima";
		changeName();
	}
	
	$scope.getAction2 = function(){
		$scope.email = "Vasya";
		changeName();
	}
	
function changeName() {
	alert($scope.email);
}

});