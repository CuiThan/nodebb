
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="languages">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/general/languages:language-settings]]</div>\r\n\t\t<div class="col-sm-10 col-xs-12">\r\n\t\t\t<p>\r\n\t\t\t\t[[admin/general/languages:description]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<form class="row">\r\n\t\t\t\t<div class="form-group col-sm-6">\r\n\t\t\t\t\t<label for="defaultLang">[[admin/general/languages:default-language]]</label>\r\n\t\t\t\t\t<select id="language" data-field="defaultLang" class="form-control">\r\n\t\t\t\t\t\t' + compiled.blocks['languages'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\r\n\t\t\t<form class="row">\r\n\t\t\t\t<div class="form-group col-sm-6">\r\n\t\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="autoDetectLang" ' + (guard(context && context['autoDetectLang']) ? 'checked' : '') + '/>\r\n\t\t\t\t\t\t\t<span class="mdl-switch__label">[[admin/general/languages:auto-detect]]</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>';
	}
	
	compiled.blocks = {
	  'languages': function languages(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['languages']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['code'])) + '" ' + (guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['name'])) + ' (' + helpers.__escape(guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['code'])) + ')</option>\r\n\t\t\t\t\t\t';
	    });
	  }
	};

  return compiled;
});
  