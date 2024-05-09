import React from 'react';
import './App.css';
import CalendarComponent from './Calendar';


function App() {
  return (
    <div>
      <div className="welcome-container">
        <div className="bubble">
          <p className="welcome">Welcome back! There are</p>
          <h1 className="App-title">12</h1>
          <p className="welcome">days until your next period.</p>
        </div>
      </div>
      <div className="calendar-container">
        <CalendarComponent />
      </div>
    </div>
  );
}

export default App;