import { initializeCalendar } from "./calendar";
import { carousel } from "./carousel";

jQuery(document).ready(function () {
  checkLatest()
  checkSearchToggels()
  initializeCalendar()
  carousel()
})

// MAIN MENU TOGGLE
$('.menu-radio-btn').on('change', function () {
  $('.content.active').removeClass('active').addClass('leave');
  if ($(this).is(':checked')) {
    var inputVal = $(this).val();
    $('.content[data-content="' + inputVal + '"]').addClass('active');
  }
});

// ON LOAD ANIMATE MENU AND CHECK LATEST
function checkLatest() {
  $('#latest-input').prop('checked', true);
  $('.content[data-content="latest"]').addClass('active');
  $('#main-menu').addClass('active');
}

// OPENS MORE OPTIONS ON MENU SEARCH TAB
function checkSearchToggels() {
  $('.checkbox-toggle').prop('checked', true);
  $('.toggle-section').addClass('show');
}

// TOOGLE CHECKBOX IN SEARCH COMPONENT
$('.checkbox-toggle').on('click', function () {
  const target = $(this).attr('name').replace('checkbox-', '');
  if ($(this).is(':checked')) {
    $('#toggle-section-' + target).addClass('show');
  } else {
    $('#toggle-section-' + target).removeClass('show');
  }
})

// CALLS FUNCTION x TIMES WITHIN DELAY TIME
export function callFunctionXTimes(fn, x, delay) {
  let count = 0
  const intervalId = setInterval(() => {
    fn(count)
    count++
    if (count === x) {
      clearInterval(intervalId)
    }
  }, delay)
}