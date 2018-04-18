
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return (guard(context && context['posts'] && context['posts']['display_moderator_tools']) ? '\r\n<li role="presentation" class="dropdown-header">[[topic:tools]]</li>\r\n<li role="presentation">\r\n\t<a component="post/edit" role="menuitem" tabindex="-1" href="#">\r\n\t\t<span class="menu-icon"><i class="fa fa-pencil"></i></span> [[topic:edit]]\r\n\t</a>\r\n</li>\r\n<li role="presentation">\r\n\t<a component="post/delete" role="menuitem" tabindex="-1" href="#" class="' + (guard(context && context['posts'] && context['posts']['deleted']) ? 'hidden' : '') + '">\r\n\t\t<div class="menu-icon"><i class="fa fa-trash-o"></i></div> <span>[[topic:delete]]</span>\r\n\t</a>\r\n</li>\r\n<li role="presentation">\r\n\t<a component="post/restore" role="menuitem" tabindex="-1" href="#" class="' + (!guard(context && context['posts'] && context['posts']['deleted']) ? 'hidden' : '') + '">\r\n\t\t<div class="menu-icon"><i class="fa fa-history"></i></div> <span>[[topic:restore]]</span>\r\n\t</a>\r\n</li>\r\n<li role="presentation">\r\n\t<a component="post/purge" role="menuitem" tabindex="-1" href="#" class="' + (!guard(context && context['posts'] && context['posts']['deleted']) ? 'hidden' : '') + '">\r\n\t\t<span class="menu-icon"><i class="fa fa-eraser"></i></span> [[topic:purge]]\r\n\t</a>\r\n</li>\r\n\r\n' + compiled.blocks['posts.tools'](helpers, context, guard, iter, helper) + '\r\n\r\n' + (guard(context && context['posts'] && context['posts']['display_history']) ? '\r\n<li role="presentation">\r\n\t<a component="post/view-history" role="menuitem" tabindex="-1" href="#">\r\n\t\t<span class="menu-icon"><i class="fa fa-history"></i></span> [[topic:view-history]]\r\n\t</a>\r\n</li>\r\n' : '') + '\r\n\r\n' + (guard(context && context['posts'] && context['posts']['display_move_tools']) ? '\r\n<li role="presentation">\r\n\t<a component="post/move" role="menuitem" tabindex="-1" href="#">\r\n\t\t<span class="menu-icon"><i class="fa fa-arrows"></i></span> [[topic:move]]\r\n\t</a>\r\n</li>\r\n' : '') + '\r\n' + (guard(context && context['posts'] && context['posts']['ip']) ? '\r\n<li role="presentation">\r\n\t<a component="post/copy-ip" role="menuitem" tabindex="-1" href="#" data-clipboard-text="' + helpers.__escape(guard(context && context['posts'] && context['posts']['ip'])) + '">\r\n\t\t<span class="menu-icon" ><i class="fa fa-copy"></i></span> [[topic:copy-ip]] ' + helpers.__escape(guard(context && context['posts'] && context['posts']['ip'])) + '\r\n\t</a>\r\n</li>\r\n' + (guard(context && context['posts'] && context['posts']['display_ip_ban']) ? '\r\n<li role="presentation">\r\n\t<a component="post/ban-ip" role="menuitem" tabindex="-1" href="#" data-ip="' + helpers.__escape(guard(context && context['posts'] && context['posts']['ip'])) + '">\r\n\t\t<span class="menu-icon"><i class="fa fa-ban"></i></span> [[topic:ban-ip]] ' + helpers.__escape(guard(context && context['posts'] && context['posts']['ip'])) + '\r\n\t</a>\r\n</li>\r\n' : '') + '\r\n' : '') + '\r\n<li role="presentation" class="divider"></li>\r\n' : '') + '\r\n\r\n' + (!guard(context && context['posts'] && context['posts']['deleted']) ? '\r\n' + (guard(context && context['config'] && context['config']['loggedIn']) ? '\r\n<li role="presentation">\r\n\t<a component="post/bookmark" role="menuitem" tabindex="-1" href="#" data-bookmarked="' + helpers.__escape(guard(context && context['posts'] && context['posts']['bookmarked'])) + '">\r\n\r\n\t\t<span class="bookmark-text">[[topic:bookmark]]</span>\r\n\t\t<span component="post/bookmark-count" class="bookmarkCount" data-bookmarks="' + helpers.__escape(guard(context && context['posts'] && context['posts']['bookmarks'])) + '">' + helpers.__escape(guard(context && context['posts'] && context['posts']['bookmarks'])) + '</span>&nbsp;\r\n\r\n\t\t<i component="post/bookmark/on" class="fa fa-heart ' + (!guard(context && context['posts'] && context['posts']['bookmarked']) ? 'hidden' : '') + '"></i>\r\n\t\t<i component="post/bookmark/off" class="fa fa-heart-o ' + (guard(context && context['posts'] && context['posts']['bookmarked']) ? 'hidden' : '') + '"></i>\r\n\t</a>\r\n</li>\r\n' : '') + '\r\n\r\n' + (guard(context && context['postSharing'] && context['postSharing']['length']) ? '\r\n<li role="presentation" class="divider"></li>\r\n<li role="presentation" class="dropdown-header">[[topic:share_this_post]]</li>\r\n' : '') + '\r\n' + compiled.blocks['postSharing'](helpers, context, guard, iter, helper) + '\r\n\r\n' + (guard(context && context['posts'] && context['posts']['display_flag_tools']) ? '\r\n<li role="presentation" class="divider"></li>\r\n<li role="presentation">\r\n\t<a component="post/flag" role="menuitem" tabindex="-1" href="#">\r\n\t\t[[topic:flag_title]]\r\n\t</a>\r\n</li>\r\n' : '') + '\r\n' : '');
	}
	
	compiled.blocks = {
	  'postSharing': function postSharing(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['postSharing']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t<li role="presentation">\r\n\t\t<a role="menuitem" component="share/' + helpers.__escape(guard(context && context['postSharing'] && context['postSharing'][key1] && context['postSharing'][key1]['id'])) + '" tabindex="-1" href="#"><span class="menu-icon"><i class="fa ' + helpers.__escape(guard(context && context['postSharing'] && context['postSharing'][key1] && context['postSharing'][key1]['class'])) + '"></i></span> ' + helpers.__escape(guard(context && context['postSharing'] && context['postSharing'][key1] && context['postSharing'][key1]['name'])) + '</a>\r\n\t</li>\r\n';
	    });
	  },
	  'posts.tools': function posts_tools(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['posts'] && context['posts']['tools']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n<li role="presentation">\r\n\t<a component="' + helpers.__escape(guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key1] && context['posts']['tools'][key1]['action'])) + '" role="menuitem" tabindex="-1" href="#">\r\n\t\t<span class="menu-icon"><i class="fa ' + helpers.__escape(guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key1] && context['posts']['tools'][key1]['icon'])) + '"></i></span> ' + guard(context && context['posts'] && context['posts']['tools'] && context['posts']['tools'][key1] && context['posts']['tools'][key1]['html']) + '\r\n\t</a>\r\n</li>\r\n';
	    });
	  }
	};

  return compiled;
});
  