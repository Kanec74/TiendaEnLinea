LoginController.$inject = ['$scope', '$http', 'WEB_SERVICE', '$localStorage', '$state', '$q']
function LoginController($scope, $http, WEB_SERVICE, $localStorage, $state, $q) {
  $scope.auth = { email: '', password: '' }

  $scope.login = function () {
    $http.post(WEB_SERVICE + '/login', {auth: $scope.auth})
    .then(function (response) {
      let data = response.data
      if (data.jwt) {
        $localStorage.api_key = data.jwt
        return $http.get(WEB_SERVICE + '/users/current' /*, {
          headers: {
            Authorization: "Bearer " + $localStorage.api_key
          }
        }*/)
      } else {
        return $q.reject({message: "No hay token"});
      }
    })
    .then(function (response) {
      console.log(response)
      let data = response.data
      if (data.id) {
        $localStorage.user = data
        $state.go('app.home')
      }
    })
    .catch(function (e) {
      console.error(e)
      if (e.status == 404) {
        alert("Usuario no encontrado !")
      }
    })
  }

  $scope.registrarUsuario = function () {
    

    $http.post(WEB_SERVICE + '/sign_up', {
      user: $scope.user
    })
    .then(function (response) {
      console.log(response)
      
      let data = response.data
      if (data.jwt) {
        $localStorage.api_key = data.jwt
        return $http.get(WEB_SERVICE + '/users/current' /*, {
          headers: {
            Authorization: "Bearer " + $localStorage.api_key
          }
        }*/)
      } else {
        console.log("No hay token")
        return $q.reject({message: "No hay token"});
      }
    })
    .then(function (response) {
      console.log(response)
      let data = response.data
      if (data.id) {
        $localStorage.user = data
        $state.go('app.home')
      }
    })
    .catch(function (e, response) {
      console.error(e)
      if (e.status == 404) {
        alert("No se pudo realizar el registro!")
      }
      if (e.status == 422) {
        if(e.data.password_confirmation){
          alert("Verifique el password de Confirmación : " )

        }

        if(e.data.email){
          alert("Ya existe un registro con el correo: " + $scope.user.email )

        }
        
      }


      $state.go('app.login')
    })
  }
}

module.exports = LoginController
