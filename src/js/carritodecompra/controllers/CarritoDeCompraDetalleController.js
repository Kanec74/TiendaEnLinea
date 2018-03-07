CarritoDeCompraDetalleController.$inject =['$scope', '$stateParams', '$localStorage']

function CarritoDeCompraDetalleController ($scope, $stateParams, $localStorage){
		console.log($stateParams);
		$scope.iditemcarrito = $stateParams.iditemcarrito
		
		/*$scope.itemcarrito = $localStorage.carrito.find(function(iditemcarrito){
			return iditemcarrito.id === $scope.iditemcarrito

		})*/

		
}

module.exports = CarritoDeCompraDetalleController