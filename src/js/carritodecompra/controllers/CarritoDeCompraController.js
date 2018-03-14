CarritoDeCompraController.$inject = ['$scope', '$localStorage']

function CarritoDeCompraController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		carrito:[]
	})

	$scope.itemcarrito = {}
	$scope.itemcarrito = _newItemCarrito()

	$scope.addItemCarrito = function(){
		let itemcarrito = angular.copy($scope.itemcarrito)
		$scope.$storage.carrito.push(itemcarrito)
		$scope.itemcarrito = _newItemCarrito()
	}

	function _newItemCarrito(){
		return { productoId:'123', name: 'Producto', price: '100.00', lot:'2.00', total:'200'}
	}

	$scope.removeItemCarrito = function(index){
		$scope.$storage.carrito.splice(index,1)	
		$scope.totalCompra = _getTotal()
	}

	$scope.editarItemCarrito = function(index){
		let itemcarrito = $scope.$storage.carrito.splice(index,1)
		$scope.itemcarrito = itemcarrito[0]
	} 

	$scope.comprar = function(){
		$scope.$storage.carrito = []
		$scope.totalCompra = 0
	} 

	function _getTotal(){
		var totalCompra=0;
		for (var i = 0; i < $scope.$storage.carrito.length; i++) {
	        totalCompra = parseFloat(totalCompra) + parseFloat($scope.$storage.carrito[i].total);
	    }
		return totalCompra
	}

    $scope.totalCompra = _getTotal()
}

module.exports = CarritoDeCompraController