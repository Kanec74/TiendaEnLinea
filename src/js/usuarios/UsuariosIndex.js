angular.module('app.usuarios', ['ui.router'])
	.config(['$stateProvider', function Config($stateProvider){
    $stateProvider
    .state({
			name: 'app.usuarios',
			url:'/usuarios',
			template: '<ui-view />',
			abstract:true
		})
					.state({
						name: 'app.usuarios.index',
						url:'',
						templateUrl: '/views/usuarios/usuarios.html',
						controller: 'UsuariosController'
						})

						.state({
							name: 'app.usuarios.detalle',
							params:{
							idusuario: {
							value: '000'  //Valor por Defecto
							}
							},

							templateUrl: '/views/usuarios/usuariodetalle.html',
							controller: 'UsuariosDetalleController'

						})

	}])
.controller('UsuariosController', require('./controllers/UsuariosController'))

.controller('UsuariosDetalleController', require('./controllers/UsuariosDetalleController'))