
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="row">\r\n\t<form role="form" class="category">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-md-3 pull-right">\r\n\t\t\t\t<select id="category-selector" class="form-control">\r\n\t\t\t\t\t<option value="global" ' + (!guard(context && context['cid']) ? ' selected ' : '') + '>[[admin/manage/privileges:global]]</option>\r\n\t\t\t\t\t<option disabled>_____________</option>\r\n\t\t\t\t\t' + compiled.blocks['allCategories'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<br/>\r\n\r\n\t\t<div class="">\r\n\t\t\t<p>\r\n\t\t\t\t[[admin/manage/categories:privileges.description]]\r\n\t\t\t</p>\r\n\t\t\t<hr />\r\n\t\t\t<div class="privilege-table-container">\r\n\t\t\t\t' + (guard(context && context['cid']) ? '\r\n\t\t\t\t\t\t\t\t\t<table class="table table-striped privilege-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\r\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="8">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="2">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\r\n\t\t\t\t\t\t\t\t' + compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t' + (guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users']['length']) ? '\r\n\t\t\t\t\t\t\t' + compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + '">\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t' : '\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + '">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.no-users]]\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t') + '\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t<table class="table table-striped privilege-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\r\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="8">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="2">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\r\n\t\t\t\t\t\t\t\t' + compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t' + compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + '\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + '">\r\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToChildren">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<div class="help-block">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t' : '\r\n\t\t\t\t\t\t\t\t\t<table class="table table-striped privilege-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\r\n\t\t\t\t\t\t\t\t<th colspan="3"></th>\r\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\r\n\t\t\t\t\t\t\t\t' + iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users']), function each(key1, index, length) {
	    var key = key1;
	    return '\r\n\t\t\t\t\t\t\t\t<th class="text-center">' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users'] && context['privileges']['labels']['users'][key1] && context['privileges']['labels']['users'][key1]['name'])) + '</th>\r\n\t\t\t\t\t\t\t\t';
	  }) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t' + (guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users']['length']) ? '\r\n\t\t\t\t\t\t\t' + iter(guard(context && context['privileges'] && context['privileges']['users']), function each(key1, index, length) {
	    var key = key1;
	    return '\r\n\t\t\t\t\t\t\t<tr data-uid="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['uid'])) + '">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t' + (guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['picture']) ? '\r\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['picture'])) + '" title="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['username'])) + '" />\r\n\t\t\t\t\t\t\t\t\t' : '\r\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: ' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['icon:text'])) + '</div>\r\n\t\t\t\t\t\t\t\t\t') + '\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['username'])) + '</td>\r\n\t\t\t\t\t\t\t\t' + helpers.__escape(helper(context, helpers, 'spawnPrivilegeStates', [guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['username']), guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['privileges'])])) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t';
	  }) + '\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + '">\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t' : '\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + '">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/privileges:global.no-users]]\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t') + '\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t<table class="table table-striped privilege-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\r\n\t\t\t\t\t\t\t\t<th colspan="3"></th>\r\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\r\n\t\t\t\t\t\t\t\t' + iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups']), function each(key1, index, length) {
	    var key = key1;
	    return '\r\n\t\t\t\t\t\t\t\t<th class="text-center">' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups'] && context['privileges']['labels']['groups'][key1] && context['privileges']['labels']['groups'][key1]['name'])) + '</th>\r\n\t\t\t\t\t\t\t\t';
	  }) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t' + iter(guard(context && context['privileges'] && context['privileges']['groups']), function each(key1, index, length) {
	    var key = key1;
	    return '\r\n\t\t\t\t\t\t\t<tr data-group-name="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['name'])) + '" data-private="' + (guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['isPrivate']) ? '1' : '0') + '">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t' + (guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['isPrivate']) ? '\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\r\n\t\t\t\t\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t\t\t\t\t' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['name'])) + '\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t' + helpers.__escape(helper(context, helpers, 'spawnPrivilegeStates', [guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['name']), guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['privileges'])])) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t';
	  }) + '\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['columnCount'])) + '">\r\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<div class="help-block">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t') + '\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n';
	}
	
	compiled.blocks = {
	  'privileges.groups': function privileges_groups(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['privileges'] && context['privileges']['groups']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t\t\t<tr data-group-name="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['name'])) + '" data-private="' + (guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['isPrivate']) ? '1' : '0') + '">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t' + (guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['isPrivate']) ? '\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\r\n\t\t\t\t\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t\t\t\t\t' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['name'])) + '\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t' + helpers.__escape(helper(context, helpers, 'spawnPrivilegeStates', [guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['name']), guard(context && context['privileges'] && context['privileges']['groups'] && context['privileges']['groups'][key1] && context['privileges']['groups'][key1]['privileges'])])) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t';
	    });
	  },
	  'privileges.labels.groups': function privileges_labels_groups(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t\t\t\t<th class="text-center">' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['groups'] && context['privileges']['labels']['groups'][key1] && context['privileges']['labels']['groups'][key1]['name'])) + '</th>\r\n\t\t\t\t\t\t\t\t';
	    });
	  },
	  'privileges.users': function privileges_users(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['privileges'] && context['privileges']['users']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t\t\t<tr data-uid="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['uid'])) + '">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t' + (guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['picture']) ? '\r\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['picture'])) + '" title="' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['username'])) + '" />\r\n\t\t\t\t\t\t\t\t\t' : '\r\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: ' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['icon:text'])) + '</div>\r\n\t\t\t\t\t\t\t\t\t') + '\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['username'])) + '</td>\r\n\t\t\t\t\t\t\t\t' + helpers.__escape(helper(context, helpers, 'spawnPrivilegeStates', [guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['username']), guard(context && context['privileges'] && context['privileges']['users'] && context['privileges']['users'][key1] && context['privileges']['users'][key1]['privileges'])])) + '\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t';
	    });
	  },
	  'privileges.labels.users': function privileges_labels_users(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t\t\t\t<th class="text-center">' + helpers.__escape(guard(context && context['privileges'] && context['privileges']['labels'] && context['privileges']['labels']['users'] && context['privileges']['labels']['users'][key1] && context['privileges']['labels']['users'][key1]['name'])) + '</th>\r\n\t\t\t\t\t\t\t\t';
	    });
	  },
	  'allCategories': function allCategories(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['allCategories']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t\t<option value="' + helpers.__escape(guard(context && context['allCategories'] && context['allCategories'][key1] && context['allCategories'][key1]['value'])) + '" ' + (guard(context && context['allCategories'] && context['allCategories'][key1] && context['allCategories'][key1]['selected']) ? 'selected' : '') + '>' + helpers.__escape(guard(context && context['allCategories'] && context['allCategories'][key1] && context['allCategories'][key1]['text'])) + '</option>\r\n\t\t\t\t\t';
	    });
	  }
	};

  return compiled;
});
  