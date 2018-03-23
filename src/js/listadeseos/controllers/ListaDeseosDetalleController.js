ListaDeseosDetalleController.$inject =['$scope','$http', 'WEB_SERVICE', '$stateParams', '$localStorage', '$state', '$q', 'listaDeseosService']

function ListaDeseosDetalleController ($scope, $http, WEB_SERVICE, $stateParams, $localStorage, $state, $q, listaDeseosService){
	console.log($stateParams)
	$scope.$storage = $localStorage
	
	$scope.idlistadeseos = $stateParams.idlista

	/*$scope.listadeseos = $localStorage.listasdeseos.find(function(listadeseos){
		return listadeseos.id === $scope.idlistadeseos

	})*/

		
}

module.exports = ListaDeseosDetalleController