window.Popper = require('popper.js').default

try{ // Jquery y bootstrap
	
	window.$ = window.jQuery = require('jquery')

	require('bootstrap')

}catch (e){}

//Angulas y sus dependencias

try{
	window.angular = require('angular')

	require('@uirouter/angularjs')
	
	require('ngstorage')
	
}catch(e){}