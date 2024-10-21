document.addEventListener('DOMContentLoaded', function() {
    // Dynamic event data for the next three months
    const events = [
        { date: '2024-11-05', title: 'Family Reunion' },
        { date: '2024-12-10', title: 'Holiday Celebration' },
        { date: '2024-12-25', title: 'Christmas Party' },
        { date: '2024-01-01', title: 'New Year Celebration' }
    ];

    // Populate the events section dynamically
    const eventsList = document.getElementById('events-list');
    if (events.length > 0) {
        eventsList.innerHTML = events.map(event => 
            `<div>
                <strong>${event.date}</strong>: ${event.title}
            </div>`
        ).join('');
    } else {
        eventsList.innerHTML = '<p>No events found.</p>';
    }

    // Simple calendar for the next three months
    const calendarContainer = document.getElementById('calendar-container');
    const today = new Date();
    const nextThreeMonths = new Date();
    nextThreeMonths.setMonth(today.getMonth() + 3);

    let calendarHTML = '<table><tr>';
    for (let month = today.getMonth(); month <= nextThreeMonths.getMonth(); month++) {
        calendarHTML += `<th>${new Date(today.getFullYear(), month, 1).toLocaleString('default', { month: 'long' })}</th>`;
    }
    calendarHTML += '</tr></table>';
    calendarContainer.innerHTML = calendarHTML;

    // Interactive dynamic styling for calendar dates (for future improvements)
    calendarContainer.addEventListener('click', () => {
        alert("You clicked on the calendar!");
    });
});