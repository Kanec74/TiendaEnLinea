// Controlador de ProductoDetalle
ProductoDetalleController.$inject =['$scope', '$stateParams', '$localStorage', '$state']
	function ProductoDetalleController ($scope, $stateParams, $localStorage, $state){
		$scope.$storage = $localStorage

		console.log($stateParams)

		$scope.idproducto = $stateParams.idproducto

		$scope.producto = _newProducto()
			
		$scope.producto = $localStorage.productos.find(function(producto){
			return producto.id === $scope.idproducto

		})

		console.log($scope.producto)

		$scope.addProducto = function(){
			let producto = angular.copy($scope.producto)
			producto.id = producto.sku
			$scope.$storage.productos.push(producto)
			$scope.producto = _newProducto()
			
		}

		function _newProducto(){
			return { id: '', name: '', sku: '', price: '', description: ''}
		}

		
}

module.exports = ProductoDetalleController