
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return helpers.__escape(guard(context && context['isSpider'])) + '\n\t\t</div>' + '\n\t</main>\n\t' + (!guard(context && context['isSpider']) ? '\n\t<div class="topic-search hidden">\n\t\t<div class="btn-group">\n\t\t\t<button type="button" class="btn btn-default count"></button>\n\t\t\t<button type="button" class="btn btn-default prev"><i class="fa fa-fw fa-angle-up"></i></button>\n\t\t\t<button type="button" class="btn btn-default next"><i class="fa fa-fw fa-angle-down"></i></button>\n\t\t</div>\n\t</div>\n\n\t<div component="toaster/tray" class="alert-window">\n\t\t<div id="reconnect-alert" class="alert alert-dismissable alert-warning clearfix hide" component="toaster/toast">\n\t\t\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n\t\t\t<p>[[global:reconnecting-message, ' + helpers.__escape(guard(context && context['config'] && context['config']['siteTitle'])) + ']]</p>\n\t\t</div>\n\t</div>\n\t' : '') + '\n\n\n\t<script defer src="' + helpers.__escape(guard(context && context['relative_path'])) + '/assets/nodebb.min.js?' + helpers.__escape(guard(context && context['config'] && context['config']['cache-buster'])) + '"></script>\n\n\t' + compiled.blocks['scripts'](helpers, context, guard, iter, helper) + '\n\n\t<script>\n\t\twindow.addEventListener(\'load\', function () {\n\t\t\trequire([\'forum/footer\']);\n\n\t\t\t' + (guard(context && context['useCustomJS']) ? '\n\t\t\t' + guard(context && context['customJS']) + '\n\t\t\t' : '') + '\n\t\t});\n\t</script>\n\n\t<div class="hide">\n\t<script>\r\n\twindow.addEventListener(\'load\', function () {\r\n\t\tdefine(\'/assets/templates/500.js\', function () {\r\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\r\n\t\t\t\treturn \'<div class="alert alert-danger">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>\' + \r\n\t\t\t\t\thelpers.__escape(get(context && context[\'path\'])) + \'</p>\\n\\t\' + \r\n\t\t\t\t\t(get(context && context[\'error\']) ? \'<p>\' + helpers.__escape(get(context && context[\'error\'])) + \'</p>\' : \'\') + \'\\n\\n\\t\' + \r\n\t\t\t\t\t(get(context && context[\'returnLink\']) ? \'\\n\\t<p>[[error:goback]]</p>\\n\\t\' : \'\') + \'\\n</div>\\n\';\r\n\t\t\t}\r\n\r\n\t\t\treturn compiled;\r\n\t\t});\r\n\t});\r\n</script>\n\t</div>\n</body>\n</html>\n';
	}
	
	compiled.blocks = {
	  'scripts': function scripts(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['scripts']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t<script defer type="text/javascript" src="' + helpers.__escape(guard(context && context['scripts'] && context['scripts'][key1] && context['scripts'][key1]['src'])) + '"></script>\n\t';
	    });
	  }
	};

  return compiled;
});
  