
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="account">\n\t' + (guard(context && context['breadcrumbs'] && context['breadcrumbs']['length']) ? '\n<ol class="breadcrumb">\n\t' + compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + '\n</ol>\n' : '') + '\n\n\t<div class="row account-menu">\r\n\t<div class="col-xs-12">\r\n\t\t<ul class="nav nav-pills pull-right">\r\n\t\t\t<li>\r\n\t\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t\t</li>\r\n\t\t\t' + (guard(context && context['showHidden']) ? '\r\n\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/edit">[[user:edit]]</a></li>\r\n\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/settings">[[user:settings]]</a></li>\r\n\t\t\t' : '') + '\r\n\t\t\t<li class="dropdown bottom-sheet">\r\n\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">\r\n\t\t\t      [[user:more]] <span class="caret"></span>\r\n\t\t\t    </a>\r\n\t\t\t\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t\t\t\t' + (guard(context && context['loggedIn']) ? '\r\n\t\t\t\t\t' + (!guard(context && context['isSelf']) ? '\r\n\t\t\t\t\t' + (!guard(context && context['banned']) ? '\r\n\t\t\t\t\t' + (!guard(context && context['config'] && context['config']['disableChat']) ? '\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component="account/chat" href="#">[[user:chat_with, ' + helpers.__escape(guard(context && context['username'])) + ']]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\r\n\r\n\t\t\t\t\t' + (!guard(context && context['isSelf']) ? '\r\n\t\t\t\t\t' + (guard(context && context['canBan']) ? '\r\n\t\t\t\t\t<li class="' + (guard(context && context['banned']) ? 'hide' : '') + '">\r\n\t\t\t\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="' + (!guard(context && context['banned']) ? 'hide' : '') + '">\r\n\t\t\t\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' + (guard(context && context['isAdmin']) ? '\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t' + (guard(context && context['showHidden']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/info">[[user:account_info]] <i class="fa fa-lock"></i></a></li>\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/following">[[user:following]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/followers">[[user:followers]]</a></li>\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/topics">[[global:topics]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/posts">[[global:posts]]</a></li>\r\n\t\t\t\t\t' + (!guard(context && context['reputation:disabled']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/best">[[global:best]]</a></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t\t\t\t' + (guard(context && context['showHidden']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/watched">[[user:watched]]</a></li>\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/ignored">[[user:ignored]]</a></li>\r\n\t\t\t\t\t' + (!guard(context && context['reputation:disabled']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/upvoted">[[global:upvoted]]</a></li>\r\n\t\t\t\t\t' + (!guard(context && context['downvote:disabled']) ? '\r\n\t\t\t\t\t<li><a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['userslug'])) + '/downvoted">[[global:downvoted]]</a></li>\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t' : '') + '\r\n\r\n\t\t\t\t\t' + compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\n\n\t<div class="row">\n\t\t<div class="col-xs-12">\n\t\t\t' + (guard(context && context['allowUserHomePage']) ? '\n\t\t\t<h4>[[user:select-homepage]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:homepage]]</label>\n\t\t\t\t\t<select class="form-control" data-property="homePageRoute">\n\t\t\t\t\t\t<option value="none">None</option>\n\t\t\t\t\t\t' + compiled.blocks['homePageRoutes'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class="help-block">[[user:homepage_description]]</p>\n\t\t\t\t</div>\n\t\t\t\t<div id="homePageCustom" class="form-group" style="display: none;">\n\t\t\t\t\t<label for="homePageCustom">[[user:custom_route]]</label>\n\t\t\t\t\t<input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="' + helpers.__escape(guard(context && context['settings'] && context['settings']['homePageRoute'])) + '"/>\n\t\t\t\t\t<p class="help-block">[[user:custom_route_help]]</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t' : '') + '\n\n\t\t\t<h4>[[user:browsing]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="openOutgoingLinksInNewTab" ' + (guard(context && context['settings'] && context['settings']['openOutgoingLinksInNewTab']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:open_links_in_new_tab]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t' + (guard(context && context['inTopicSearchAvailable']) ? '\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="topicSearchEnabled" ' + (guard(context && context['settings'] && context['settings']['topicSearchEnabled']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:enable_topic_searching]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<p class="help-block">[[user:topic_search_help]]</p>\n\t\t\t\t' : '') + '\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="scrollToMyPost" ' + (guard(context && context['settings'] && context['settings']['scrollToMyPost']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:scroll_to_my_post]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="delayImageLoading" ' + (guard(context && context['settings'] && context['settings']['delayImageLoading']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:delay_image_loading]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<p class="help-block">[[user:image_load_delay_help]]</p>\n\t\t\t</div>\n\n\t\t\t<h4>[[global:privacy]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t' + (!guard(context && context['hideEmail']) ? '\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="showemail" ' + (guard(context && context['settings'] && context['settings']['showemail']) ? 'checked ' : '') + '/><i class="input-helper"></i> <strong>[[user:show_email]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t' : '') + '\n\t\t\t\t' + (!guard(context && context['hideFullname']) ? '\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="showfullname" ' + (guard(context && context['settings'] && context['settings']['showfullname']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:show_fullname]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t' : '') + '\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="restrictChat" ' + (guard(context && context['settings'] && context['settings']['restrictChat']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:restrict_chats]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t' + (!guard(context && context['disableEmailSubscriptions']) ? '\n\t\t\t<h4>[[global:email]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:digest_label]]</label>\n\t\t\t\t\t<select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">\n\t\t\t\t\t\t' + compiled.blocks['dailyDigestFreqOptions'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class="help-block">[[user:digest_description]]</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t' : '') + '\n\n\t\t\t<h4>[[topic:watch]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnCreate" ' + (guard(context && context['settings'] && context['settings']['followTopicsOnCreate']) ? 'checked ' : '') + '/><i class="input-helper"></i> <strong>[[user:follow_topics_you_create]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnReply" ' + (guard(context && context['settings'] && context['settings']['followTopicsOnReply']) ? 'checked' : '') + '/><i class="input-helper"></i> <strong>[[user:follow_topics_you_reply_to]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h4>[[global:pagination]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="usePagination" ' + (guard(context && context['settings'] && context['settings']['usePagination']) ? 'checked' : '') + '><i class="input-helper"></i> <strong>[[user:paginate_description]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="topicsPerPage">[[user:topics_per_page]] ([[user:max_items_per_page, ' + helpers.__escape(guard(context && context['maxTopicsPerPage'])) + ']])</label>\n\t\t\t\t\t<input type="text" class="form-control" data-property="topicsPerPage" value="' + helpers.__escape(guard(context && context['settings'] && context['settings']['topicsPerPage'])) + '">\n\t\t\t\t</div>\n\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="postsPerPage">[[user:posts_per_page]] ([[user:max_items_per_page, ' + helpers.__escape(guard(context && context['maxPostsPerPage'])) + ']])</label>\n\t\t\t\t\t<input type="text" class="form-control" data-property="postsPerPage" value="' + helpers.__escape(guard(context && context['settings'] && context['settings']['postsPerPage'])) + '">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h4>[[global:language]]</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-lg-12">\n\t\t\t\t\t\t<select data-property="userLang" class="form-control">\n\t\t\t\t\t\t\t' + compiled.blocks['languages'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t' + (guard(context && context['isAdmin']) ? '\n\t\t\t\t' + (guard(context && context['isSelf']) ? '\n\t\t\t\t<label>[[user:acp_language]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-lg-12">\n\t\t\t\t\t\t<select data-property="acpLang" class="form-control">\n\t\t\t\t\t\t\t' + compiled.blocks['acpLanguages'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t' : '') + '\n\t\t\t\t' : '') + '\n\t\t\t</div>\n\n\t\t\t<h4>[[user:notifications_and_sounds]]</h4>\n\t\t\t<div class="user-setting">\n\n\t\t\t\t' + compiled.blocks['notificationSettings'](helpers, context, guard, iter, helper) + '\n\n\t\t\t\t<label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-12">\n\t\t\t\t\t\t<select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">\n\t\t\t\t\t\t\t' + compiled.blocks['upvoteNotifFreq'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="notification">[[user:notification-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="notification" name="notification" data-property="notificationSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t' + compiled.blocks['notificationSound'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="chat-incoming">[[user:incoming-message-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="chat-incoming" name="chat-incoming" data-property="incomingChatSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t' + compiled.blocks['incomingChatSound'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="chat-outgoing">[[user:outgoing-message-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="chat-outgoing" name="chat-outgoing" data-property="outgoingChatSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t' + compiled.blocks['outgoingChatSound'](helpers, context, guard, iter, helper) + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t' + compiled.blocks['customSettings'](helpers, context, guard, iter, helper) + '\n\n\t\t</div>\n\t</div>\n\t<div class="form-actions">\n\t\t<a id="submitBtn" href="#" class="btn btn-primary">[[global:save_changes]]</a>\n\t</div>\n</div>';
	}
	
	compiled.blocks = {
	  'customSettings': function customSettings(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['customSettings']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t<h4>' + helpers.__escape(guard(context && context['customSettings'] && context['customSettings'][key1] && context['customSettings'][key1]['title'])) + '</h4>\n\t\t\t<div class="user-setting">\n\t\t\t\t' + helpers.__escape(guard(context && context['customSettings'] && context['customSettings'][key1] && context['customSettings'][key1]['content'])) + '\n\t\t\t</div>\n\t\t\t';
	    });
	  },
	  'outgoingChatSound': function outgoingChatSound(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['outgoingChatSound']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['outgoingChatSound'] && context['outgoingChatSound'][key1] && context['outgoingChatSound'][key1]['name'])) + '" ' + (guard(context && context['outgoingChatSound'] && context['outgoingChatSound'][key1] && context['outgoingChatSound'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['outgoingChatSound'] && context['outgoingChatSound'][key1] && context['outgoingChatSound'][key1]['name'])) + '</option>\n\t\t\t\t\t\t\t';
	    });
	  },
	  'incomingChatSound': function incomingChatSound(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['incomingChatSound']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['incomingChatSound'] && context['incomingChatSound'][key1] && context['incomingChatSound'][key1]['name'])) + '" ' + (guard(context && context['incomingChatSound'] && context['incomingChatSound'][key1] && context['incomingChatSound'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['incomingChatSound'] && context['incomingChatSound'][key1] && context['incomingChatSound'][key1]['name'])) + '</option>\n\t\t\t\t\t\t\t';
	    });
	  },
	  'notificationSound': function notificationSound(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['notificationSound']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['notificationSound'] && context['notificationSound'][key1] && context['notificationSound'][key1]['name'])) + '" ' + (guard(context && context['notificationSound'] && context['notificationSound'][key1] && context['notificationSound'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['notificationSound'] && context['notificationSound'][key1] && context['notificationSound'][key1]['name'])) + '</option>\n\t\t\t\t\t\t\t';
	    });
	  },
	  'upvoteNotifFreq': function upvoteNotifFreq(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['upvoteNotifFreq']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['upvoteNotifFreq'] && context['upvoteNotifFreq'][key1] && context['upvoteNotifFreq'][key1]['name'])) + '" ' + (guard(context && context['upvoteNotifFreq'] && context['upvoteNotifFreq'][key1] && context['upvoteNotifFreq'][key1]['selected']) ? 'selected' : '') + '>\n\t\t\t\t\t\t\t\t[[user:upvote-notif-freq.' + helpers.__escape(guard(context && context['upvoteNotifFreq'] && context['upvoteNotifFreq'][key1] && context['upvoteNotifFreq'][key1]['name'])) + ']]\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t';
	    });
	  },
	  'notificationSettings': function notificationSettings(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['notificationSettings']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t<label>' + helpers.__escape(guard(context && context['notificationSettings'] && context['notificationSettings'][key1] && context['notificationSettings'][key1]['label'])) + '</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-12">\n\t\t\t\t\t\t<select class="form-control" data-property="' + helpers.__escape(guard(context && context['notificationSettings'] && context['notificationSettings'][key1] && context['notificationSettings'][key1]['name'])) + '">\n\t\t\t\t\t\t\t<option value="none" ' + (guard(context && context['notificationSettings'] && context['notificationSettings'][key1] && context['notificationSettings'][key1]['none']) ? 'selected' : '') + '>[[notifications:none]]</option>\n\t\t\t\t\t\t\t<option value="notification" ' + (guard(context && context['notificationSettings'] && context['notificationSettings'][key1] && context['notificationSettings'][key1]['notification']) ? 'selected' : '') + '>[[notifications:notification_only]]</option>\n\t\t\t\t\t\t\t<option value="email" ' + (guard(context && context['notificationSettings'] && context['notificationSettings'][key1] && context['notificationSettings'][key1]['email']) ? 'selected' : '') + '>[[notifications:email_only]]</option>\n\t\t\t\t\t\t\t<option value="notificationemail" ' + (guard(context && context['notificationSettings'] && context['notificationSettings'][key1] && context['notificationSettings'][key1]['notificationemail']) ? 'selected' : '') + '>[[notifications:notification_and_email]]</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t';
	    });
	  },
	  'acpLanguages': function acpLanguages(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['acpLanguages']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['acpLanguages'] && context['acpLanguages'][key1] && context['acpLanguages'][key1]['code'])) + '" ' + (guard(context && context['acpLanguages'] && context['acpLanguages'][key1] && context['acpLanguages'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['acpLanguages'] && context['acpLanguages'][key1] && context['acpLanguages'][key1]['name'])) + ' (' + helpers.__escape(guard(context && context['acpLanguages'] && context['acpLanguages'][key1] && context['acpLanguages'][key1]['code'])) + ')</option>\n\t\t\t\t\t\t\t';
	    });
	  },
	  'languages': function languages(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['languages']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['code'])) + '" ' + (guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['name'])) + ' (' + helpers.__escape(guard(context && context['languages'] && context['languages'][key1] && context['languages'][key1]['code'])) + ')</option>\n\t\t\t\t\t\t\t';
	    });
	  },
	  'dailyDigestFreqOptions': function dailyDigestFreqOptions(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['dailyDigestFreqOptions']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['dailyDigestFreqOptions'] && context['dailyDigestFreqOptions'][key1] && context['dailyDigestFreqOptions'][key1]['value'])) + '" ' + (guard(context && context['dailyDigestFreqOptions'] && context['dailyDigestFreqOptions'][key1] && context['dailyDigestFreqOptions'][key1]['selected']) ? 'selected="1"' : '') + '>' + helpers.__escape(guard(context && context['dailyDigestFreqOptions'] && context['dailyDigestFreqOptions'][key1] && context['dailyDigestFreqOptions'][key1]['name'])) + '</option>\n\t\t\t\t\t\t';
	    });
	  },
	  'homePageRoutes': function homePageRoutes(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['homePageRoutes']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['homePageRoutes'] && context['homePageRoutes'][key1] && context['homePageRoutes'][key1]['route'])) + '" ' + (guard(context && context['homePageRoutes'] && context['homePageRoutes'][key1] && context['homePageRoutes'][key1]['selected']) ? 'selected="1"' : '') + '>' + helpers.__escape(guard(context && context['homePageRoutes'] && context['homePageRoutes'][key1] && context['homePageRoutes'][key1]['name'])) + '</option>\n\t\t\t\t\t\t';
	    });
	  },
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
  