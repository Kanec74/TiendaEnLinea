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
						url:'/{username}',
						params:{email:''},
						templateUrl: '/views/usuarios/profile.html',
						controller: 'ProfileController'
						})
						.state({
							name: 'app.usuarios.añadir',
							url:'',
							templateUrl:'/views/usuarios/crear_usuario.html',
							controller: 'UsuariosController'
						})
						.state({
							name: 'app.usuarios.editar',
							url: '',
							templateUrl: '/views/usuarios/editar_usuario.html',
							controller: 'UsuariosController'
						})



	}])
.controller('UsuariosController', require('./controllers/UsuariosController'))

.controller('ProfileController', require('./controllers/ProfileController'))
