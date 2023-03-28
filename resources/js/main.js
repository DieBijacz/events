import { initializeCalendar } from "./calendar";
import { BuildCarousel } from "./carousel";

jQuery(document).ready(function () {
  // checkLatest()
  checkCreate()
  checkSearchToggels()
  initializeCalendar()
  BuildCarousel()
})

// MAIN MENU TOGGLE
$('.menu-radio-btn').on('change', function () {
  $('.content.active').removeClass('active').addClass('leave');
  if ($(this).is(':checked')) {
    var inputVal = $(this).val();
    $('.content[data-content="' + inputVal + '"]').addClass('active').removeClass('leave');
  }
});

// ON LOAD ANIMATE MENU AND CHECK LATEST
function checkLatest() {
  $('#latest-input').prop('checked', true);
  $('#main-menu').addClass('active');
  $('.content[data-content="latest"]').addClass('active');
}

function checkCreate() {
  $('#create-input').prop('checked', true);
  $('#main-menu').addClass('active');
  $('.content[data-content="create"]').addClass('active');
}

// OPENS MORE OPTIONS ON MENU SEARCH TAB
// in search menu tabs will be opened
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

// CHANGES LAYOUT PROPOTIONS LIKE 1:5 WHERE size = 5
export function changeLayoutFlexProportion(size) {
  $('#layout').removeClass().addClass(`flex-${size}`)
}