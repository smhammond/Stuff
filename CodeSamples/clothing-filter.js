
$(function () {
  // start with first sliding door open, rest closed, no animate

  $('.filter-dropdown').each(function () {
    $(this).next($('.filter-contents')).hide();
    $(this).addClass('filter-hidden');
  });

  $('.filter-dropdown:first').addClass('filter-showing').removeClass('filter-hidden');
  $('.filter-contents').first().show();

  $('.filter-dropdown').click(function () {
    // Hide all first
    hideAll(); 
    // Open up the clicked 
    $(this).next($('.filter-contents')).slideToggle();
    $(this).addClass('filter-showing').removeClass('filter-hidden');
    switchIcon();
  });

  function hideAll() {
    $('.filter-contents').each(function () {
      $(this).slideUp();
      $(this).prev($('filter-dropdown')).removeClass('filter-showing').addClass('filter-hidden');
    });
  }

  function switchIcon() {
    $('.filter-dropdown').each(function () {
      if ($(this).hasClass('filter-showing')) {
        console.log('icon change');
      }

    });
  }

});