
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="input-group">\r\n\t<input class="form-control" type="text" component="groups/members/search" placeholder="[[global:search]]"/>\r\n\t<span class="input-group-addon search-button"><i class="fa fa-search"></i></span>\r\n</div><br />\r\n\r\n<table component="groups/members" class="table table-striped table-hover" data-nextstart="' + helpers.__escape(guard(context && context['group'] && context['group']['membersNextStart'])) + '">\r\n\t<tbody>\r\n\t' + compiled.blocks['group.members'](helpers, context, guard, iter, helper) + '\r\n\t</tbody>\r\n</table>';
	}
	
	compiled.blocks = {
	  'group.members': function group_members(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['group'] && context['group']['members']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t<tr data-uid="' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['uid'])) + '">\r\n\t\t<td>\r\n\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['userslug'])) + '">\r\n\t\t\t\t' + (guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['picture']) ? '\r\n\t\t\t\t<img class="avatar avatar-sm" src="' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['picture'])) + '" />\r\n\t\t\t\t' : '\r\n\t\t\t\t<div class="avatar avatar-sm" style="background-color: ' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['icon:bgColor'])) + ';">' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['icon:text'])) + '</div>\r\n\t\t\t\t') + '\r\n\t\t\t</a>\r\n\t\t</td>\r\n\t\t<td class="member-name">\r\n\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/user/' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['userslug'])) + '">' + helpers.__escape(guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['username'])) + '</a> <i title="[[groups:owner]]" class="user-owner-icon fa fa-star text-warning ' + (!guard(context && context['group'] && context['group']['members'] && context['group']['members'][key1] && context['group']['members'][key1]['isOwner']) ? 'invisible' : '') + '"></i>\r\n\r\n\t\t\t' + (guard(context && context['group'] && context['group']['isOwner']) ? '\r\n\t\t\t<div class="owner-controls btn-group pull-right">\r\n\t\t\t\t<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="toggleOwnership" title="[[groups:details.grant]]">\r\n\t\t\t\t\t<i class="fa fa-star"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="kick" title="[[groups:details.kick]]">\r\n\t\t\t\t\t<i class="fa fa-ban"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t' : '') + '\r\n\t\t</td>\r\n\t</tr>\r\n\t';
	    });
	  }
	};

  return compiled;
});
  