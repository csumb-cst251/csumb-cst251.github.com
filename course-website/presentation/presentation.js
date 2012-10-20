(function($) {
  $(document).ready(function() {
    $('.logo').each(function() {
        var prefix = (Math.random > .5) 
						 ? ''
						 : '-';
		    var value = 'rotate('+ prefix + Math.random() * 180 +'deg)';
        $(this).css('left', (Math.random() * $(window).width()) - $(this).width())
               .css('top', (Math.random() * $(window).height()) - $(this).height())
               .css('-webkit-transform', value)
        	 		 .css('transform', value)
        			 .css('-ms-transform', value)
        			 .css('height', (Math.random() * 3) * $(this).height())
        			 .css('-moz-transform', value)
        			 .removeClass('hidden');
    });
  });
})(jQuery);