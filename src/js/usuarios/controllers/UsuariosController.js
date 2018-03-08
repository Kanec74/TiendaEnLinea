function UsuariosController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		usuarios:[]
	})

	//$scope.user = {}
	$scope.user = _newUser()

	/*$scope.$storage.usuarios = [
		{
			nombre: "Kanec",
			email: "kanec@uady.mx",
			username: "khc"
		},
		{
			nombre: "Luis",
			email: "luis@uady.mx",
			username: "lu"
		},
		{
			nombre: "Pepe",
			email: "pepe@uady.mx",
			username: "pe"
		},
		{
			nombre: "Felipe",
			email: "felipe@uady.mx",
			username: "fe"
		}
	]*/

	$scope.addUsuario = function(){
		let usuario = angular.copy($scope.user)
		$scope.$storage.usuarios.push(usuario)
		$scope.user = _newUser()
	}

	function _newUser(){
		return { nombre: '', email: ''}
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