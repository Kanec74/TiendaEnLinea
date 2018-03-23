ListaDeseosDetalleController.$inject =['$scope','$http', 'WEB_SERVICE', '$stateParams', '$localStorage', '$state', '$q', 'listaDeseosService']

function ListaDeseosDetalleController ($scope, $http, WEB_SERVICE, $stateParams, $localStorage, $state, $q, listaDeseosService){
	$scope.$storage = $localStorage
	
	
	$scope.idlistadeseos = $stateParams.idlistadeseos
	$scope.$storage = $localStorage.$default({
		listaproducts:[]
	})

	$scope.listaDeseos=_newListDeseos()

	verListaDeseosProducts()

	function verListaDeseosProducts(){	
		listaDeseosService.getInfoList($scope.idlistadeseos).then(function (response) {
			let listaDeseo = response.data
			$scope.listaDeseos = listaDeseo
        })
        listaDeseosService.getListProducts($scope.idlistadeseos).then(function (response) {
			let data = response.data
			$scope.$storage.listaproducts = data
        })
	}

	function _newListDeseos(){
		return {id:'',name:''}
	}
	
}

module.exports = ListaDeseosDetalleController