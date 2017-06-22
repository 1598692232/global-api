/**
 * Created by ex-pengzhiliang001 on 2017-06-22.
 */
/**
 * Created by ex-pengzhiliang001 on 2017-06-22.
 */
(function (factory,undefined) {
	if(typeof module === 'object' && typeof module.exports == 'object'){
		module.exports = factory();
	}else{
		window.CommonEncapsulation = factory();
	}
})(function () {
	/* vue组件逻辑处理*/
	/*
	 * 多选处理
	 * @param{this} 为组件的this
	 * @param{obj1} 被选择的数组
	 * @param{obj2} 选择之后数组
	 * @param{k} 点击的第几个
	 * @param{maxLength} 最多选几个
	 * @:元素对象为{label:'1',value:1, selected: false} --- {显示文字，值，是否选择}
	 */
	function checkboxSelect(obj1, obj2, k, maxLength, errCallback) {
		var _self = this

		if (_self[obj1][k].selected) {
			_self[obj1][k].selected = false

			_self[obj2].forEach(function(v, i) {
				if(v.value == _self[obj1][k].value){
					_self[obj2].splice(i, 1)
				}
			})
		} else {
			if(maxLength && _self[obj2].length >= parseInt(maxLength)) {
				errCallback()
				return
			}
			_self[obj1][k].selected = true
			_self[obj2].push(_self[obj1][k])
		}
	}

	/*
	 * 单选处理
	 * @param{this} 为组件的this
	 * @param{obj1} 被选择的数组
	 * @param{obj2} 选择之后数组
	 * @param{k} 点击的第几个
	 * @:元素对象为{label:'1',value:1, selected: false} --- {显示文字，值，是否选择}
	 */
	function radioSelect (obj1, obj2, k){
		var _self = this

		if (!_self[obj1][k].selected) {
			_self[obj1].forEach(function(v, i) {
				v.selected = false
			})
			_self[obj1][k].selected = true
			_self[obj2] = _self[obj1][k].id
		} else {
			return false
		}
	}

	/*非vue逻辑处理*/

	return {
		checkboxSelect: checkboxSelect,
		radioSelect: radioSelect
	}
})