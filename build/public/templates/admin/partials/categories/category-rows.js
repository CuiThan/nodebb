
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<ul data-cid="' + helpers.__escape(guard(context && context['cid'])) + '">\r\n' + compiled.blocks['categories'](helpers, context, guard, iter, helper) + '\r\n<li class="children-placeholder"></li>\r\n</ul>\r\n';
	}
	
	compiled.blocks = {
	  'categories': function categories(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['categories']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n    <li data-cid="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '" ' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['disabled']) ? 'class="disabled"' : '') + '>\r\n        <div class="row">\r\n            <div class="col-md-9">\r\n                <div class="clearfix">\r\n                    <div class="toggle">\r\n                        <i class="fa fa-minus"></i>\r\n                    </div>\r\n                    <div class="icon" style="\r\n                        color: ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['color'])) + ';\r\n                        background-color: ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['bgColor'])) + ';\r\n                        ' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['backgroundImage']) ? '\r\n                        background-image: url(\'' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['backgroundImage'])) + '\');\r\n                        ' : '') + '\r\n                    ">\r\n                        <i data-name="icon" value="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['icon'])) + '" class="fa ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['icon'])) + '"></i>\r\n                    </div>\r\n                    <div class="information">\r\n                        <h5 class="category-header">' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-3">\r\n                <div class="clearfix pull-right text-right">\r\n                    <div class="btn-group">\r\n                        <button data-cid="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '" data-action="toggle" data-disabled="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['disabled'])) + '" class="btn btn-sm ' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['disabled']) ? 'btn-primary' : 'btn-danger') + '">\r\n                            ' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['disabled']) ? '\r\n                            [[admin/manage/categories:enable]]\r\n                            ' : '\r\n                            [[admin/manage/categories:disable]]\r\n                            ') + '\r\n                        </button>\r\n                        <a href="./categories/' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '/analytics" class="btn btn-default btn-sm">\r\n                            <i class="fa fa-line-chart"></i>\r\n                        </a>\r\n                        <a href="./categories/' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '" class="btn btn-default btn-sm">\r\n                            [[admin/manage/categories:edit]]\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n';
	    });
	  }
	};

  return compiled;
});
  