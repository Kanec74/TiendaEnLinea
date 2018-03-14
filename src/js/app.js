
require('./dependencias')  //Archivo de Dependencias

require('./usuarios/UsuariosIndex')

require('./productos/ProductosIndex')
  
require('./listadeseos/ListaDeseosIndex')

require('./carritodecompra/CarritoDeCompraIndex')

require('./home/HomeIndex')

require('./login/LoginIndex')

//Modulos de la aplicacion
angular.module('app', [
	'ui.router',
	'ngStorage',
	'app.usuarios',
	'app.productos',
	'app.listadeseos',
	'app.carrito',
	'app.home',
    'app.login'
])



angular.module('app')
	.config(Config)
	.constant('WEB_SERVICE', 'https://amazome.herokuapp.com')
	.controller('AppController', require('./controllers/AppController'))


Config.$inject = ['$stateProvider']

function Config($stateProvider){
	$stateProvider
		.state({
			name: 'app',
			url:'',
			template: '<ui-view></ui-view>',
			abstract: true

		})
		/*.state({
			name: 'app.index',
			url:'',
			templateUrl: '/views/app.index.html',
			controller: 'AppController',
			onEnter: [ '$state', function($state){
				//$state.go('app.usuarios')
			}]

		})*/
		
}


/*angular.module('app')
	.controller('AppController', require('./controllers/AppController'))
	
	
*/