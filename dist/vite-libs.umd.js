(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-slider-component')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vue-slider-component'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ViteLibs = {}, global.vueSliderComponent));
})(this, (function (exports, vueSliderComponent) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var vueSliderComponent__default = /*#__PURE__*/_interopDefaultLegacy(vueSliderComponent);



	Object.defineProperty(exports, 'VueSlider', {
		enumerable: true,
		get: function () { return vueSliderComponent__default["default"]; }
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
