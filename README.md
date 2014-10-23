jQuery Mustmatch Plugin
=======================

jquery plugin to detect errors in matching jQuery selectors in a minimal library.  Two validations are available:

Matching at Least One DOM Node
==============================
Add a .mustmatch() to your selector to validate _at least one_ matching DOM node was found

```
$(".someclass").mustmatch();
```

or more briefly:

```
$(".someclass").mm();
```

If the .someclass returns no elements, a warning is logged by default:

Identifying Exactly One DOM Node
================================
Add a .mustidentify() to your selector to validate _exactly one_ matching DOM node was found

```
$(".someparentclass .someclass").musidentify();
```

or more briefly:

```
$(".someparentclass .someclass").mi();
```

Handling Matching Failure
=========================
The .mm() and .mi() methods accept a callback to handle failure:

```
$("#user-name").mi(function() {
  console.log("User name not found");
});
```

This can be passed in with each mustmatch and mustidentify call.  If no callback is specified, the default callback, $.fn.mustmatch.callback() is invoked.

The default handler logs a warning to the console.  Set the variable $.fn.mustmatch.callback to modify the default behavior:

```
$.fn.mustmatch.callback = function(jq, label) {
  alert(label + " failure searching for " + jq.selector);
};
```

Chaining Methods
================
Since mm() and mi() return the jQuery object, they can be insterted into method chains:

```
$(".someclass").mm().attr("focus", "true");
```

