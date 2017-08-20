'use strict';


var m = require('mithril');


var home = {
	view: function () {
		return m('div.screen', [
			m('h1', 'screenHome'),
			m('a', { href: '#!/list', }, 'List'),
		]);
	},
};

var list = {
	view: function () {
		return m('div.screen', [
			m('h1', 'screenList'),
		]);
	},
};

var listItem = {
	view: function () {
		return m('div.screen', [
			m('h1', 'screenListItem'),
		]);
	},
};


module.exports = {
	home: home,
	list: list,
	listItem: listItem,
};
