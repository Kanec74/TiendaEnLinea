angular.module('app.carrito', ['ui.router'])
	.config(['$stateProvider', function Config($stateProvider){
    $stateProvider
    .state({
			name: 'app.carritodecompra',
			url:'/carrito',
			template: '<ui-view />',
			abstract:true

		})
		.state({
			name: 'app.carritodecompra.index',
			url:'',
			templateUrl: '/views/carritodecompra/carritodecompra.html',
			controller: 'CarritoDeCompraController'
			})
		.state({
			name: 'app.carritodecompra.detalle',
			params:{
				iditemcarrito: {
					value: '000'  //Valor por Defecto
				}
			},
			templateUrl: '/views/carritodecompra/carritodecompradetalle.html',
			controller: 'CarritoDeCompraDetalleController'

		})

	}])
.controller('CarritoDeCompraController', require('./controllers/CarritoDeCompraController'))

.controller('CarritoDeCompraDetalleController', require('./controllers/CarritoDeCompraDetalleController'))

.factory('carritoDeCompraService', require('./services/CarritoDeCompraService'))