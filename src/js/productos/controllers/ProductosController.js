function ProductosController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		productos:[]
	})

	//$scope.user = {}
	//$scope.producto = _newProducto()

	// $scope.addProducto = function(){
	// 	let producto = angular.copy($scope.producto)
	// 	$scope.$storage.productos.push(producto)
	// 	$scope.producto = _newProducto()
	// }

	

	$scope.removeProducto = function(index){
		$scope.$storage.productos.splice(index,1)	
	}

	$scope.editarProducto = function(index){
		let producto = $scope.$storage.productos.splice(index,1)
		$scope.producto = producto[0]
	} 
}

ProductosController.$inject = ['$scope', '$localStorage']


module.exports = ProductosController