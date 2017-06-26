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
	function remove(args, val, key) {
		args.forEach(function (v, k) {
			if (key == undefined && val == v) {
				args.splice(k, 1);
			} else {
				if (v[key] == val) {
					args.splice(k, 1);
				}
			}
		})
	}

	/*去重*/
	function unique(args, key) {
		var arr = [];
		var os = [],is = [];
		args.forEach(function (v, k) {
			if(typeof v == 'object') {
				if (os.indexOf(v[key]) == -1) {
					os.push(v[key]);
					is.push(k);
				}
			} else {
				args.forEach(function(v, k) {
					if (arr.indexOf(v) == -1) {
						arr.push(v)
					}
				})
			}

		})
		if(is.length != 0) {
			is.forEach(function(v1, k1) {
				arr.push(args[v1]);
			})
		}
		return arr;
	}

	/*强制转数组*/
	function toArray() {

	}


	return {
		remove: remove,
		unique: unique,
		toArray: toArray
	}

})