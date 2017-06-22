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
	/* vue组件逻辑处理
	* @param{this} 为组件的this
	* @param{params} 为ajax需要请求的数组对象
	* @param{obj1} 被选择的数组
	* @param{obj2} 选择之后数组
	* @param{k} 点击的第几个
	* @param{maxLength} 最多选几个
	* @:元素对象为{label:'1',value:1, selected: false} --- {显示文字，值，是否选择}
	*/
	function checkboxSelect(obj1, obj2, k, maxLength) {
		var _self = this

		if (_self[obj1][k].selected) {
			_self[obj1][k].selected = false

			_self.params[obj2].forEach(function(v, i) {
				if(v.value == _self[obj1][k].value){
					_self.params[obj2].splice(i, 1)
				}
			})
		} else {
			if(_self.params[obj2].length >= parseInt(maxLength)) {
				Toast.success('最多只能选择' + parseInt(maxLength) + '个', 2000)
				return
			}
			_self[obj1][k].selected = true
			_self.params[[obj2]].push(_self[obj1][k])
		}
	}

	/*非vue逻辑处理*/

	 return {
		 checkboxSelect: checkboxSelect
	 }
})