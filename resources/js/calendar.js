// Export calendar function
export function initializeCalendar() {
  const currentDate = new Date();
  let selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  generateCalendar(selectedDate.getMonth(), selectedDate.getFullYear());
  displayDate(currentDate);

  $('#next-month').click(function () {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    generateCalendar(selectedDate.getMonth(), selectedDate.getFullYear());
    displayDate(selectedDate);
  });

  $('#prev-month').click(function () {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    generateCalendar(selectedDate.getMonth(), selectedDate.getFullYear());
    displayDate(selectedDate);
  });
}

function generateCalendar(month, year) {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(year, month, 0);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const $calendarDays = $('#calendar-days').empty();

  // Add empty list items for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    $calendarDays.append($('<li></li>').addClass('empty'));
  }

  // Add radio checkboxes for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const $day = $('<li></li>');
    const $radio = $('<input type="radio"/>').attr('name', 'calendar-day').val(day);
    const $label = $('<label></label>').text(day);
    $label.append($radio);
    $day.append($label);

    if (firstDayOfMonth.getDay() === 5 || firstDayOfMonth.getDay() === 6) {
      $day.addClass('weekend');
    }

    if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
      $radio.prop('checked', true);
    }

    $radio.change(function () {
      const day = $(this).val()
      const month = $('#calendar-month').text()
      const year = $('#calendar-year').text()

      displayDate(new Date(`${month} ${day}, ${year}`))
    });

    $day.on('click', function () {
      const $input = $(this).find('input[type="radio"]');
      const day = $input.val();
      const month = $('#calendar-month').text();
      const year = $('#calendar-year').text();

      const selectedDate = new Date(`${month} ${day}, ${year}`);
      $input.prop('checked', true);
      displayDate(selectedDate);
    });

    $calendarDays.append($day);
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
  }
}

// Display selected date
function displayDate(date) {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  $('#calendar-selected-day').text(date.getDate());
  $('#calendar-month').text(months[date.getMonth()]);
  $('#calendar-year').text(date.getFullYear());
}




