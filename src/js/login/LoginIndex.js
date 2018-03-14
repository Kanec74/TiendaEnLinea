angular.module('app.login', [])

.config(['$stateProvider', '$httpProvider',
function Config($stateProvider, $httpProvider) {
  $stateProvider
  .state({
    url: '/login',
    name: 'app.login',
    templateUrl: '/views/login.html',
    controller: 'LoginController',
    // resolve: {
    //   user: function ($http) {
    //     return $http.get('/users/current')
    //   }
    // }
  })
  .state({
    url: '/register',
    name: 'app.register',
    templateUrl: '/views/registrousuario.html',
    controller: 'LoginController',
    // resolve: {
    //   user: function ($http) {
    //     return $http.get('/users/current')
    //   }
    // }
  })


  $httpProvider.interceptors.push('AuthInterceptor')
}])
.controller('LoginController', require('./controllers/LoginController'))
.factory('AuthInterceptor', require('./AuthInterceptor'))
