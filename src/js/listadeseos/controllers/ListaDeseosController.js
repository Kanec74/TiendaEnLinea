ListaDeseosController.$inject = ['$scope', '$stateParams', '$localStorage', 'listaDeseosService']

function ListaDeseosController($scope, $stateParams,$localStorage, listaDeseosService){

	$scope.$storage = $localStorage.$default({
		listasdeseos:[]
	})

	$scope.listadeseos = _newListaDeseos()

	if ($scope.isAuthenticated()) {
		_obtenerListasDeseos()
	}
	//addProducto()

	function _obtenerListasDeseos() {
		listaDeseosService.get().then(function (response) {
				$scope.$storage.listasdeseos = response.data
        })


		/*$http.get(WEB_SERVICE+'/products')
		.then(function(response) {
			let producto = response.data
			$scope.$storage.productos = producto
		})*/
	}

	$scope.addListaDeseos = function(name){
		
		if (!$scope.isAuthenticated()) {
      		return alert('Inicia sesión para crear listas de deseos')
    	}
        listaDeseosService.add(name).then(function (response) {
        	if (response.status = 201) {
          		alert(`${name} fue creado como una nuneva lista`)
        	}
        })
		
				
	}

	$scope.addListaDeseosBak = function(){
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