CarritoDeCompraController.$inject = ['$scope', '$localStorage']

function CarritoDeCompraController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		carrito:[]
	})

	//$scope.user = {}
	$scope.itemcarrito = _newItemCarrito()

	$scope.addItemCarrito = function(){
		let itemcarrito = angular.copy($scope.itemcarrito)
		$scope.$storage.carrito.push(itemcarrito)
		$scope.itemcarrito = _newItemCarrito()
	}

	function _newItemCarrito(){
		return { nombre: '', id: ''}
	}

	$scope.removeItemCarrito = function(index){
		$scope.$storage.carrito.splice(index,1)	
	}

	$scope.editarItemCarrito = function(index){
		let itemcarrito = $scope.$storage.carrito.splice(index,1)
		$scope.itemcarrito = itemcarrito[0]
	} 
}

module.exports = CarritoDeCompraController