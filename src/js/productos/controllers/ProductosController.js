function ProductosController($scope, $localStorage){

	$scope.$storage = $localStorage.$default({
		productos:[]
	})

	
	$scope.removeProducto = function(index){
		$scope.$storage.productos.splice(index,1)	
	}

	$scope.editarProducto = function(index){
		let producto = $scope.$storage.productos.splice(index,1)
		$scope.producto = producto[0]
	} 

	$scope.addItemCarrito = function(index){
		
		$scope.$storage.productos.forEach(function (elemento, indice, array) {
    		if (indice === index){
    			//let producto = $scope.$storage.productos.splice(index,1)
    			$scope.producto = elemento

    		}
    		
		});

		
		let itemcarrito =  newItemCarrito($scope.producto )

		var itemcarritoActual;

        for (var i = 0; i < $scope.$storage.carrito.length; i++) {
            if ($scope.$storage.carrito[i].productoId == itemcarrito.productoId) {
                itemcarritoActual = $scope.$storage.carrito[i];
            }
        }

        if (!itemcarritoActual) {
            $scope.$storage.carrito.push(itemcarrito);
        } else {
            itemcarritoActual.lot++;
        }

				
	}

	function newItemCarrito(producto){
		console.log(producto)

		return { productoId: producto.id, name: producto.name, price: producto.price, lot:'1', total: producto.price}
	}
}

ProductosController.$inject = ['$scope', '$localStorage']


module.exports = ProductosController