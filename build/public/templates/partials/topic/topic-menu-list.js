
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return (guard(context && context['privileges'] && context['privileges']['editable']) ? '\n<li><a component="topic/mark-unread-for-all" href="#"><i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]</a></li>\n<li><a component="topic/pin" href="#" class="' + (guard(context && context['pinned']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]</a></li>\n<li><a component="topic/unpin" href="#" class="' + (!guard(context && context['pinned']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]</a></li>\n<li><a component="topic/lock" href="#" class="' + (guard(context && context['locked']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]</a></li>\n<li><a component="topic/unlock" href="#" class="' + (!guard(context && context['locked']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]</a></li>\n<li class="divider"></li>\n<li><a component="topic/move" href="#"><i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]</a></li>\n<li><a component="topic/fork" href="#"><i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.fork]]</a></li>\n<li><a component="topic/move-posts" href="#"><i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move-posts]]</a></li>\n<li class="divider"></li>\n' : '') + '\n\n' + (guard(context && context['privileges'] && context['privileges']['deletable']) ? '\n<li><a component="topic/delete" href="#" class="' + (guard(context && context['deleted']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]</a></li>\n<li><a component="topic/restore" href="#" class="' + (!guard(context && context['deleted']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]</a></li>\n<li><a component="topic/purge" href="#" class="' + (!guard(context && context['deleted']) ? 'hidden' : '') + '"><i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]</a></li>\n' + (guard(context && context['privileges'] && context['privileges']['isAdminOrMod']) ? '\n<li><a component="topic/delete/posts" href="#"><i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete-posts]]</a></li>\n' : '') + '\n\n' + compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + '\n' : '');
	}
	
	compiled.blocks = {
	  'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['thread_tools']), function each(key1, index, length) {
	      var key = key1;
	      return '\n<li><a href="#" class="' + helpers.__escape(guard(context && context['thread_tools'] && context['thread_tools'][key1] && context['thread_tools'][key1]['class'])) + '"><i class="fa fa-fw ' + helpers.__escape(guard(context && context['thread_tools'] && context['thread_tools'][key1] && context['thread_tools'][key1]['icon'])) + '"></i> ' + helpers.__escape(guard(context && context['thread_tools'] && context['thread_tools'][key1] && context['thread_tools'][key1]['title'])) + '</a></li>\n';
	    });
	  }
	};

  return compiled;
});
  