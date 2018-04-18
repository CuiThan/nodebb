
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<form type="form">\r\n\t<div class="form-group">\r\n\t\t<label for="name">[[admin/manage/categories:name]]</label>\r\n\t\t<input type="text" class="form-control" name="name" id="name" />\r\n\t</div>\r\n\t<div class="form-group">\r\n\t\t<label for="parentCid">[[admin/manage/categories:optional-parent-category]]</label>\r\n\t\t<select class="form-control" name="parentCid" id="parentCid">\r\n\t\t\t<option value=""></option>\r\n\t\t\t' + iter(guard(context && context['categories']), function each(key1, index, length) {
	    var key = key1;
	    return '\r\n\t\t\t<option value="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '">' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '</option>\r\n\t\t\t';
	  }) + '\r\n\t\t</select>\r\n\t</div>\r\n\r\n\t<div class="form-group">\r\n\t\t<label for="cloneFromCid">[[admin/manage/categories:optional-clone-settings]]</label>\r\n\t\t<select class="form-control" name="cloneFromCid" id="cloneFromCid">\r\n\t\t\t<option value=""></option>\r\n\t\t\t' + compiled.blocks['categories'](helpers, context, guard, iter, helper) + '\r\n\t\t</select>\r\n\t</div>\r\n</form>';
	}
	
	compiled.blocks = {
	  'categories': function categories(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['categories']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t<option value="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '">' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '</option>\r\n\t\t\t';
	    });
	  }
	};

  return compiled;
});
  