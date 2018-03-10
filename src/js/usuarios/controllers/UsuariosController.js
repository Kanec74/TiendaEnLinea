function UsuariosController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		usuarios:[]
	})

	//$scope.user = {}
	$scope.user = _newUser()

	$scope.addUsuario = function(){
		let usuario1 = angular.copy($scope.user)
		$scope.$storage.usuarios.push(usuario1)
		$scope.user = _newUser()

	}

	function _newUser(){
		return { nombre: '', email: '', username: '', password: ''}
	}

	$scope.removeUsuario = function(index){

		$scope.$storage.usuarios.splice(index,1)
	}

	$scope.editarUsuario = function(index){
		let user = $scope.$storage.usuarios.splice(index,1)
		$scope.user = user[0]
	}
}

UsuariosController.$inject = ['$scope', '$localStorage']

module.exports = UsuariosController
