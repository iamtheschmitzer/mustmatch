mustmatch
=========

jquery must match plugin.  Allows on-the fly debugging of jquery selectors, in a mimimal library.  Two validations are available:

Must Match - Matching at least one DOM node
===========================================
Add a .mm() to your selector to validate _at least one_ matching DOM node was found

$(".someclass").mm();


Must Identify - Matching exactly one DOM node
=============================================
Add a .mm() to your selector to validate _exactly one_ matching DOM node was found

$(".someparentclass .someclass").mi();


By default, validation failures will write to the JavaScript console.

Chaining Methods
================
Since mm() and mi() return the jQuery object, they can be insterted into method chains:

$(".someclass").mm().attr("focus", "true");
