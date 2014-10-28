/*jslint sloppy: true, white: true */
/*global $, jQuery, console */
// Immediate method has named parameter - will not conflict
(function ($) {
  // The implementation - pass the jQuery object, the test for badness, label,
  // and optional failure callback
  var must = function(jq, isbad, label, cb) {
    if (isbad(jq.length)) {
      if (cb && jQuery.isFunction(cb)) {
        cb(jq, label);
      } else {
        // Callback not provided, or not a function, call default callback
        $.mustmatch.defaults.callback(jq, label);
      }
    }
    return jq;
  };
  // The jQuery extension methods mustmatch() and mm()
  $.fn.mm = $.fn.mustmatch = function(cb) {
    // Call must() providing comparison of number of matches to zero
    return must(this, function(sz){return sz===0;}, "mustmatch", cb);
  };
  // The jQuery extension method mi()
  $.fn.mi = $.fn.mustidentify = function(cb) {
    // Call must() providing comparison of number of matches to one
    return must(this, function(sz){return sz!== 1;}, "mustidentify", cb);
  };

  // Default callback function logs warning
  $.fn.mustmatch.callback = function(jq, label) {
    var msg = jq.selector + " " + label + " failure";
    // Log a warning, ignore if throws exception (conosle not defined)
    try { console.warn(msg); } catch (ignore) {}
  };
}(jQuery));
