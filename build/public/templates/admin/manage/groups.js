
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="row groups">\r\n\t<div class="col-xs-12">\r\n\t\t<div>\r\n\t\t\t<input id="group-search" type="text" class="form-control" placeholder="[[admin/manage/groups:search-placeholder]]" />\r\n\t\t</div>\r\n\r\n\t\t<table class="table table-striped groups-list">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>[[admin/manage/groups:name]]</th>\r\n\t\t\t\t\t<th class="hidden-xs">[[admin/manage/groups:description]]</th>\r\n\t\t\t\t\t<th class="hidden-xs">[[admin/manage/groups:member-count]]</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t' + compiled.blocks['groups'](helpers, context, guard, iter, helper) + '\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\r\n\t\t<div component="pagination" class="text-center pagination-container' + (!guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages']['length']) ? ' hidden' : '') + '">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + '"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t' + compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + '\n\n\t\t<li class="next pull-right' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + '"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous' + (!guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['prev'] && context['pagination']['prev']['page'])) + '"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['currentPage'])) + ' / ' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '</a>\n\t\t</li>\n\n\t\t<li class="next' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['page'])) + '"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last' + (!guard(context && context['pagination'] && context['pagination']['next'] && context['pagination']['next']['active']) ? ' disabled' : '') + '">\n\t\t\t<a href="?page=' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pageCount'])) + '"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\r\n\t</div>\r\n\r\n\t<div class="modal fade" id="create-modal">\r\n\t\t<div class="modal-dialog">\r\n\t\t\t<div class="modal-content">\r\n\t\t\t\t<div class="modal-header">\r\n\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n\t\t\t\t\t<h4 class="modal-title">[[admin/manage/groups:create]]</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="modal-body">\r\n\t\t\t\t\t<div class="alert alert-danger hide" id="create-modal-error"></div>\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="create-group-name">[[admin/manage/groups:name]]</label>\r\n\t\t\t\t\t\t\t<input type="text" class="form-control" id="create-group-name" placeholder="[[admin/manage/groups:name]]" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="create-group-desc">[[admin/manage/groups:description]]</label>\r\n\t\t\t\t\t\t\t<input type="text" class="form-control" id="create-group-desc" placeholder="[[admin/manage/groups:description-placeholder]]" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="modal-footer">\r\n\t\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal">\r\n\t\t\t\t\t\t[[global:close]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type="button" class="btn btn-primary" id="create-modal-go">\r\n\t\t\t\t\t\t[[admin/manage/groups:create-button]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<button id="create" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n    <i class="material-icons">add</i>\r\n</button>\r\n';
	}
	
	compiled.blocks = {
	  'pagination.pages': function pagination_pages(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['pagination'] && context['pagination']['pages']), function each(key1, index, length) {
	      var key = key1;
	      return '\n\t\t\t' + (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['separator']) ? '\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t' : '\n\t\t\t<li class="page' + (guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['active']) ? ' active' : '') + '" >\n\t\t\t\t<a href="?' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['qs'])) + '" data-page="' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['page'])) + '">' + helpers.__escape(guard(context && context['pagination'] && context['pagination']['pages'] && context['pagination']['pages'][key1] && context['pagination']['pages'][key1]['page'])) + '</a>\n\t\t\t</li>\n\t\t\t') + '\n\t\t';
	    });
	  },
	  'groups': function groups(helpers, context, guard, iter, helper) {
	    return iter(guard(context && context['groups']), function each(key1, index, length) {
	      var key = key1;
	      return '\r\n\t\t\t\t<tr data-groupname="' + helpers.__escape(guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['displayName'])) + '">\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t' + helpers.__escape(guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['displayName'])) + '\r\n\t\t\t\t\t\t' + (guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['system']) ? '\r\n\t\t\t\t\t\t<span class="badge">[[admin/manage/groups:system]]</span>\r\n\t\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class="hidden-xs">\r\n\t\t\t\t\t\t<p class="description">' + helpers.__escape(guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['description'])) + '</p>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class="hidden-xs text-right">\r\n\t\t\t\t\t\t' + helpers.__escape(guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['memberCount'])) + '\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div class="btn-group ">\r\n\t\t\t\t\t\t\t<a href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/admin/manage/groups/' + helpers.__escape(guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['nameEncoded'])) + '" class="btn btn-default btn-xs">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-edit"></i> [[admin/manage/groups:edit]]\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t' + (!guard(context && context['groups'] && context['groups'][key1] && context['groups'][key1]['system']) ? '\r\n\t\t\t\t\t\t\t<button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t\t\t\t\t' : '') + '\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t';
	    });
	  }
	};

  return compiled;
});
  