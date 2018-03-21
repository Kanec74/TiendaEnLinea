ProductoDetalleController.$inject =['$scope','$http', 'WEB_SERVICE', '$stateParams', '$localStorage', '$state', '$q']
	function ProductoDetalleController ($scope, $http, WEB_SERVICE, $stateParams, $localStorage, $state, $q){
		console.log($stateParams)

		$scope.$storage = $localStorage
		$scope.idproducto = $stateParams.idproducto
		$scope.producto = _newProducto()

		_obtenerProductoDetalle()

		function _obtenerProductoDetalle() {
			//console.log($scope.idproducto + " Este es el estate params id")
			return $http.get(WEB_SERVICE+'/products/'+ $scope.idproducto)
			.then(function (response){
				console.log(response + " Este es el response")
				let data = response.data

				$scope.producto = data

			})
		}

		$scope.removeProducto = function(){
console.log("Eliminar producto: "+$scope.idproducto)
	/*	$http.delete(WEB_SERVICE + '/products/'+ $scope.id,{
			product: $scope.producto
		})
		.then(function (response) {
	      let data = response.data
	        alert("Registro eliminado")
	        _obtenerProductos()
	    })
	    .catch(function (e, response) {
	      console.error(e)
	      if (e.status == 404) {
	        alert("No se pudo eliminar el producto!")
	      }
	    })*/
	}

	$scope.editarProducto = function(index){
		let producto = $scope.$storage.productos.splice(index,1)
		$scope.producto = producto[0]
	} 

		function _newProducto(){
			return { id: '', name: '', sku: '', price: '', description: '', updated_at:'', created_at:''}
		}


		$scope.addUpdateProducto = function(){
			if($scope.producto.id==null || $scope.producto.id==0){
				addProducto()
			}else{
				updateProducto()
			}
	}





	function addProducto(){
		if ($localStorage.user.role=='admin') {
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
		}else{
			alert("Este perfil no puede realizar la operación")
		}

	}

	function updateProducto(){
		if ($localStorage.user.role=='admin') {
			console.log($scope.idproducto )
			$http.put(WEB_SERVICE + '/products/'+ $scope.idproducto,{
				product: $scope.producto
			})
			.then(function (response) {
		      console.log(response)
		      let data = response.data
		      console.log(data)
		        alert("Registro actualizado")
		        $state.go('app.productos.index')
		    })
		    .catch(function (e, response) {
		      console.error(e)
		      if (e.status == 404) {
		        alert("No se pudo realizar la actualización!")
		      }
		    })
		}else{
			alert("Este perfil no puede realizar la operación")
		}
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