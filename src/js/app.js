
require('./dependencias')  //Archivo de Dependencias

require('./usuarios/UsuariosIndex')

require('./productos/ProductosIndex')
  
require('./listadeseos/ListaDeseosIndex')

require('./carritodecompra/CarritoDeCompraIndex')

//Modulos de la aplicacion
angular.module('app', [
	'ui.router',
	'ngStorage',
	'app.usuarios',
	'app.productos',
	'app.listadeseos',
	'app.carrito'
])



angular.module('app')
	.config(Config)

Config.$inject = ['$stateProvider']

function Config($stateProvider){
	$stateProvider
		.state({
			name: 'app',
			url:'',
			template: '<ui-view>',
			abstract: true

		})
		.state({
			name: 'app.index',
			url:'',
			templateUrl: '/views/app.index.html',
			controller: 'AppController',
			onEnter: [ '$state', function($state){
				//$state.go('app.usuarios')
			}]

		})
		
}


angular.module('app')
	.controller('AppController', require('./controllers/AppController'))
	
	
