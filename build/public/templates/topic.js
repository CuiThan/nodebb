
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ? '\n<ol class="breadcrumb">\n\t' + compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + '\n</ol>\n' : '') + '\r\n<div class="row">\r\n\t<div class="topic col-lg-12 col-sm-12" has-widget-class="topic col-lg-9 col-sm-12" has-widget-target="sidebar">\r\n\r\n\t\t<h1 component="post/header" class="hidden-xs">\r\n\t\t\t<i class="pull-left fa fa-thumb-tack ' + (!guard(context && context['pinned']) ? 'hidden' : '') + '" title="[[topic:pinned]]"></i>\r\n\t\t\t<i class="pull-left fa fa-lock ' + (!guard(context && context['locked']) ? 'hidden' : '') + '" title="[[topic:locked]]"></i>\r\n\t\t\t<i class="pull-left fa fa-arrow-circle-right ' + (!guard(context && context['oldCid']) ? 'hidden' : '') + '" title="[[topic:moved]]"></i>\r\n\t\t\t' + compiled.blocks['icons'](helpers, context, guard, iter, helper) + '\r\n\t\t\t<span class="topic-title" component="topic/title">' + helpers.__escape(guard(context && context['title'])) + '</span>\r\n\t\t</h1>\r\n\r\n\t\t' + (guard(context && context['merger']) ? '\r\n\t\t<div component="topic/merged/message" class="alert alert-warning clearfix">\r\n\t\t\t<span class="pull-left">[[topic:merged_message, ' + helpers.__escape(guard(context && context['mergeIntoTid'])) + ', ' + helpers.__escape(guard(context && context['merger'] && context['merger']['mergedIntoTitle'])) + ']]</span>\r\n\t\t\t<span class="pull-right">\r\n\t\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['merger'] && context['merger']['userslug'])) + '">\r\n\t\t\t\t\t<strong>' + helpers.__escape(guard(context && context['merger'] && context['merger']['username'])) + '</strong>\r\n\t\t\t\t</a>\r\n\t\t\t\t<small class="timeago" title="' + helpers.__escape(guard(context && context['mergedTimestampISO'])) + '"></small>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t' : '') + '\r\n\r\n\t\t<div component="topic/deleted/message" class="alert alert-warning' + (!guard(context && context['deleted']) ? ' hidden' : '') + ' clearfix">\r\n\t\t\t<span class="pull-left">[[topic:deleted_message]]</span>\r\n\t\t\t<span class="pull-right">\r\n\t\t\t\t' + (guard(context && context['deleter']) ? '\r\n\t\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['deleter'] && context['deleter']['userslug'])) + '">\r\n\t\t\t\t\t<strong>' + helpers.__escape(guard(context && context['deleter'] && context['deleter']['username'])) + '</strong>\r\n\t\t\t\t</a>\r\n\t\t\t\t<small class="timeago" title="' + helpers.__escape(guard(context && context['deletedTimestampISO'])) + '"></small>\r\n\t\t\t\t' : '') + '\r\n\t\t\t</span>\r\n\t\t</div>\r\n\r\n\t\t<div component="topic" class="posts" data-tid="' + helpers.__escape(guard(context && context['tid'])) + '" data-cid="' + helpers.__escape(guard(context && context['cid'])) + '">\r\n\t\t\t' + compiled.blocks['posts'](helpers, context, guard, iter, helper) + '\r\n\t\t</div>\r\n\r\n\t\t' + (guard(context && context['loggedIn']) ? '\n<div class="row quick-reply">\n    <div class="col-sm-2 hidden-xs reply-user">\n    \t<a href="' + (guard(context && context['loggedInUser'] && context['loggedInUser']['userslug']) ? helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['userslug'])) : '#') + '">\n\t\t\t' + (guard(context && context['loggedInUser'] && context['loggedInUser']['picture']) ? '\n\t\t\t<img component="user/picture" data-uid="' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['uid'])) + '" class="user-avatar" src="' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['picture'])) + '" align="left" itemprop="image" />\n\t\t\t' : '\n\t\t\t<div component="user/picture" data-uid="' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['uid'])) + '" class="user-icon" style="background-color: ' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['icon:text'])) + '</div>\n\t\t\t') + '\n\t\t</a>\n\t\t<div class="author">\n\t\t\t<a href="' + (guard(context && context['loggedInUser'] && context['loggedInUser']['userslug']) ? helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['userslug'])) : '#') + '">\n\t\t\t\t' + helpers.__escape(guard(context && context['loggedInUser'] && context['loggedInUser']['username'])) + '\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class="col-xs-12 col-sm-10 quickreply-message">\n\t\t<textarea component="topic/quickreply/text" class="form-control" rows="5"></textarea>\n\t</div>\n\t<button component="topic/quickreply/button" class="btn btn-primary">Post quick reply</button>\n</div>\n' : '') + '\r\n\r\n\t\t<div class="post-bar">\r\n\t\t\t<div class="clearfix">\r\n\t<div class="tags pull-left hidden-xs">\r\n\t\t' + compiled.blocks['tags'](helpers, context, guard, iter, helper) + '\r\n\t</div>\r\n\r\n\t<div component="topic/browsing-users">\n\t' + compiled.blocks['browsingUsers'](helpers, context, guard, iter, helper) + '\n</div>\r\n\r\n\t<div class="topic-main-buttons pull-right">\r\n\t\t<span class="loading-indicator btn pull-left hidden">\r\n\t\t\t<span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>\r\n\t\t</span>\r\n\r\n\t\t<div class="stats hidden-xs">\n\t<span component="topic/post-count" class="human-readable-number" title="' + helpers.__escape(guard(context && context['postcount'])) + '">' + helpers.__escape(guard(context && context['postcount'])) + '</span><br />\n\t<small>[[global:posts]]</small>\n</div>\n<div class="stats hidden-xs">\n\t<span class="human-readable-number" title="' + helpers.__escape(guard(context && context['viewcount'])) + '">' + helpers.__escape(guard(context && context['viewcount'])) + '</span><br />\n\t<small>[[global:views]]</small>\n</div>\r\n\r\n\t\t<div component="topic/reply/container" class="btn-group action-bar ' + (!guard(context && context['privileges'] && context['privileges']['topics:reply']) ? 'hidden' : '') + '">\n\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/compose?tid=' + helpers.__escape(guard(context && context['tid'])) + '&title=' + helpers.__escape(guard(context && context['title'])) + '" class="btn btn-primary" component="topic/reply" data-ajaxify="false" role="button">[[topic:reply]]</a>\n\t<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu pull-right" role="menu">\n\t\t<li><a href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n' + (guard(context && context['loggedIn']) ? '\n' + (!guard(context && context['privileges'] && context['privileges']['topics:reply']) ? '\n' + (guard(context && context['locked']) ? '\n<a component="topic/reply/locked" class="btn btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>\n' : '') + '\n' : '') + '\n\n' + (!guard(context && context['locked']) ? '\n<a component="topic/reply/locked" class="btn btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>\n' : '') + '\n\n' : '\n\n' + (!guard(context && context['privileges'] && context['privileges']['topics:reply']) ? '\n<a component="topic/reply/guest" href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/login" class="btn btn-primary">[[topic:guest-login-reply]]</a>\n' : '') + '\n') + '\r\n\r\n\t\t' + (guard(context && context['loggedIn']) ? '\r\n\t\t<button component="topic/mark-unread" class="btn btn-default">\r\n\t\t\t<i class="fa fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:mark_unread]]</span>\r\n\t\t</button>\r\n\t\t' : '') + '\r\n\r\n\t\t' + (guard(context && context['config'] && context['config']['loggedIn']) ? '\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span component="topic/following/menu" ' + (!guard(context && context['isFollowing']) ? 'class="hidden"' : '') + '><i class="fa fa-fw fa-bell-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:watching]]</span></span>\n\n\t\t<span component="topic/not-following/menu" ' + (!guard(context && context['isNotFollowing']) ? 'class="hidden"' : '') + '><i class="fa fa-fw fa-bell-slash-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:not-watching]]</span></span>\n\n\t\t<span component="topic/ignoring/menu" ' + (!guard(context && context['isIgnoring']) ? 'class="hidden"' : '') + '><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:ignoring]]</span></span>\n\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw ' + (guard(context && context['isFollowing']) ? 'fa-check' : '') + '"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>\n\t\t<li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw ' + (guard(context && context['isNotFollowing']) ? 'fa-check' : '') + '"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>\n\t\t<li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw ' + (guard(context && context['isIgnoring']) ? 'fa-check' : '') + '"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n' : '') + '\r\n\r\n\t\t' + (guard(context && context['config'] && context['config']['loggedIn']) ? '\n<div class="btn-group bottom-sheet" component="thread/sort">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button"><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:sort_by]]</span>\n\t<span class="visible-xs-inline"><i class="fa fa-fw fa-sort"></i></span> <span class="caret"></span></button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n' : '') + '\r\n\r\n\t\t' + (guard(context && context['privileges'] && context['privileges']['view_thread_tools']) ? '\n<div class="btn-group thread-tools bottom-sheet">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>\n\t\t<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right"></ul>\n</div>\n' : '') + '\r\n\t</div>\r\n</div>\r\n\t\t</div>\r\n\r\n\t\t' + (guard(context && context['config'] && context['config']['usePagination']) ? '\r\n\t\t<div component="pagination" class="text-center pagination-container' + (!guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages']['length']) ? ' hidden' : '') + '">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + '"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t' + iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key1, index, length) {
	    var key = key1;
	    return '\n\t\t\t' + (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['separator']) ? '\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t' : '\n\t\t\t<li class="page' + (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['active']) ? ' active' : '') + '" >\n\t\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['page'])) + '">' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['page'])) + '</a>\n\t\t\t</li>\n\t\t\t') + '\n\t\t';
	  }) + '\n\n\t\t<li class="next pull-right' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + '"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + '"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['currentPage'])) + ' / ' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '</a>\n\t\t</li>\n\n\t\t<li class="next' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + '"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?page=' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\r\n\t\t' : '') + '\r\n\r\n\t\t<div class="visible-xs visible-sm pagination-block text-center">\r\n\t\t\t<div class="progress-bar"></div>\r\n\t\t\t<div class="wrapper">\r\n\t\t\t\t<i class="fa fa-2x fa-angle-double-up pointer fa-fw pagetop"></i>\r\n\t\t\t\t<i class="fa fa-2x fa-angle-up pointer fa-fw pageup"></i>\r\n\t\t\t\t<span class="pagination-text"></span>\r\n\t\t\t\t<i class="fa fa-2x fa-angle-down pointer fa-fw pagedown"></i>\r\n\t\t\t\t<i class="fa fa-2x fa-angle-double-down pointer fa-fw pagebottom"></i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n' + (!guard(context && context['config'] && context['config']['usePagination']) ? '\r\n<noscript>\r\n\t<div component="pagination" class="text-center pagination-container' + (!guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages']['length']) ? ' hidden' : '') + '">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + '"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t' + compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + '\n\n\t\t<li class="next pull-right' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + '"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + '"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['currentPage'])) + ' / ' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '</a>\n\t\t</li>\n\n\t\t<li class="next' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + '"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?page=' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\r\n</noscript>\r\n' : '') + '\r\n';
	}
	
	compiled.blocks = {
	  'pagination.pages': function pagination_pages(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t' + (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['separator']) ? '\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t' : '\n\t\t\t<li class="page' + (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['active']) ? ' active' : '') + '" >\n\t\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['page'])) + '">' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['page'])) + '</a>\n\t\t\t</li>\n\t\t\t') + '\n\t\t';
	    });
	  },
	  'browsingUsers': function browsingUsers(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['browsingUsers']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t<div class="pull-left">\n\t\t<a href="' + (guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['userslug']) ? helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['userslug'])) : '#') + '">\n\t\t\t' + (guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['picture']) ? '\n\t\t\t<img class="avatar avatar-sm avatar-rounded" component="user/picture" data-uid="' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['uid'])) + '" src="' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['picture'])) + '" align="left" itemprop="image" title="' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['username'])) + '"/>\n\t\t\t' : '\n\t\t\t<div class="avatar avatar-sm avatar-rounded" component="user/picture" data-uid="' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['uid'])) + '" title="' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['username'])) + '" style="background-color: ' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['browsingUsers'] && context['browsingUsers'][key1] && context['browsingUsers'][key1]['icon:text'])) + '</div>\n\t\t\t') + '\n\t\t</a>\n\t</div>\n\t';
	    });
	  },
	  'tags': function tags(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['tags']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/tags/' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['value'])) + '">\r\n\t\t<span class="tag-item" data-tag="' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['value'])) + '" style="' + (guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['color']) ? 'color: ' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['color'])) + ';' : '') + (guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['bgColor']) ? 'background-color: ' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['bgColor'])) + ';' : '') + '">' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['value'])) + '</span>\r\n\t\t<span class="tag-topic-count human-readable-number" title="' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['score'])) + '">' + helpers.__escape(guard(context && context['tags'] && context['tags'][key1] && context['tags'][key1]['score'])) + '</span></a>\r\n\t\t';
	    });
	  },
	  'posts': function posts(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['posts']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t<div component="post" class="' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['deleted']) ? 'deleted' : '') + '" data-index="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['index'])) + '" data-pid="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['pid'])) + '" data-uid="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['uid'])) + '" data-timestamp="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['timestamp'])) + '" data-username="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['username'])) + '" data-userslug="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['userslug'])) + '" itemscope itemtype="http://schema.org/Comment">\r\n\t\t\t\t\t<a component="post/anchor" data-index="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['index'])) + '"></a>\r\n\r\n\t\t\t\t\t<meta itemprop="datePublished" content="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['timestampISO'])) + '">\r\n\t\t\t\t\t<meta itemprop="dateModified" content="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['editedISO'])) + '">\r\n\r\n\t\t\t\t\t<div class="row post-header">\r\n\t<div class="col-xs-12">\r\n\t\t<div class="post-time pull-left">\r\n\t\t\t<span class="timeago" title="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['timestampISO'])) + '"></span>\r\n\t\t</div>\r\n\t\t<div class="post-editor pull-left">\r\n\t\t\t<i component="post/edit-indicator" class="fa fa-pencil-square pointer edit-icon ' + (!guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['editor'] && context['posts'][key1]['editor']['username']) ? 'hidden' : '') + '"></i>\r\n\t\t\t<small data-editor="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['editor'] && context['posts'][key1]['editor']['userslug'])) + '" component="post/editor" class="hidden">[[global:last_edited_by, ' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['editor'] && context['posts'][key1]['editor']['username'])) + ']] <span class="timeago" title="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['editedISO'])) + '"></span></small>\r\n\t\t</div>\r\n\t\t' + (!guard(context && context['reputation:disabled']) ? '\r\n\t\t<div class="votes pull-right">\r\n\t\t\t<a component="post/upvote" href="#" class="' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['upvoted']) ? 'upvoted' : '') + '">\r\n\t\t\t\t<i class="fa fa-chevron-up"></i>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span component="post/vote-count" data-votes="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['votes'])) + '">' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['votes'])) + '</span>\r\n\r\n\t\t\t' + (!guard(context && context['downvote:disabled']) ? '\r\n\t\t\t<a component="post/downvote" href="#" class="' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['downvoted']) ? 'downvoted' : '') + '">\r\n\t\t\t\t<i class="fa fa-chevron-down"></i>\r\n\t\t\t</a>\r\n\t\t\t' : '') + '\r\n\t\t</div>\r\n\t\t' : '') + '\r\n\t</div>\r\n</div>\r\n<div class="row post">\r\n\t<div class="col-sm-2 col-md-2 col-lg-2 post-author">\r\n\t\t<a href="' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['userslug']) ? helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['userslug'])) : '#') + '">\r\n\t\t\t' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['picture']) ? '\r\n\t\t\t<img component="user/picture" data-uid="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['uid'])) + '" class="user-avatar" src="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['picture'])) + '" alt="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['username'])) + '" itemprop="image" />\r\n\t\t\t' : '\r\n\t\t\t<div component="user/picture" data-uid="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['uid'])) + '" class="user-icon" style="background-color: ' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['icon:text'])) + '</div>\r\n\t\t\t') + '\r\n\t\t</a>\r\n\t\t<div class="author">\r\n\t\t\t<a href="' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['userslug']) ? helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['userslug'])) : '#') + '">\r\n\t\t\t' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['username'])) + '\r\n\t\t</a>\r\n\t\t\t<br>\r\n\t\t\t' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['selectedGroup'] && context['posts'][key1]['user']['selectedGroup']['slug']) ? '\r\n\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/groups/' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['selectedGroup'] && context['posts'][key1]['user']['selectedGroup']['slug'])) + '"><small class="label group-label" style="background-color: ' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['selectedGroup'] && context['posts'][key1]['user']['selectedGroup']['labelColor'])) + ';">' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['selectedGroup'] && context['posts'][key1]['user']['selectedGroup']['icon']) ? '<i class="fa ' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['selectedGroup'] && context['posts'][key1]['user']['selectedGroup']['icon'])) + '"></i> ' : '') + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['selectedGroup'] && context['posts'][key1]['user']['selectedGroup']['userTitle'])) + '</small></a>\r\n\t\t\t' : '') + '\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-sm-10 col-md-10 col-lg-10 post-content" component="post/content">\r\n\t\t' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['content'])) + '\r\n\t</div>\r\n\t' + (guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['signature']) ? '\r\n\t<div class="col-sm-10 col-md-10 col-lg-10">\r\n\t\t<div class="post-signature" component="post/signature" data-uid="' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['uid'])) + '">\r\n\t\t\t' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['user'] && context['posts'][key1]['user']['signature'])) + '\r\n\t\t</div>\r\n\t</div>\r\n\t' : '') + '\r\n</div>\r\n<div class="row post-footer">\r\n\t<div class="col-xs-12">\r\n\t\t<div class="pull-left">\r\n\t\t\t' + helpers.__escape(guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['reactions'])) + '\r\n\t\t</div>\r\n\t\t<div class="pull-right">\r\n\t\t\t<div class="post-tools">\r\n\t\t\t\t<a component="post/reply" href="#" class="no-select ' + (!guard(context && context['privileges'] && context['privileges']['topics:reply']) ? 'hidden' : '') + '">[[topic:reply]]</a>\r\n\t\t\t\t<a component="post/quote" href="#" class="no-select ' + (!guard(context && context['privileges'] && context['privileges']['topics:reply']) ? 'hidden' : '') + '">[[topic:quote]]</a>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div component="post/tools" class="dropdown moderator-tools bottom-sheet ' + (!guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['display_post_menu']) ? 'hidden' : '') + '">\n\t<a href="#" data-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-v"></i></a>\n\t<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>\n</div>\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t' + (!guard(context && context['posts'] && context['posts'][key1] && context['posts'][key1]['index']) ? '\r\n\t\t\t\t<div class="post-bar-placeholder"></div>\r\n\t\t\t\t' : '') + '\r\n\t\t\t';
	    });
	  },
	  'icons': function icons(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['icons']), function each(key1, index, length) {
	      var key = key1;
	      return helpers.__escape(guard(context && context['icons'] && context['icons'][key1]));
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
  