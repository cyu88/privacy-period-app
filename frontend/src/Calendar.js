import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Import custom CSS file

function CalendarComponent() {
  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Calendar</h2>
      <div className="calendar-wrapper">
        <Calendar className="custom-calendar" />
      </div>
    </div>
  );
}

export default CalendarComponent;
