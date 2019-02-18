import React from 'react';
import './App.css';
import BasicForm from './Components/userForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BasicForm />
        <p className="note">Note: see browser console for redux logging</p>
      </div>
    );
  }
}

export default App;
