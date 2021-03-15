document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'ja',
    initialView: 'dayGridMonth',
    events: '',
    editable: true,
    selectable: true
  });

  calendar.render();
});
