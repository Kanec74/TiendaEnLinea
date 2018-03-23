ProductosController.$inject = ['$scope','$http', 'WEB_SERVICE', '$localStorage', '$state', '$q', 'carritoDeCompraService', 'listaDeseosService', 'productoService']
function ProductosController($scope, $http, WEB_SERVICE, $localStorage, $state, $q, carritoDeCompraService, listaDeseosService, productoService){

	$scope.$storage = $localStorage.$default({
		productos:[],
		listaDeseos:[]
	})

	_obtenerProductos()

	//addProducto()

	function _obtenerProductos() {
		productoService.get().then(function (response) {
				$scope.$storage.productos = response.data
        })

        listaDeseosService.get().then(function (response) {
				$scope.$storage.listaDeseos = response.data
        })
		/*$http.get(WEB_SERVICE+'/products')
		.then(function(response) {
			let producto = response.data
			$scope.$storage.productos = producto
		})*/
	}
	
	$scope.removeProducto = function(index){
		if ($scope.$storage.user.role == 'admin'){
//		$scope.$storage.productos.splice(index,1)	
		$http.delete(WEB_SERVICE + '/products/'+ index,{
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
	    })
		}else{
			alert ("El producto solo puede ser eliminado por el Administrador")
		}

	}

	$scope.editarProducto = function(index){
		let producto = $scope.$storage.productos.splice(index,1)
		$scope.producto = producto[0]
	} 

	$scope.addItemCarrito = function(product){
		
		if (!$scope.isAuthenticated()) {
      		return alert('Inicia sesión para añadir productos al carrito')
    	}
        carritoDeCompraService.add(product).then(function (response) {
        	if (response.status = 201) {
          		alert(`${product.name} fue añadido al carrito`)
        	}
        })
				
	}

	function newItemCarrito(producto){
		console.log(producto)

		return { productoId: producto.id, name: producto.name, price: producto.price, lot:'1', total: producto.price}
	}

	$scope.addItemListaDeseos = function(product,listaDeseo){
		if (!$scope.isAuthenticated()) {
      		return alert('Inicia sesión para añadir productos al carrito')
    	}
        listaDeseosService.addProductALista(product,listaDeseo).then(function (response) {

        	if (response.status = 201) {
          		alert(`${product.name} fue añadido a la lista: ${listaDeseo.name}`)
        	}
        })
    }
}




module.exports = ProductosController