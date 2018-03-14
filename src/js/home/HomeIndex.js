angular.module('app.home', [])
  .config(Config)
  .controller( 'HomeController', require('./controllers/HomeController') )

Config.$inject = ['$stateProvider']
function Config ($stateProvider) {
  $stateProvider
    .state({
      name: 'app.home',
      url: '',
      templateUrl: '/views/home.html',
      controller: 'HomeController',
    })
}
