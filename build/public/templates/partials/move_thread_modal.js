
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div id="move_thread_modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="move_topic_label" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t<div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\t\t\t\t<h3 id="move_topic_label">[[topic:move_topic]]</h3>\n\t\t\t</div>\n\t\t\t<div class="modal-body">\n\t\t\t\t<div component="category-selector" class="btn-group ' + (guard(context && context['pullRight']) ? 'pull-right' : '') + '">\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t<span component="category-selector-selected">[[topic:thread_tools.select_category]]</span> <span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t' + compiled.blocks['categories'](helpers, context, guard, iter, helper) + '\n\t</ul>\n</div>\n\t\t\t</div>\n\t\t\t<div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal" id="move_thread_cancel">[[global:buttons.close]]</button>\n\t\t\t\t<button type="button" class="btn btn-primary" id="move_thread_commit" disabled>[[topic:confirm_move]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>';
	}
	
	compiled.blocks = {
	  'categories': function categories(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['categories']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t<li role="presentation" class="category ' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['disabledClass']) ? 'disabled' : '') + '" data-cid="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['cid'])) + '" data-name="' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '">\n\t\t\t<a role="menu-item">' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['level'])) + '<span component="category-markup">' + (guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['icon']) ? '<span class="fa-stack"><i style="color: ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['bgColor'])) + ';" class="fa fa-circle fa-stack-2x"></i><i style="color: ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['color'])) + ';" class="fa fa-stack-1x fa-fw ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['icon'])) + '"></i></span>' : '') + ' ' + helpers.__escape(guard(context && context['categories'] && context['categories'][key1] && context['categories'][key1]['name'])) + '</span></a>\n\t\t</li>\n\t\t';
	    });
	  }
	};

  return compiled;
});
  