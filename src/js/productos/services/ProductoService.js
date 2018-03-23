ProductoService.$inject = ['$http', 'WEB_SERVICE']
function ProductoService($http, WEB_SERVICE) {
  return {
    get: function _get(idproducto) {
      if (idproducto) {
        console.log("Utilizando ProductoService _get con parametro idproducto: " + idproducto )
        return $http.get( encodeURI(`${WEB_SERVICE}/products/${idproducto}`) )
       }
       else{
        console.log("Utilizando ProductoService _get sin parametro" )
        return $http.get( encodeURI(`${WEB_SERVICE}/products`) )
       } 
    },

    add: function _add (product) {
      return $http.post( encodeURI(`${WEB_SERVICE}/products`), {
        product: {
          id: product.id
        }
      })
    },

    delete: function _delete (product) {
      return $http.delete( encodeURI(`${WEB_SERVICE}/products/${product.id}`) )
    }
  }



  ///

 /* 
function _obtenerProductos() {
    $http.get(WEB_SERVICE+'/products')
    .then(function(response) {
      let producto = response.data
      $scope.$storage.productos = producto
    })
  }

 function _obtenerProductoDetalle() {
      //console.log($scope.idproducto + " Este es el estate params id")
      return $http.get(WEB_SERVICE+'/products/'+ $scope.idproducto)
      .then(function (response){
        console.log(response + " Este es el response")
        let data = response.data

        $scope.producto = data

      })
    }*/
}

module.exports = ProductoService
