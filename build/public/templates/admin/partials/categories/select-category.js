
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<form type="form">\r\n\t<div class="form-group">\r\n\t\t<div component="category-selector" class="btn-group">\r\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t\t\t<span component="category-selector-selected">[[topic:thread_tools.select_category]]</span> <span class="caret"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class="dropdown-menu category-dropdown-menu" role="menu">\r\n\t\t\t\t' + compiled.blocks['categories'](helpers, context, guard, iter, helper) + '\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</form>';
	}
	
	compiled.blocks = {
	  'categories': function categories(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['categories']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t<li role="presentation" class="category" data-cid="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '" data-name="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '">\r\n\t\t\t\t\t<a role="menu-item">' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['level'])) + '<span component="category-markup">' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['icon']) ? '<span class="fa-stack"><i style="color: ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['bgColor'])) + ';" class="fa fa-circle fa-stack-2x"></i><i style="color: ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['color'])) + ';" class="fa fa-stack-1x fa-fw ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['icon'])) + '"></i></span>' : '') + ' ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '</span></a>\r\n\t\t\t\t</li>\r\n\t\t\t\t';
	    });
	  }
	};

  return compiled;
});
  