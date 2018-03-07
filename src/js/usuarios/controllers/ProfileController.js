ProfileController.$inject =['$scope', '$stateParams', '$localStorage']
	function ProfileController ($scope, $stateParams, $localStorage){
		console.log($stateParams);
		$scope.username = $stateParams.username

		$scope.usuario = $localStorage.usuarios.find(function(user){
			return user.username === $scope.username

		})

		/*if (usuarios && usuarios.lenght > 0) {

			$scope.usuarios = usuarios[0]
		}else {	$scope.usuarios = {} }*/
}

module.exports = ProfileController