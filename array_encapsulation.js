/**
 * Created by ex-pengzhiliang001 on 2017-06-22.
 */
(function (factory,undefined) {

	if(typeof module === 'object' && typeof module.exports == 'object'){
		module.exports = factory();
	}else{
		window.ArrayEncapsulation = factory();
	}

})(function () {
	/*1.纯属组删除；2.元素为对象时，指定删除*/
	function remove(args, val, key){
		if (key == undefined) {
			args.forEach(function (v, k) {
				if (val == v) {
					args.splice(args.indexOf(val), 1);
				} else {
					return ;
				}
			})
		} else {

		}
	}


	return {
		remove: remove
	}

})