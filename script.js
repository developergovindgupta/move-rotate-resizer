import resizer from './resizer.min.js';

let options = {
	onDragStart: function (e) {
		// console.log('onDragStart:', e);
		// console.log(e.target.options);
		e.target.style.opacity = '0.8';
		e.target.style.zIndex = '999';
	},
	onDragging: function (e) {
		// console.log('onDragging:', e);
	},
	onDragEnd: function (e) {
		// console.log('onDragEnd:', e);
		// console.log(e.target);
		e.target.style.opacity = '';
		e.target.style.zIndex = '';
	},
	onRotateStart: function (e) {
		// console.log('onRotateStart:', e);
		e.target.style.opacity = '0.8';
		e.target.style.zIndex = '999';
	},
	onRotating: function (e) {
		// console.log('onRotating:', e);
	},
	onRotateEnd: function (e) {
		// console.log('onRotateEnd:', e);
		e.target.style.opacity = '';
		e.target.style.zIndex = '';
	},
	onResizeStart: function (e) {
		// console.log('onResizeStart:', e);
		e.target.style.opacity = '0.8';
		e.target.style.zIndex = '999';
	},
	onResizing: function (e) {
		// console.log('onResizing:', e);
	},
	onResizeEnd: function (e) {
		// console.log('onResizeEnd:', e);
		e.target.style.opacity = '';
		e.target.style.zIndex = '';
	},
	resizers: {
		n: true,
		s: true,
		e: true,
		w: true,
		ne: true,
		nw: true,
		se: true,
		sw: true,
		r: true,
	},
};
let div1 = document.querySelector('#center-resize');
resizer.add(div1, { ...options, ...{ resizeFromCenter: true } });
let div2 = document.querySelector('#corner-resize');
resizer.add(div2, { ...options, ...{} });
let div3 = document.querySelector('#free-resize');
resizer.add(div3, { ...options, ...{ aspectRatio: false } });
let div4 = document.querySelector('#bound-resize');
resizer.add(div4, { ...options, ...{ boundWithContainer: true } });

document.body.addEventListener('click', function (e) {
	console.log('document.body.click', e);
	resizer.hide();
});
