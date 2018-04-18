
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/general/homepage:home-page]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<p>\r\n\t\t\t[[admin/general/homepage:description]]\r\n\t\t</p>\r\n\t\t<form class="row">\r\n\t\t\t<div class="col-sm-6">\r\n\t\t\t\t<label>[[admin/general/homepage:home-page-route]]</label>\r\n\t\t\t\t<select class="form-control" data-field="homePageRoute">\r\n\t\t\t\t\t' + compiled.blocks['routes'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t</select>\r\n\t\t\t\t<div id="homePageCustom" style="display: none;">\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<label>[[admin/general/homepage:custom-route]]</label>\r\n\t\t\t\t\t<input type="text" class="form-control" data-field="homePageCustom"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="allowUserHomePage">\r\n\t\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/general/homepage:allow-user-home-pages]]</strong></span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<label>[[admin/general/homepage:home-page-title]]</label>\r\n\t\t\t\t<input class="form-control" type="text" data-field="homePageTitle" placeholder="[[pages:home]]">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire([\'admin/settings\'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t});\r\n</script>\r\n';
	}
	
	compiled.blocks = {
	  'routes': function routes(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['routes']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['routes'] && context['routes'][key1] && context['routes'][key1]['route'])) + '">' + helpers.__escape(guard(context && context['routes'] && context['routes'][key1] && context['routes'][key1]['name'])) + '</option>\r\n\t\t\t\t\t';
	    });
	  }
	};

  return compiled;
});
  