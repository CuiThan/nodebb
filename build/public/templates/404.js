
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div class="alert alert-danger">\r\n\t<strong>' + helpers.__escape(guard(context && context['path'])) + ' [[global:404.title]]</strong>\r\n\t' + (guard(context && context['error']) ? '\r\n\t<p>' + helpers.__escape(guard(context && context['error'])) + '</p>\r\n\t' : '\r\n\t<p>[[global:404.message, ' + helpers.__escape(guard(context && context['config'] && context['config']['relative_path'])) + ']]</p>\r\n\t') + '\r\n</div>';
	}

  return compiled;
});
  