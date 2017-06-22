/**
 * Created by ex-pengzhiliang001 on 2017-06-22.
 */
(function (factory,undefined) {

	if(typeof module === 'object' && typeof module.exports == 'object'){
		module.exports = factory();
	}else{
		window.ObjectEncapsulation = factory();
	}

})(function () {

	/*clone*/
	function clone() {

	}

	 return {
	 	clone: clone
	 }

})