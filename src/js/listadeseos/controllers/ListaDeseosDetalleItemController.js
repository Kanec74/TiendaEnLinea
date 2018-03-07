ListaDeseosDetalleItemController.$inject =['$scope', '$stateParams', '$localStorage']

function ListaDeseosDetalleItemController ($scope, $stateParams, $localStorage){
	console.log($stateParams);
	$scope.iditemlistadeseos = $stateParams.iditemlistadeseos

	/*$scope.listadeseos = $localStorage.listasdeseos.find(function(listadeseos){
		return listadeseos.id === $scope.idlistadeseos

	})*/

		
}

module.exports = ListaDeseosDetalleItemController