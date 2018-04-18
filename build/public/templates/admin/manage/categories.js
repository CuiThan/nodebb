
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<button id="collapse-all" class="btn btn-default">[[admin/manage/categories:collapse-all]]</button> <button id="expand-all" class="btn btn-default">[[admin/manage/categories:expand-all]]</button>\r\n<hr/>\r\n<div class="categories"></div>\r\n\r\n<button data-action="create" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n    <i class="material-icons">add</i>\r\n</button>';
	}

  return compiled;
});
  