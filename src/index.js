'use strict';


var m = require('mithril');


var actions = require('./actions');
var layouts = require('./layouts');
var screens = require('./screens');


function doLayout(layout, screen) {
	return {
		render: function () {
			return m(layout, m(screen));
		},
	};
}


function setupRoutes() {
	m.route.prefix('#!');
	m.route(document.body, '/', {
		'/': doLayout(layouts.default, screens.home),
		'/list': doLayout(layouts.default, screens.list),
		'/list/:id': doLayout(layouts.default, screens.listItem),
	});
}


function onRouteChange() {
	// console.log('onRouteChange', window.location.hash, e);
	actions.updateCurrentRoutePath(window.location.hash, 'some other thing');
}


function init() {
	setupRoutes();

	window.addEventListener('hashchange', onRouteChange, false);
	// window.addEventListener('pushstate', onRouteChange);
	// window.addEventListener('popstate', onRouteChange);
	onRouteChange(null);
}

init();
