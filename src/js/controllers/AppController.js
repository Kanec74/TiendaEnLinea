AppController.$inject = ['$scope']

function AppController($scope){
	$scope.nombre = 'Desconocido'

	$scope.presionar = function(){
		alert("hola desde AppController")
	}
}



module.exports = AppController