angular.module('app.productos', ['ui.router'])
	.config(['$stateProvider', function Config($stateProvider){
    $stateProvider
    .state({
			name: 'app.productos',
			url:'/productos',
			params:{
				idproducto:{}
			},
			template: '<ui-view />',
			abstract:true

		})
		.state({
			name: 'app.productos.index',
			url:'',
			templateUrl: '/views/productos/productos.html',
			controller: 'ProductosController'
			})
		.state({
			name: 'app.productos.detalle',
			params:{
				idproducto:{}
			},
			templateUrl: '/views/productos/productodetalle.html',
			controller: 'ProductoDetalleController'

		})

	}])
.controller('ProductosController', require('./controllers/ProductosController'))

.controller('ProductoDetalleController', require('./controllers/ProductoDetalleController'))