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

myApp.controller('PhoneCtrl', function($scope) {

	$scope.prop = {
		// test: [{name: "click1"}, {name: "click2"}, {name: "click3"}],

		defaultMethods: [{
			id: 0,
			name:"click",
			params: [{
				id: 0,
				name : "back"
			}, {
				id: 1,
				name : "left"
			}, {
				id: 2,
				name : "right"
			}]
		},{
			id: 1,
			name:"wait"
		},{
			id: 2,
			name:"sleep"
		}],

		methods: [{
			id: 0,
			paramsId: 1
		},
		{
			id: 1,
			params: "500"
		},
		{
			id: 2,
			name: "sleep"
		}
		]
	};

	$scope.getParams = function(methodId, paramsId){
		return $scope.prop.defaultMethods[methodId].params[paramsId];
	}

	$scope.isParams = function(id){
		return ($scope.prop.defaultMethods[id].params === undefined) ? false: true;
	}

	$scope.getFunc = function(id){

		console.log($scope.prop.defaultMethods[id].params);
		console.log($scope.prop.defaultMethods[id].params === undefined);

		return $scope.prop.defaultMethods[id];
	}

	// $scope.getSelected = function(){
	// 	console.log("scope a from getSelected: " + $scope.a);
	// 	return $scope.prop.defaultMethods[2];
	// }

	// $scope.selected = $scope.getSelected();

	// $scope.selected = function(){
	// 	// console.log(id);
	// 	return $scope.prop.defaultMethods[1];
	// };

	// $scope.items = [{
	// 	id: 1,
	// 	label: 'aLabel',
	// 	subItem: { name: 'aSubItem' }
	//   }, {
	// 	id: 2,
	// 	label: 'bLabel',
	// 	subItem: { name: 'bSubItem' }
	//   }];

	// $scope.selected = $scope.items[1];

	// console.log($scope.selected);   

	$scope.changeMethod = function(){
		console.log("hello");
		document.getElementById('selectField').style.display="none";
		console.log(document.getElementById('inputField'));
	}

	$scope.check = function(descId, phoneId){

		if(descId == phoneId) return true;

		return false;
	}
 
	$scope.names = [{
		id: 1,
		name: 'Nokia Lumia 630',
		visible: 0
	},{
		id: 2,
		name: 'Samsung Galaxy S 4',
		visible: 1
	},{
		id: 3,
		name: 'Mi 5',
		visible: 0
	}]

	$scope.phones = [{
		  id: 1,
		  year: 2014,
		  price: 200,
		  company: {
			  name: 'Nokia',
			  country: 'Финляндия'
		  }
	  },{
		  id: 2,
		  year: 2014,
		  price: 400,
		  company: {
			  name: 'Samsung',
			  country: 'Республика Корея'
		  }
	  },{
		  id: 3,
		  year: 2015,
		  price: 300,
		  company: {
			  name: 'Xiaomi',
			  country: 'Китай'
		  }
	  }]
  });