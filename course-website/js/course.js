!function ($) {

  $(function(){

    var $window = $(window)

    // make code pretty
    window.prettyPrint && prettyPrint();
    
    var now = new Date;
    $.getJSON('/course-website/schedule.json', function(data) {
      $.each(data, function(date, week) {
        console.log(week);
        var $a = $('<a>');
        var $li = $('<li>');
        $a.attr('href', week.path)
           .addClass(week.className)
           .html(week.name);
        $li.append($a);
        $('#projects-list').append($li);
        
        if(Date.parse(date) <= now.getTime()) {
          $('.week.' + week.className).prepend('<a name="this-week"></a>')
                                 .find('.title')
                                 .append('<small>This week</small>');
          $('.' + week.className).addClass('this-week');
        }
      });
      $('#projects-list .this-week').append('<i class="icon-star">');
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