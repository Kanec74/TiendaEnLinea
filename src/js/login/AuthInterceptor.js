AuthInterceptor.$inject = ['$q', '$localStorage', '$state']
function AuthInterceptor($q, $localStorage, $state) {
  return {
    request: function (config) {
      config.headers = config.headers || {}
      if ($localStorage.api_key) {
        config.headers.Authorization = 'Bearer ' + $localStorage.api_key
      }
      return config
    },
    responseError: function (rejection) {
      if (rejection.status === 401) {
        $state.go('app.login')
      }
      return $q.reject(rejection)
    }
  }
}

module.exports = AuthInterceptor
