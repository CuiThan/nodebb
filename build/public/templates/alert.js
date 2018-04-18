
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div id="' + helpers.__escape(guard(context && context['alert_id'])) + '" class="alert alert-dismissable alert-' + helpers.__escape(guard(context && context['type'])) + ' clearfix" component="toaster/toast">\n\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n\n\t' + (guard(context && context['image']) ? '\n\t<img src="' + helpers.__escape(guard(context && context['image'])) + '">\n\t' : '') + '\n\n\t' + (guard(context && context['title']) ? '\n\t<strong>' + helpers.__escape(guard(context && context['title'])) + '</strong>\n\t' : '') + '\n\n\t' + (guard(context && context['message']) ? '\n\t<p>' + helpers.__escape(guard(context && context['message'])) + '</p>\n\t' : '') + '\n</div>\n';
	}

  return compiled;
});
  