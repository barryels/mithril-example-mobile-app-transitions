'use strict';


var m = require('mithril');


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
	view: function (vnode) {
		return m('div.mainSection', vnode.children);
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
