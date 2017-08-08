app.controller("appController",function($scope){

	$scope.name = "jemuel";
	$scope.employeeList = [
	{name:'Jemuel',age:23},
	{name:'Karen',age:22},
	{name:'Nathan',age:40},
	{name:'Liah',age:26}];

	$scope.showSomething = function(){
		console.log("123123")
		// $scope.employeeList.name = "hahahah";
		// console.log(angular.element(e.currentTarget).text());
	};

});

app.controller("jsonDataController",function($scope,$http,$timeout,$interval,stringLib){
	$scope.header = "Jemuel";
	$scope.count = 0;

	$scope.name2 = "Karen Joy talla";

	$scope.header = stringLib.count($scope.header);

	$http.get('data.json').then(function(response){
		r = response.data;
		$scope.name = r.name;
		$scope.age = r.age;
		$scope.city = r.city;
	});


	var c = 0;
	$timeout(function(){
		$scope.header = stringLib.count("Elimanco");
		
	},1500);

	$interval(function(){
		$scope.count++;
	},1000)

});

app.controller("companyEmployee",function($scope,$http){
	$http.get("employeeList.json").then(function(response){
		$scope.employees = response.data.employees;
	});
});

app.controller("databaseRecordsSample",function($scope,$http){
	$http.get("employees.php").then(function(response){
		console.log(response.data.data);
		$scope.data = response.data.data;
	});
});



/*
Important notes:

$http shortcut calls methods:
.delete()
.get()
.head()
.jsonp()
.patch()
.post()
.put()
loncut calls:
$http({
    method : "GET",
    url : "welcome.htm"
}).then(function

*/