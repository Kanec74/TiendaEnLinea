function ListaDeseosController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		listasdeseos:[]
	})

	$scope.listadeseos = _newListaDeseos()

	$scope.addListaDeseos = function(){
		let listadeseo = angular.copy($scope.listadeseo)
		$scope.$storage.listasdeseos.push(listadeseo)
		$scope.listadeseos = _newListaDeseos()
	}

	function _newListaDeseos(){
		return { nombre: '', id: ''}
	}

	$scope.removeListaDeseos = function(index){
		$scope.$storage.listasDeseos.splice(index,1)	
	}

	$scope.editarListaDeseos = function(index){
		let listadeseos = $scope.$storage.listasdeseos.splice(index,1)
		$scope.listadeseos = listadeseos[0]
	} 
}

ListaDeseosController.$inject = ['$scope', '$localStorage']


module.exports = ListaDeseosController