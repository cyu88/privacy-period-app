import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CalendarComponent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fullName, setFullName] = useState("");

  const handleRangeSelection = (startAndEndDates) => {
    setStartDate(startAndEndDates[0]);
    setEndDate(startAndEndDates[1]);
  };

  const logStartEndDates = () => {
    if (startDate && endDate) {
      const rangeLog = {
        startDate: startDate,
        endDate: endDate,
      };
      console.log(JSON.stringify(rangeLog, null, 2));
    } else {
      console.log("Please select both start and end dates.");
    }
  };

  // I lost a fight trying to set up an API endpoint to integrate backend and frontend :(
  const logDates = () => {
    if (startDate && endDate) {
        const rangeLog = {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
        };
        fetch('http://localhost:5000/api/dates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rangeLog)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        console.log("Please select both start and end dates.");
        alert('Please select both start and end dates.');
    }
  };  

  return (
    <div className="calendar-container">
    <h2 className="calendar-header">Calendar</h2>
    <div className="calendar-wrapper">
      <Calendar
        className="custom-calendar"
        selectRange={true}
        onChange={handleRangeSelection}
      />
      <div className="middle-section">
        <button className="button" onClick={logStartEndDates}>
          Log Period
        </button>
      </div>
    </div>
  </div>
  );
}

export default CalendarComponent;
