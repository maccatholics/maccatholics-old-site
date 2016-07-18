$(document).ready(function(){
    $('#calendar').fullCalendar({
        /* Load Calendar events */
        googleCalendarApiKey: 'AIzaSyBcjzW2dLzveyrOwL4TiRSmQYHWGThnD6Q',
        events: {
            googleCalendarId: 'philip.habib6347@gmail.com'
        },
        /* Change Header and change to week view */
        header: {
            left: '',
            center: 'title',
            right: 'prev next'
        },
        defaultView: 'agendaWeek',

        /* Other Styles */
        eventColor: '#009ccc',
        businessHours: {
            start: '12:00',
            end: '23:00',
            dow: [0, 1, 2, 3, 4, 5, 6]
        },
        contentHeight: 700,
        handleWindowResize: false

    });
});
