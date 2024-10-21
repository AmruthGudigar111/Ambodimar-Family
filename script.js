document.addEventListener('DOMContentLoaded', function() {
    // Mock event data
    const events = [
        { date: '2024-11-05', title: 'Family Reunion' },
        { date: '2024-12-10', title: 'Holiday Celebration' },
        { date: '2024-12-25', title: 'Christmas Party' }
    ];

    // Populate the events section with upcoming events
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = events.map(event => 
        `<div>
            <strong>${event.date}</strong>: ${event.title}
        </div>`
    ).join('');

    // Simple calendar logic (for demo purposes)
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
});
