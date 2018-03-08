ProfileController.$inject =['$scope', '$stateParams', '$localStorage']
	function ProfileController ($scope, $stateParams, $localStorage){
		console.log($stateParams);
		$scope.username = $stateParams.username
		console.log($stateParams.username);

		$scope.usuario = $localStorage.usuarios.find(function(user){
			return user.username === $scope.username

		})

		console.log($scope.usuario);

		/*if (usuarios && usuarios.lenght > 0) {

			$scope.usuarios = usuarios[0]
		}else {	$scope.usuarios = {} }*/
}

module.exports = ProfileController