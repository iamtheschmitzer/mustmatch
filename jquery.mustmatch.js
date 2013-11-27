/*jslint white: false */
/*global jQuery, alert */
(function($){
  var must = function(jq, isbad, nm, cb) {
    if (isbad(jq.length)) {
      if (cb) {
        if (jQuery.isFunction(cb)) {
          cb(jq.selector, jq);
        } else {
          console.log(cb);
        }
      } else {
        console.log(jq.selector + " " + nm + " failure");
      }
    }
    return jq;
  };
  jQuery.fn.mm = jQuery.fn.mustmatch = function(cb) {
    return must(this, function(sz){return sz===0;}, "mustmatch", cb);
  };
  jQuery.fn.mi = jQuery.fn.mustidentify = function(cb) {
    return must(this, function(sz){return sz!== 1;}, "mustmatch", cb);
  };
}(jQuery));
