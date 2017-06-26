/**
 * Created by ex-pengzhiliang001 on 2017-06-22.
 */
(function (factory,undefined) {

	if(typeof module === 'object' && typeof module.exports == 'object'){
		module.exports = factory();
	}else{
		window.DomEncapsulation = factory();
	}

})(function () {
	/* 屏幕滚动指定位置 */
	function autoScroll (top, step) {
		var st = top;
		var timer = requestAnimationFrame (function scrollToTop() {
			if (document.body.scrollTop < st) {
				document.body.scrollTop += step;
				timer = requestAnimationFrame(scrollToTop)
			} else {
				cancelAnimationFrame(timer)
			}
		})
	}

	return {
		autoScroll: autoScroll
	}

})