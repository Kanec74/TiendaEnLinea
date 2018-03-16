ProductoDetalleController.$inject =['$scope','$http', 'WEB_SERVICE', '$stateParams', '$localStorage', '$state', '$q']
	function ProductoDetalleController ($scope, $http, WEB_SERVICE, $stateParams, $localStorage, $state, $q){
		console.log($stateParams)

		$scope.$storage = $localStorage
		$scope.idproducto = $stateParams.idproducto
		$scope.producto = _newProducto()

		_obtenerProductoDetalle()

		function _obtenerProductoDetalle() {
			console.log($scope.idproducto + " Este es el estate params id")
			return $http.get(WEB_SERVICE+'/products/'+ $scope.idproducto)
			.then(function (response){
				console.log(response + " Este es el response")
				let data = response.data

				$scope.producto = data

			})
		}

		function _newProducto(){
			return { id: '', name: '', sku: '', price: '', description: '', updated_at:'', created_at:''}
		}



	$scope.addProducto = function(){
		$http.post(WEB_SERVICE + '/products',{
		      product: $scope.producto
		})
		.then(function (response) {
	      console.log(response)
	      let data = response.data
	      if (data.id) {
	        alert("Registro agregado");
	        $state.go('app.productos.index')
	      }
	    })
	    .catch(function (e, response) {
	      console.error(e)
	      if (e.status == 404) {
	        alert("No se pudo realizar el registro!")
	      }
	    })

	}

	$scope.updateProducto = function(){
	}
/*	function _newProducto(){
			return { 
			    "sku": "75xxx115-x",
			    "name": "Computadora nshdg",
			    "description": "laptop",
			    "price": "9000.00"
			}
	}*/

		
}

module.exports = ProductoDetalleController