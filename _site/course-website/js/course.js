!function ($) {

  $(function(){

    var $window = $(window)

    // make code pretty
    window.prettyPrint && prettyPrint();
    
    var now = new Date;
    $('.week').each(function() {
      if(!$('.this-week').length && Date.parse($(this).data('date')) <= now.getTime()) {
        $(this).addClass('this-week')
               .prepend('<a name="this-week"></a>')
               .find('.title')
               .append('<small>This week</small>');
      }
    });
    
    $('.resources a').each(function() {
      $(this).attr('target', '_blank');
    });
    $('.read').prepend('<i class="icon-book"></i> ');
    $('.watch').prepend('<i class="icon-film"></i> ');    
    $('.practice').prepend('<i class="icon-wrench"></i> ');
    
    $('.resources-toggle .btn').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $($(this).data('enable')).hide();
      }
      else {
        $(this).addClass('active');
        $($(this).data('enable')).show();
      }
    });
  })
}(jQuery);