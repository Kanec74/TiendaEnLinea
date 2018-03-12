ListaDeseosController.$inject = ['$scope', '$stateParams', '$localStorage']

function ListaDeseosController($scope, $stateParams,$localStorage){

	$scope.$storage = $localStorage.$default({
		listasdeseos:[]
	})

	$scope.listadeseos = _newListaDeseos()

	$scope.addListaDeseos = function(){
		let listadeseo = angular.copy($scope.listadeseo)
		$scope.$storage.listasdeseos.push(listadeseo)
		$scope.listadeseo = _newListaDeseos()
	}

	function _newListaDeseos(){
		return { nombre: ''}
		//return { nombre: '', id: ''}
	}

	$scope.removeListaDeseos = function(index){
		$scope.$storage.listasdeseos.splice(index,1)	
	}


	$scope.editarListaDeseos = function(index){
		let listadeseos = $scope.$storage.listasdeseos.splice(index,1)
		$scope.listadeseos = listadeseos[0]
	} 
	
}




module.exports = ListaDeseosController