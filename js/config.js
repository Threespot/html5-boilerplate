(function(root) {
	
	var config = {
		paths: {
			"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min"
		},
		shim: {
			'jquery': {
				exports: '$'
			}
		}
	};

	// IGNORE BELOW THIS LINE...
	
	// Enable cache-busting:
	if ((root.location && root.location.href.indexOf('localhost') >= 0) || root.REQUIRE_NOCACHE) {
		config.urlArgs = "bust="+(new Date()).getTime();
	}

	// Predefine RequireJS setup, or configure existing library:
	if (typeof root.require === 'undefined') root.require = config;
	else if (root.requirejs && typeof root.requirejs.config === 'function') root.requirejs.config(config);
	
}(this));