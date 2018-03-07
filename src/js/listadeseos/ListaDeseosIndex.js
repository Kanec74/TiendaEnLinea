angular.module('app.listadeseos', ['ui.router'])
	.config(['$stateProvider', function Config($stateProvider){
    $stateProvider
    .state({
			name: 'app.listadeseos',
			url:'/listadeseos',
			template: '<ui-view />',
			abstract:true

		})
		.state({
			name: 'app.listadeseos.index',
			url:'',
			templateUrl: '/views/listadeseos/listadeseos.html',
			controller: 'ListaDeseosController'
			})
		.state({
			name: 'app.listadeseos.detalle',
			params:{
				idlistadeseos: {
					value: '888'  //Valor por Defecto
				}
			},
			templateUrl: '/views/listadeseos/listadeseosdetalle.html',
			controller: 'ListaDeseosDetalleController'

		})
		.state({
			name: 'app.listadeseos.detalleitem',
			params:{
				iditemlistadeseos: {
					value: '777'  //Valor por Defecto
				}
			},
			templateUrl: '/views/listadeseos/listadeseositem.html',
			controller: 'ListaDeseosDetalleItemController'

		})

	}])
.controller('ListaDeseosController', require('./controllers/ListaDeseosController'))

.controller('ListaDeseosDetalleController', require('./controllers/ListaDeseosDetalleController'))

.controller('ListaDeseosDetalleItemController', require('./controllers/ListaDeseosDetalleItemController'))