/*
 * Copyright 2013-2016 Uncharted Software Inc.
 *
 *  Property of Uncharted(TM), formerly Oculus Info Inc.
 *  https://uncharted.software/
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
	return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: '/base',
	paths: {
		cookieUtil: 'influent-clientjs/src/scripts/lib/extern/cookieUtil',
		handlebars: 'influent-clientjs/src/scripts/lib/extern/handlebars',
		hbs: 'influent-clientjs/src/scripts/lib/extern/hbs',
		img: 'influent-clientjs/src/img',
		jquery: 'influent-clientjs/src/scripts/lib/extern/jquery',
		lib: 'influent-clientjs/src/scripts/lib',
		modules: 'influent-clientjs/src/scripts/modules',
		moment: 'influent-clientjs/src/scripts/lib/extern/moment',
		templates: 'influent-clientjs/src/scripts/templates',
		underscore: 'influent-clientjs/src/scripts/lib/extern/underscore',
		views: 'influent-clientjs/src/scripts/views',
		'route-recognizer-bundle': 'route-recognizer',
		'rsvp-bundle': 'rsvp',

		//for testing
		'../../extensions': 'influent-clientjs/test/extensions/extensions',
		'extensions/templates/accountsView/searchDetailsOverlay': 'influent-clientjs/test/extensions/templates/accountsView/searchDetailsOverlay'
	},
	bundles: {
		'rsvp-bundle': [
			'rsvp_base/-internal',
			'rsvp_base/all-settled',
			'rsvp_base/all',
			'rsvp_base/asap',
			'rsvp_base/config',
			'rsvp_base/defer',
			'rsvp_base/enumerator',
			'rsvp_base/events',
			'rsvp_base/filter',
			'rsvp_base/hash-settled',
			'rsvp_base/hash',
			'rsvp_base/instrument',
			'rsvp_base/map',
			'rsvp_base/node',
			'rsvp_base/promise-hash',
			'rsvp_base/promise',
			'rsvp_base/promise/all',
			'rsvp_base/promise/cast',
			'rsvp_base/promise/race',
			'rsvp_base/promise/reject',
			'rsvp_base/promise/resolve',
			'rsvp_base/race',
			'rsvp_base/reject',
			'rsvp_base/resolve',
			'rsvp_base/rethrow',
			'rsvp_base/utils',
			'rsvp_base'
		],
		'route-recognizer-bundle': [
			'route-recognizer/dsl',
			'route-recognizer'
		]
	},
	
	// dynamically load all test files
	deps: allTestFiles,
	
	// we have to kickoff jasmine, as it is asynchronous
	callback: window.__karma__.start
});
