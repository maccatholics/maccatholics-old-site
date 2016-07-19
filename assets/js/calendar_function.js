$(document).ready(function(){
    $('#calendar').fullCalendar({
        /* Load Calendar events */
        googleCalendarApiKey: 'AIzaSyBCaGcgqgLeJCxKwYgNySGcSP_Xe2LqTjI',
        events: {
            googleCalendarId: '45dblcpbd2i11oginolem1m1uc@group.calendar.google.com'
        },
        /* Change Header and change to week view */
        header: {
            left: '',
            center: 'title',
            right: 'month,agendaWeek  prev,next'
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
        handleWindowResize: false,
        scrollTime: "12:00:00"

    });
});
