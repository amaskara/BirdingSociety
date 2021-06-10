

/* ============== SUPPORTS TOUCH OR NOT ========= */
/*! Detects touch support and adds appropriate classes to html and returns a JS object
  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au 
  Licensed under the MIT license  |  https://coderwall.com/p/egbgdw 
*/
var supports = (function() {
    var d = document.documentElement,
        c = "ontouchstart" in window || navigator.msMaxTouchPoints;
    if (c) {
        d.className += "touch";
        return {
            touch: true
        }
    } else {
        d.className += "no-touch";
        return {
            touch: false
        }
    }
})();