(function ($) {
 "use strict";
 $(".single-header").sticky({topSpacing:0});
 // one page nav
 $('#nav').onePageNav({
 	currentClass: 'current',
 	changeHash: false,
 	scrollSpeed: 750,
 	scrollThreshold: 0.5,
 	filter: '',
 	easing: 'swing',
 });


})(jQuery);
