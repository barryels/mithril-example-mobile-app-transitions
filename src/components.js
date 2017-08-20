'use strict';


var m = require('mithril');


var store = require('./store');


var links = {
	view: function () {
		return m('ul', [
			m('li', m('a', { href: '#!/', }, 'Home')),
			m('li', m('a', { href: '#!/list', }, 'List')),
			m('li', m('a', { href: '#!/list/1', }, 'Item 1')),
		]);
	},
};

var appSection = {
	oninit: function (vnode) {
		vnode.state = {
			routePath: store.currentRoutePath,
			childrenPrevious: vnode.children,
			childrenNext: vnode.children,
			classNameModifier: '',
		};
	},
	onbeforeupdate: function (vnode, vnodeOld) {
		vnode.state.childrenPrevious = vnodeOld.children;
	},
	view: function (vnode) {
		var className = '.appSection';

		vnode.state.childrenNext = vnode.children;

		if (vnode.state.routePath !== store.currentRoutePath) {
			vnode.children = vnode.state.childrenPrevious;

			if (vnode.state.routePath.length > store.currentRoutePath.length) {
				vnode.state.classNameModifier = className + '--backward';
			} else {
				vnode.state.classNameModifier = className + '--forward';
			}

			window.setTimeout(function (vnode) {
				vnode.children = vnode.state.childrenNext;
				m.redraw();
			}, 500, vnode);

			window.setTimeout(function (vnode) {
				vnode.state.classNameModifier = '';
				m.redraw();
			}, 1000, vnode);

			vnode.state.routePath = store.currentRoutePath;
		}

		return m('div' + className + vnode.state.classNameModifier, vnode.children);
	},
};

var appBar = {
	view: function () {
		return m('div.appBar', [
			m(links),
		]);
	},
};


module.exports = {
	links: links,
	appSection: appSection,
	appBar: appBar,
};
