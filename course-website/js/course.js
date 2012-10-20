!function ($) {

  $(function(){

    var $window = $(window)

    // make code pretty
    window.prettyPrint && prettyPrint();
    var now = new Date;
    var pastWeeks = [];
    $('.week').each(function() {
      if(Date.parse($(this).find('.week-number time:first').attr('datetime')) <= now.getTime()) {
        pastWeeks.push($(this));
      }
    })
    if(pastWeeks.length) {
      pastWeeks.pop().addClass('this-week')
                     .prepend('<a name="this-week"></a>')
                     .find('.title')
                     .append('<small>This week</small>');
        
    }
    $('#hide-past-weeks').click(function() {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.week:not(.this-week)').each(function() {
          if(Date.parse($(this).find('time:first').attr('datetime')) < now.getTime()) {
            $(this).show();
          }
        });
      }
      else {
        $(this).addClass('active');
        $('.week:not(.this-week)').each(function() {
          if(Date.parse($(this).find('time:first').attr('datetime')) < now.getTime()) {
            $(this).hide();
          }
        });
      }
      return false;
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