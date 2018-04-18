
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="account">\r\n\t' + (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ? '\n<ol class="breadcrumb">\n\t' + compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + '\n</ol>\n' : '') + '\r\n\t\r\n\t<div class="row account-menu">\r\n\t<div class="col-xs-12">\r\n\t\t<ul class="nav nav-pills pull-right">\r\n\t\t\t<li>\r\n\t\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t\t</li>\r\n\t\t\t' + (guard(context && context['showHidden']) ? '\r\n\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/edit">[[user:edit]]</a></li>\r\n\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/settings">[[user:settings]]</a></li>\r\n\t\t\t' : '') + '\r\n\t\t\t<li class="dropdown bottom-sheet">\r\n\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">\r\n\t\t\t      [[user:more]] <span class="caret"></span>\r\n\t\t\t    </a>\r\n\t\t\t\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t\t\t\t' + (guard(context && context['loggedIn']) ? '\r\n\t\t\t\t\t' + (!guard(context && context['isSelf']) ? '\r\n\t\t\t\t\t' + (!guard(context && context['banned']) ? '\r\n\t\t\t\t\t' + (!guard(context && context['config'] && context['config']['disableChat']) ? '\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component="account/chat" href="#">[[user:chat_with, ' + helpers.__escape(guard(context && context['username'])) + ']]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\r\n\r\n\t\t\t\t\t' + (!guard(context && context['isSelf']) ? '\r\n\t\t\t\t\t' + (guard(context && context['canBan']) ? '\r\n\t\t\t\t\t<li class="' + (guard(context && context['banned']) ? 'hide' : '') + '">\r\n\t\t\t\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="' + (!guard(context && context['banned']) ? 'hide' : '') + '">\r\n\t\t\t\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' + (guard(context && context['isAdmin']) ? '\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t' + (guard(context && context['showHidden']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/info">[[user:account_info]] <i class="fa fa-lock"></i></a></li>\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/following">[[user:following]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/followers">[[user:followers]]</a></li>\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/topics">[[global:topics]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/posts">[[global:posts]]</a></li>\r\n\t\t\t\t\t' + (!guard(context && context['reputation:disabled']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/best">[[global:best]]</a></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t\t\t\t' + (guard(context && context['showHidden']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/watched">[[user:watched]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/ignored">[[user:ignored]]</a></li>\r\n\t\t\t\t\t' + (!guard(context && context['reputation:disabled']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/upvoted">[[global:upvoted]]</a></li>\r\n\t\t\t\t\t' + (!guard(context && context['downvote:disabled']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/downvoted">[[global:downvoted]]</a></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t' + compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-md-12">\r\n\t\t\t<form class="form-horizontal edit-form">\r\n\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t<label class="col-sm-3 col-lg-2 control-label" for="inputNewEmail">[[user:email]]</label>\r\n\t\t\t\t\t<div class="col-sm-9 col-lg-10">\r\n\t\t\t\t\t\t<input class="form-control" type="text" id="inputNewEmail" placeholder="[[user:email]]" value="' + helpers.__escape(guard(context && context['email'])) + '">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t<!-- disables autocomplete on FF --><input type="password" style="display:none">\r\n\t\t\r\n\t\t\t\t' + (guard(context && context['isSelf']) ? '\r\n\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t<label class="col-sm-3 col-lg-2 control-label" for="inputCurrentPassword">[[user:current_password]]</label>\r\n\t\t\t\t\t<div class="col-sm-9 col-lg-10">\r\n\t\t\t\t\t\t<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""' + (!guard(context && context['hasPassword']) ? ' disabled' : '') + '>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t' : '') + '\r\n\t\t\r\n\t\t\t\t<input type="hidden" name="uid" id="inputUID" value="' + helpers.__escape(guard(context && context['uid'])) + '" />\r\n\t\t\r\n\t\t\t\t<br/>\r\n\t\t\t\t<div class="form-group form-actions">\r\n\t\t\t\t\t<div class="col-sm-offset-3 col-sm-9 col-lg-offset-2 col-lg-10">\r\n\t\t\t\t\t\t<a id="submitBtn" href="#" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_email]]</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n';
	}
	
	compiled.blocks = {
	  'profile_links': function profile_links(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['profile_links']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t' + (index === 0 ? '\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t<li id="' + helpers.__escape(guard(context && context['profile_links'] && context['profile_links'][key1] && context['profile_links'][key1]['id'])) + '" class="plugin-link ' + (guard(context && context['profile_links'] && context['profile_links'][key1] && context['profile_links'][key1]['public']) ? 'public' : 'private') + '"><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/' + helpers.__escape(guard(context && context['profile_links'] && context['profile_links'][key1] && context['profile_links'][key1]['route'])) + '"><i class="fa fa-fw ' + helpers.__escape(guard(context && context['profile_links'] && context['profile_links'][key1] && context['profile_links'][key1]['icon'])) + '"></i> ' + helpers.__escape(guard(context && context['profile_links'] && context['profile_links'][key1] && context['profile_links'][key1]['name'])) + '</a></li>\r\n\t\t\t\t\t';
	    });
	  },
	  'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['breadcrumbs']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t<li' + (index === length - 1 ? ' component="breadcrumb/current"' : '') + ' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" ' + (index === length - 1 ? 'class="active"' : '') + '>\n\t\t' + (!(index === length - 1) ? '<a href="' + helpers.__escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key1] && context['breadcrumbs'][key1]['url'])) + '" itemprop="url">' : '') + '\n\t\t\t<span itemprop="title">\n\t\t\t\t' + helpers.__escape(guard(context && context['breadcrumbs'] && context['breadcrumbs'][key1] && context['breadcrumbs'][key1]['text'])) + '\n\t\t\t\t' + (index === length - 1 ? '\n\t\t\t\t' + (!guard(context && context['feeds:disableRSS']) ? '\n\t\t\t\t' + (guard(context && context['rssFeedUrl']) ? '<a target="_blank" href="' + helpers.__escape(guard(context && context['rssFeedUrl'])) + '"><i class="fa fa-rss-square"></i></a>' : '') : '') + '\n\t\t\t\t' : '') + '\n\t\t\t</span>\n\t\t' + (!(index === length - 1) ? '</a>' : '') + '\n\t</li>\n\t';
	    });
	  }
	};

  return compiled;
});
  