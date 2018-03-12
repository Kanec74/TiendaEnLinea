function UsuariosController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		usuarios:[]
	})
// Eliminar usuarios ------------------------------------------------------------------

	$scope.removeUsuario = function(index){

		$scope.$storage.usuarios.splice(index,1)
	}

// Fin de eliminar usuarios -----------------------------------------------------------


// Editar usarios --------------------------------------------------------------------

	$scope.editarUsuario = function(index){
		let user = $scope.$storage.usuarios.splice(index,1)
		$scope.user = user[0]
	}
}

// Fin de editar usuarios -------------------------------------------------------------

UsuariosController.$inject = ['$scope', '$localStorage']
module.exports = UsuariosController