'use strict';


var m = require('mithril');


var components = require('./components');


var _default = {
	view: function (vnode) {
		return m('div.screenContent', [
			m(components.appBar),
			m(components.appSection, vnode.children),
		]);
	},
};


module.exports = {
	default: _default,
};
