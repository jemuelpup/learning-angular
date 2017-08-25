app.controller("cards",function($http,$scope){
	
	$scope.profileCard01Active = "";

	$http.get('db/members.php').then(function(res){
		$scope.data = res.data;
	});

	
  $scope.setActive = function(){
  	$scope.profileCard01Active = $scope.profileCard01Active  === "active" ?"":"active";
  };
});