
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="row">\n\t<div class="col-xs-6 col-sm-8 col-md-6">\n\t\t<div class="list-group media">\n\t\t\t<button type="button" class="list-group-item" data-type="default">\n\t\t\t\t<div class="media-left">\n\t\t\t\t\t' + (guard(context && context['defaultAvatar']) ? '\n\t\t\t\t\t<img class="media-object" src="' + helpers.__escape(guard(context && context['defaultAvatar'])) + '"  />\n\t\t\t\t\t' : '\n\t\t\t\t\t<div class="user-icon media-object" style="background-color: ' + helpers.__escape(guard(context && context['icon'] && context['icon']['bgColor'])) + ';">' + helpers.__escape(guard(context && context['icon'] && context['icon']['text'])) + '</div>\n\t\t\t\t\t') + '\n\t\t\t\t</div>\n\t\t\t\t<div class="media-body">\n\t\t\t\t\t<h4 class="media-heading">[[user:default_picture]]</h4>\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t' + compiled.blocks['pictures'](helpers, context, guard, iter, helper) + '\n\t\t</div>\n\t</div>\n\t<div class="col-xs-6 col-sm-4 col-md-6">\n\t\t<div class="btn-group-vertical btn-block" role="group">\n\t\t\t' + (guard(context && context['allowProfileImageUploads']) ? '\n\t\t\t<button type="button" class="btn btn-default" data-action="upload">\n\t\t\t\t<span class="hidden-xs hidden-sm">\n\t\t\t\t\t[[user:upload_new_picture]]\n\t\t\t\t</span>\n\t\t\t\t<span class="visible-xs-inline visible-sm-inline">\n\t\t\t\t\t<i class="fa fa-plus"></i>\n\t\t\t\t\t<i class="fa fa-upload"></i>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t' : '') + '\n\t\t\t<button type="button" class="btn btn-default" data-action="upload-url">\n\t\t\t\t<span class="hidden-xs hidden-sm">\n\t\t\t\t\t[[user:upload_new_picture_from_url]]\n\t\t\t\t</span>\n\t\t\t\t<span class="visible-xs-inline visible-sm-inline">\n\t\t\t\t\t<i class="fa fa-plus"></i>\n\t\t\t\t\t<i class="fa fa-link"></i>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t' + (guard(context && context['uploaded']) ? '\n\t\t\t<button type="button" class="btn btn-default" data-action="remove-uploaded">\n\t\t\t\t<span class="hidden-xs hidden-sm">\n\t\t\t\t\t[[user:remove_uploaded_picture]]\n\t\t\t\t</span>\n\t\t\t\t<span class="visible-xs-inline visible-sm-inline">\n\t\t\t\t\t<i class="fa fa-picture-o"></i>\n\t\t\t\t\t<i class="fa fa-long-arrow-right"></i>\n\t\t\t\t\t<i class="fa fa-trash-o"></i>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t' : '') + '\n\t\t</div>\n\t</div>\n</div>';
	}
	
	compiled.blocks = {
	  'pictures': function pictures(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['pictures']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t<button type="button" class="list-group-item" data-type="' + helpers.__escape(guard(context && context['pictures'] && context['pictures'][key1] && context['pictures'][key1]['type'])) + '">\n\t\t\t\t<div class="media-left">\n\t\t\t\t\t<img class="media-object" src="' + helpers.__escape(guard(context && context['pictures'] && context['pictures'][key1] && context['pictures'][key1]['url'])) + '" title="' + helpers.__escape(guard(context && context['pictures'] && context['pictures'][key1] && context['pictures'][key1]['text'])) + '" />\n\t\t\t\t</div>\n\t\t\t\t<div class="media-body">\n\t\t\t\t\t<h4 class="media-heading">' + helpers.__escape(guard(context && context['pictures'] && context['pictures'][key1] && context['pictures'][key1]['text'])) + '</h4>\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t';
	    });
	  }
	};

  return compiled;
});
  