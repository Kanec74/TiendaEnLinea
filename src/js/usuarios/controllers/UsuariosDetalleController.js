UsuariosDetalleController.$inject =['$scope', '$stateParams', '$localStorage']
	function UsuariosDetalleController ($scope, $stateParams, $localStorage){
		$scope.$storage = $localStorage

		console.log($stateParams)

		$scope.idusuario = $stateParams.idusuario

		$scope.user = _newUser()
		
		//$scope.usuario = $localStorage.usuarios.find(function(user){
			$scope.user = $localStorage.usuarios.find(function(user){
			return user.id_usuario === $scope.idusuario

		})

		console.log($scope.usuario);
		//console.log($scope.user);

		// Nuevos usuarios --------------------------------------------------------------------

			$scope.addUsuario = function(){
				let usuario = angular.copy($scope.user)

				$scope.$storage.usuarios.push(usuario)
				$scope.user = _newUser()
			}

			function _newUser(){
				return { id_usuario:'', nombre: '', email: '', username: '', password: '', rol: ''}
			}

		// fin de nuevos usuarios---------------------------------------------------------------
}

module.exports = UsuariosDetalleController