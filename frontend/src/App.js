import logo from './logo.svg';
import './App.css';
import React from 'react';
import CalendarComponent from './Calendar';


function App() {
  return (
    <div>
      <h1>Welcome to My Basic Page</h1>
      <p>This is a basic webpage created using React!</p>
      <CalendarComponent />
    </div>
  );
}

export default App;
