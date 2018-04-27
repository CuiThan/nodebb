
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '\r\n' + (!guard(context && context['notifications'] && context['notifications']['length']) ? '\r\n<li class="no-notifs">[[notifications:no_notifs]]</li>\r\n' : '') + '\r\n\r\n' + compiled.blocks['notifications'](helpers, context, guard, iter, helper) + '\r\n';
	}
	
	compiled.blocks = {
	  'notifications': function notifications(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['notifications']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n<li class="' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['readClass'])) + '" data-nid="' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['nid'])) + '" data-path="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['path'])) + '" ' + (guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['pid']) ? ' data-pid="' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['pid'])) + '"' : '') + (guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['tid']) ? ' data-tid="' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['tid'])) + '"' : '') + '>\r\n\t<div class="mark-read" aria-label="Mark Read"></div>\r\n\t<span class="relTime">' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['timeago'])) + '</span>\r\n\r\n\t<div class="notification-image">\r\n\t\t' + (guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['image']) ? '\r\n\t\t' + (guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['from']) ? '\r\n\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['user'] && context['notifications'][key1]['user']['userslug'])) + '"><img class="pull-left user-avatar"src="' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['image'])) + '" /></a>\r\n\t\t' : '') + '\r\n\t\t' : '\r\n\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['user'] && context['notifications'][key1]['user']['userslug'])) + '"><div class="pull-left user-icon" style="background-color: ' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['user'] && context['notifications'][key1]['user']['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['user'] && context['notifications'][key1]['user']['icon:text'])) + '</div></a>\r\n\t\t') + '\r\n\t</div>\r\n\r\n\t<div class="notification-msg">\r\n\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['path'])) + '">\r\n\t\t\t' + helpers.__escape(guard(context && context['notifications'] && context['notifications'][key1] && context['notifications'][key1]['bodyShort'])) + '\r\n\t\t</a>\r\n\t</div>\r\n\r\n</li>\r\n';
	    });
	  }
	};

  return compiled;
});
  