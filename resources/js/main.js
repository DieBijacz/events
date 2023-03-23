// MAIN MENU TOGGLE
$('input[type="radio"]').on('change', function () {
  $('.active').removeClass('active').addClass('leave');
  if ($(this).is(':checked')) {
    var inputVal = $(this).val();
    $('.content[data-content="' + inputVal + '"]').addClass('active');
  }
});

// TOOGLE CHECKBOX IN SEARCH COMPONENT
jQuery(document).ready(function () {
  jQuery('.checkbox-toggle').on('click', function () {
    const target = jQuery(this).attr('name').replace('checkbox-', '');
    if (jQuery(this).is(':checked')) {
      jQuery('#toggle-section-' + target).addClass('show');
    } else {
      jQuery('#toggle-section-' + target).removeClass('show');
    }
  })
});