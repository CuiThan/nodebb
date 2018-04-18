
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<a class="btn btn-primary" href="' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + '/admin/manage/categories">\r\n\t<i class="fa fa-fw fa-chevron-left"></i> [[admin/manage/categories:analytics.back]]\r\n</a>\r\n\r\n<h3>[[admin/manage/categories:analytics.title, ' + helpers.__escape(guard(context && context['name'])) + ']]</h3>\r\n<hr />\r\n\r\n<div class="row">\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="pageviews:hourly" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.pageviews-hourly]]</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="pageviews:daily" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.pageviews-daily]]</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class="row">\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="topics:daily" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.topics-daily]]</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="posts:daily" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.posts-daily]]</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';
	}

  return compiled;
});
  