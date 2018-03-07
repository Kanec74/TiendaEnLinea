// Controlador de ProductoDetalle
ProductoDetalleController.$inject =['$scope', '$stateParams', '$localStorage']
	function ProductoDetalleController ($scope, $stateParams, $localStorage){
		console.log($stateParams)

		$scope.idproducto = $stateParams.idproducto

		//$scope.producto = _newProducto()
			
		/*$scope.producto = $localStorage.productos.find(function(producto){
			return producto.id === $scope.idproducto

		})*/

		$scope.addProducto = function(){
			let producto = angular.copy($scope.producto)
			$scope.$storage.productos.push(producto)
			$scope.producto = _newProducto()
		}

		function _newProducto(){
			return { id: '', name: '', sku: '', price: '', description: ''}
		}

		
}

module.exports = ProductoDetalleController