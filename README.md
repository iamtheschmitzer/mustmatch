mustmatch
=========

jquery must match plugin.  Allows on-the fly debugging of jquery selectors, in a mimimal library.  Two validations are available:

Matching at Least One DOM Node
==============================
Add a .mm() to your selector to validate _at least one_ matching DOM node was found

$(".someclass").mm();


Identifying Exactly One DOM Node
================================
Add a .mm() to your selector to validate _exactly one_ matching DOM node was found

$(".someparentclass .someclass").mi();

Chaining Methods
================
Since mm() and mi() return the jQuery object, they can be insterted into method chains:

$(".someclass").mm().attr("focus", "true");

Overriding Validation Error Handling
====================================
By default, validation failures will write to the JavaScript console.

Override by providing a callback

$(".someclass").mm(function(sel, jq) {
  alert(sel + " did not match any DOM nodes");
});

