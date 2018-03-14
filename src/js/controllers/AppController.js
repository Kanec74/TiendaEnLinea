AppController.$inject = ['$scope', '$localStorage', '$state']
function AppController($scope, $localStorage, $state) {
 
  $scope.nombre = 'Usuario'

  $scope.$storage = $localStorage.$default({
    user: null,
    api_key: null
  })

  $scope.isAuthenticated = function () {
    return ($scope.$storage.api_key && $scope.$storage.user)
  }

  $scope.logOut = function () {
    delete $scope.$storage.api_key
    delete $scope.$storage.user
    $state.go('app.login')
  }

}
module.exports = AppController
