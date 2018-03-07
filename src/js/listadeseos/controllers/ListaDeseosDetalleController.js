ListaDeseosDetalleController.$inject =['$scope', '$stateParams', '$localStorage']

function ListaDeseosDetalleController ($scope, $stateParams, $localStorage){
	console.log($stateParams);
	$scope.idlistadeseos = $stateParams.idlistadeseos

	/*$scope.listadeseos = $localStorage.listasdeseos.find(function(listadeseos){
		return listadeseos.id === $scope.idlistadeseos

	})*/

		
}

module.exports = ListaDeseosDetalleController