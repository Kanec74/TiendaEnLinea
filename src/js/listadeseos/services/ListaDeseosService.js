ListaDeseosService.$inject = ['$http', 'WEB_SERVICE']
function ListaDeseosService($http, WEB_SERVICE) {
  return {
    get: function _get() {
      return $http.get( encodeURI(`${WEB_SERVICE}/wish_lists`) )
    },

    getListProducts: function _getListProducts(idLista) {
      return $http.get( encodeURI(`${WEB_SERVICE}/wish_lists/${idLista}/products`) )
    },

    getInfoList: function _getInfoList(idLista) {
      return $http.get( encodeURI(`${WEB_SERVICE}/wish_lists/${idLista}`) )
    },

    add: function _add (nombre) {
      return $http.post( encodeURI(`${WEB_SERVICE}/wish_lists`), {
        wish_list: {
          name: nombre
        }
      })
    },

    addProductALista: function _addProductALista(product,idlista) {
      return $http.post( encodeURI(`${WEB_SERVICE}/wish_lists/${idlista}/products`), {
        product: {
          id: product.id
        }
      })
    },

    delete: function _delete (lista) {
      return $http.delete( encodeURI(`${WEB_SERVICE}/wish_lists/${lista.id}`) )
    }
  }
}

module.exports = ListaDeseosService