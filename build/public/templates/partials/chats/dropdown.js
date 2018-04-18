
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return guard(context && context['rooms'] && context['rooms']['length']) ? '\r\n' + compiled.blocks['rooms'](helpers, context, guard, iter, helper) + '\r\n' : '\r\n<a href="#" class="no_active">[[modules:chat.no_active]]</a>\r\n';
	}
	
	compiled.blocks = {
	  'rooms': function rooms(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['rooms']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n<a data-ajaxify="false" data-roomid="' + helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['roomId'])) + '" class="' + (guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['unread']) ? 'unread' : '') + '">\r\n\t' + (guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['lastUser']) ? '\r\n\t<div class="chat-image">\r\n\t\t' + (guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['lastUser'] && context['rooms'][key1]['lastUser']['picture']) ? '\r\n\t\t<img class="user-avatar" src="' + helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['lastUser'] && context['rooms'][key1]['lastUser']['picture'])) + '" title="' + helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['lastUser'] && context['rooms'][key1]['lastUser']['username'])) + '" />\r\n\t\t' : '\r\n\t\t<div class="user-icon" style="background-color: ' + helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['lastUser'] && context['rooms'][key1]['lastUser']['icon:bgColor'])) + '">' + helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['lastUser'] && context['rooms'][key1]['lastUser']['icon:text'])) + '</div>\r\n\t\t') + '\r\n\t</div>\r\n\r\n\t<div class="chat-room-name">\r\n\t\t' + (guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['groupChat']) ? '\r\n\t\t' + (guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['roomName']) ? helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['roomName'])) : helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['usernames']))) + '\r\n\t\t' : '') + '\r\n\t\t' + (!guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['groupChat']) ? '\r\n\t\t' + helpers.__escape(guard(context && context['rooms'] && context['rooms'][key1] && context['rooms'][key1]['usernames'])) + '\r\n\t\t' : '') + '\r\n\t</div>\r\n\t' : '') + '\r\n</a>\r\n';
	    });
	  }
	};

  return compiled;
});
  