
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '<div id="taskbar" class="taskbar navbar-fixed-bottom">\n\t<div class="navbar-inner"><ul class="nav navbar-nav pull-right"></ul></div>\n</div>';
	}

  return compiled;
});
  