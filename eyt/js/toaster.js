(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.toaster = factory(root);
  }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
  'use strict';
  return function () {
    var htmlStr = "<div id=\"toast-container\" class=\"toast-center \">\n    <div>\n        <div class=\"toast font-14 toast-info\">\n            <div id=\"toasterMessage\" class=\" toast-message\">\n            </div>\n        </div>\n    </div>\n</div>"
    return {
      init: function() {
        $("body").append(htmlStr);
      },
      pop: function(type, msg) {
        if($("#toast-container").css("visibility") == 'visible') {
          return;
        }
        if(type == 'note') {
          $("#toasterMessage").html(msg);
          $("#toast-container").css("visibility", "visible").css("opacity", 1);
          setTimeout(function() {
            $("#toast-container").css("opacity", 0);
            setTimeout(function() {
              $("#toast-container").css("visibility", "hidden");
            }, 200);
          }, 2000);
        }


      }
    }
  };
});

