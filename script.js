import resizer from './resizer.js';

document.querySelectorAll('.target').forEach((target) => {
	resizer.add(target, {
    constrainToParent: true,
		onDragStart: function (e) {
			// console.log('onDragStart:', e);
			// console.log(target.options);
			target.style.opacity = '0.8';
			target.style.zIndex = '999';
		},
		onDragging: function (e) {
			// console.log('onDragging:', e);
		},
		onDragEnd: function (e) {
			// console.log('onDragEnd:', e);
			// console.log(target);
			target.style.opacity = '';
			target.style.zIndex = '';
		},
		onRotateStart: function (e) {
			// console.log('onRotateStart:', e);
			target.style.opacity = '0.8';
			target.style.zIndex = '999';
		},
		onRotating: function (e) {
			// console.log('onRotating:', e);
		},
		onRotateEnd: function (e) {
			// console.log('onRotateEnd:', e);
			target.style.opacity = '';
			target.style.zIndex = '';
		},
		onResizeStart: function (e) {
			// console.log('onResizeStart:', e);
			target.style.opacity = '0.8';
			target.style.zIndex = '999';
		},
		onResizing: function (e) {
			// console.log('onResizing:', e);
		},
		onResizeEnd: function (e) {
			// console.log('onResizeEnd:', e);
			target.style.opacity = '';
			target.style.zIndex = '';
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
	});

	// target.addEventListener('click', function (e) {
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// 	console.log('target_click:', e);
	// });
});
document.body.addEventListener('click', function (e) {
	console.log('document.body.click', e);
	resizer.hide();
});
