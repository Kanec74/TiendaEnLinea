ListaDeseosService.$inject = ['$http', 'WEB_SERVICE']
function ListaDeseosService($http, WEB_SERVICE) {
  return {
    get: function _get() {
      return $http.get( encodeURI(`${WEB_SERVICE}/wish_lists`) )
    },

    add: function _add (nombre) {
      return $http.post( encodeURI(`${WEB_SERVICE}/wish_lists`), {
        wish_list: {
          name: nombre
        }
      })
    },

    delete: function _delete (lista) {
      return $http.delete( encodeURI(`${WEB_SERVICE}/wish_lists/${lista.id}`) )
    }
  }
}

module.exports = ListaDeseosService