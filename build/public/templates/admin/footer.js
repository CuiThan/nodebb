
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
	  return '\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class="alert-window" component="toaster/tray"></div>\r\n\r\n\t<div id="footer" class="container" style="padding-top: 50px; display:none;">\r\n\t\t<footer class="footer">Copyright &copy; 2015 <a target="_blank" href="https://nodebb.org">NodeBB</a> by <a target="_blank" href="https://github.com/psychobunny">psychobunny</a>, <a href="https://github.com/julianlam" target="_blank">julianlam</a>, <a href="https://github.com/barisusakli" target="_blank">barisusakli</a> from <a target="_blank" href="http://www.designcreateplay.com">designcreateplay</a></footer>\r\n\t</div>\r\n</body>\r\n</html>\r\n';
	}

  return compiled;
});
  